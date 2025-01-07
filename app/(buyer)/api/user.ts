import { endpoints, fetcher, mutator, queryKeys } from '@/axios';
import { getSessionItem } from '@/lib/Sessionstorage';
import { AddressProps, AddressResponse, FavoriteVehicleResponse } from '@/types/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';

export function useAddAddress() {
  const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, isError, error } = useMutation<
    AddressResponse,
    any,
    AddressProps
  >({
    mutationFn: (values: AddressProps) =>
      mutator({ method: 'POST', data: values, url: endpoints.user.addAddress }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.user.root });
    },
  });

  return useMemo(
    () => ({
      addAddress: mutateAsync,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}
export function useUpdateAddAddress() {
  const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, isError, error } = useMutation<
    AddressResponse,
    any,
    { values: AddressProps; id: string }
  >({
    mutationFn: ({ values, id }) =>
      mutator({ method: 'PATCH', data: values, url: endpoints.user.updateAddress(id) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.user.root });
    },
  });

  return useMemo(
    () => ({
      updateAddress: mutateAsync,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}

export function useSetActiveAddress() {
  const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, isError, error } = useMutation<
    AddressResponse,
    any,
    { id: string }
  >({
    mutationFn: ({ id }) => mutator({ method: 'PATCH', url: endpoints.user.setActiveAddress(id) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.user.root });
    },
  });

  return useMemo(
    () => ({
      setActiveAddress: mutateAsync,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}

export function useGetFavoriteVehicle() {
  const accessToken = getSessionItem('accessToken');
  const { data, isLoading, isError, refetch } = useQuery<FavoriteVehicleResponse>({
    queryKey: queryKeys.user.getFavoriteVehicle,
    enabled: !!accessToken,
    queryFn: () => fetcher(endpoints.user.getFavoriteVehicle),
  });

  console.log(data, 'from user.ts');

  return useMemo(
    () => ({
      data,
      userRefetch: refetch,
      isError,
      isLoading,
    }),
    [data, isLoading, isError, refetch],
  );
}
