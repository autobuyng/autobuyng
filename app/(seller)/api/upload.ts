import { endpoints, fetcher, mutator, queryKeys } from '@/axios';
import { IContactDetailsSchema } from '@/Schema/authSchema';
import { Make, UploadedVehiclesResponse, UploadVehicleDataTypes } from '@/types/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';

export function useBookInspection() {
  // const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, isError, error } = useMutation<
    any,
    any,
    IContactDetailsSchema
  >({
    mutationFn: (values) =>
      mutator({ method: 'POST', data: values, url: endpoints.upload.bookInspection }),
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: queryKeys.user.root });
    },
  });

  return useMemo(
    () => ({
      bookInspection: mutateAsync,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}

export function useUploadVehicle() {
  const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, isError, error } = useMutation<
    any,
    any,
    UploadVehicleDataTypes | FormData
  >({
    mutationFn: (values) =>
      mutator({ method: 'POST', data: values, url: endpoints.upload.uploadVehicle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.vehicle.getAllVehicle });
    },
  });

  return useMemo(
    () => ({
      uploadVehicle: mutateAsync,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}

export function useGetAllVehicles() {
  const { data, isLoading, refetch } = useQuery<UploadedVehiclesResponse>({
    queryKey: queryKeys.vehicle.getAllVehicle,
    queryFn: () => fetcher(endpoints.upload.getAllVehicle),
  });

  return useMemo(
    () => ({
      data,
      userRefetch: refetch,
      isLoading,
    }),
    [data, isLoading, refetch],
  );
}

export function useGetVehicleMake() {
  const { data, isLoading, refetch } = useQuery<Make[]>({
    queryKey: queryKeys.vehicle.getAllVehicleMake,
    queryFn: () => fetcher(endpoints.upload.getVehicleMake),
  });

  return useMemo(
    () => ({
      make: data,
      userRefetch: refetch,
      isLoading,
    }),
    [data, isLoading, refetch],
  );
}
