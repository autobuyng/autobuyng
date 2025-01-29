import { endpoints, fetcher, mutator, queryKeys } from '@/axios';
import { getSessionItem } from '@/lib/Sessionstorage';
import {
  AddressProps,
  AddressResponse,
  BankAccount,
  BankDetailsProps,
  FavoriteVehicleResponse,
  Profile,
  UserResponse,
} from '@/types/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';

export function useGetUser() {
  // const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, isError, error } = useMutation<UserResponse, any>({
    mutationFn: () => mutator({ method: 'GET', url: endpoints.auth.currentUser }),
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: queryKeys.user.root });
    },
  });

  return useMemo(
    () => ({
      getUser: mutateAsync,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}

// export function useGetAuthenticatedUser() {
//   const accessToken = getSessionItem('accessToken');
//   const { data, isLoading, refetch } = useQuery<any>({
//     queryKey: queryKeys.user.root,
//     enabled: !!accessToken,
//     queryFn: () => fetcher(endpoints.auth.currentUser),
//   });
//   console.log(data, 'datra');

//   return useMemo(
//     () => ({
//       data: data?.user,
//       userRefetch: refetch,
//       isLoading,
//     }),
//     [data, isLoading, refetch],
//   );
// }

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
export function useAddBankDetails() {
  const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, isError, error } = useMutation<
    AddressResponse,
    any,
    BankDetailsProps
  >({
    mutationFn: (values: BankDetailsProps) =>
      mutator({ method: 'POST', data: values, url: endpoints.user.addBankDetails }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.user.getBankDetails });
    },
  });

  return useMemo(
    () => ({
      addBankDetails: mutateAsync,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}

export function useUpdateBankDetails() {
  const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, isError, error } = useMutation<
    AddressResponse,
    any,
    { id: string; values: BankDetailsProps }
  >({
    mutationFn: ({ values, id }) =>
      mutator({ method: 'PATCH', data: values, url: endpoints.user.updataBankDetails(id) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.user.getBankDetails });
    },
  });

  return useMemo(
    () => ({
      updateBankDetais: mutateAsync,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}
export function useSetActiveBank() {
  const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, isError, error } = useMutation<
    AddressResponse,
    any,
    { id: string }
  >({
    mutationFn: ({ id }) =>
      mutator({ method: 'PATCH', url: endpoints.user.setActiveBankDetails(id) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.user.getBankDetails });
    },
  });

  return useMemo(
    () => ({
      setActiveBank: mutateAsync,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}

export function useGetAllBankDetials() {
  const { data, isLoading, refetch } = useQuery<BankAccount[]>({
    queryKey: queryKeys.user.getBankDetails,
    queryFn: () => fetcher(endpoints.user.getBankDetails),
  });
  console.log(data, 'datra');

  return useMemo(
    () => ({
      data,
      userRefetch: refetch,
      isLoading,
    }),
    [data, isLoading, refetch],
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
export function useDeleteAddress() {
  const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, isError, error } = useMutation<
    AddressResponse,
    any,
    { id: string }
  >({
    mutationFn: ({ id }) => mutator({ method: 'DELETE', url: endpoints.user.deleteAddress(id) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.user.root });
    },
  });

  return useMemo(
    () => ({
      deleteAddress: mutateAsync,
      data,
      isDeleting: isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}

export function useDeleteBankDetails() {
  const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, isError, error } = useMutation<
    AddressResponse,
    any,
    { id: string }
  >({
    mutationFn: ({ id }) =>
      mutator({ method: 'DELETE', url: endpoints.user.deleteBankDetails(id) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.user.getBankDetails });
    },
  });

  return useMemo(
    () => ({
      deleBankDetails: mutateAsync,
      data,
      isDeleting: isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}
export function useEditProfile() {
  const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, isError, error } = useMutation<UserResponse, any, Profile>({
    mutationFn: (values) =>
      mutator({ method: 'PATCH', data: values, url: endpoints.user.editUserProfile }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.user.root });
    },
  });

  return useMemo(
    () => ({
      editUserProfile: mutateAsync,
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
