import { endpoints, mutator } from '@/axios';
import { ApiResponse, SearchQuery, SingleVehicleResponse } from '@/types/types';
import { useMutation } from '@tanstack/react-query';
import { useMemo } from 'react';

export function useSearchVehicle() {
  // const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    ApiResponse,
    any,
    SearchQuery
  >({
    mutationFn: (values: SearchQuery) =>
      mutator({ method: 'GET', data: values, url: endpoints.search.search(values) }),
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: queryKeys.user.root });
    },
  });

  return useMemo(
    () => ({
      search: mutateAsync,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}

export function useLikeVehicle() {
  // const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    ApiResponse,
    any,
    { vehicleId: string }
  >({
    mutationFn: (values: { vehicleId: string }) =>
      mutator({ method: 'PUT', data: values, url: endpoints.search.likevehicle(values) }),
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: queryKeys.user.root });
    },
  });

  return useMemo(
    () => ({
      likeVehicle: mutateAsync,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}
export function useGetVehicle() {
  // const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    SingleVehicleResponse,
    any,
    { vehicleId: string }
  >({
    mutationFn: (values: { vehicleId: string }) =>
      mutator({ method: 'GET', data: values, url: endpoints.search.getvehicle(values) }),
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: queryKeys.user.root });
    },
  });

  return useMemo(
    () => ({
      getVehicle: mutateAsync,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}
