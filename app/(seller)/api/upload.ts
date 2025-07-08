import { endpoints, fetcher, mutator, queryKeys } from '@/axios';
import { IContactDetailsSchema } from '@/Schema/authSchema';
import {
  Make,
  Model,
  SingleVehicleData,
  UploadedVehiclesResponse,
  UploadVehicleDataTypes,
} from '@/types/types';
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
export function useGetSingleVehicle() {
  // const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, isError, error } = useMutation<
    any,
    any,
    UploadVehicleDataTypes | FormData
  >({
    mutationFn: (values) =>
      mutator({ method: 'POST', data: values, url: endpoints.upload.uploadVehicle }),
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: queryKeys.vehicle.getAllVehicle });
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

export function useGetVehicle(id: string) {
  const { data, isLoading, refetch } = useQuery<SingleVehicleData>({
    queryKey: queryKeys.vehicle.getAllVehicleModel,
    queryFn: () => fetcher(endpoints.upload.getSingleVehicle(id)),
  });

  return useMemo(
    () => ({
      vehicle: data,
      refetch,
      isLoading,
    }),
    [data, isLoading, refetch],
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
export function useGetVehicleModel({ make }: { make: string }) {
  const { data, isLoading, refetch } = useQuery<Model[]>({
    queryKey: [queryKeys.vehicle.getAllVehicleModel, make],
    queryFn: () => fetcher(endpoints.upload.getVehicleModel({ make })),
  });

  return useMemo(
    () => ({
      model: data,
      refetch,
      isLoading,
    }),
    [data, isLoading, refetch],
  );
}
