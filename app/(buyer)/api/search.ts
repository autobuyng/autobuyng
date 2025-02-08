import { endpoints, mutator, queryKeys } from '@/axios';
import {
  ApiResponse,
  SearchQuery,
  SimilarVehicleApiResponse,
  SingleVehicleResponse,
} from '@/types/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
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
  const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    ApiResponse,
    any,
    { vehicleId: string }
  >({
    mutationFn: (values: { vehicleId: string }) =>
      mutator({ method: 'PUT', data: values, url: endpoints.search.likevehicle(values) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.user.getFavoriteVehicle });
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
  const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    SingleVehicleResponse,
    any,
    { vehicleId: string }
  >({
    mutationFn: (values: { vehicleId: string }) =>
      mutator({ method: 'GET', data: values, url: endpoints.search.getvehicle(values) }),
    onSuccess: (data, variables) => {
      queryClient.setQueryData(['vehicle', variables.vehicleId], data); // Cache result
    },
  });

  const getCachedVehicle = (vehicleId: string) => {
    return queryClient.getQueryData<SingleVehicleResponse>(['vehicle', vehicleId]);
  };

  return useMemo(
    () => ({
      getVehicle: mutateAsync,
      getCachedVehicle,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}
export function useGetSimilarVehicle() {
  // const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    SimilarVehicleApiResponse,
    any,
    { vehicleId: string }
  >({
    mutationFn: (values: { vehicleId: string }) =>
      mutator({ method: 'GET', data: values, url: endpoints.search.getsimilarvehicle(values) }),
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: queryKeys.user.root });
    },
  });

  return useMemo(
    () => ({
      getSimilarVehicle: mutateAsync,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}
