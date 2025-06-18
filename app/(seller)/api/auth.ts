import { endpoints, mutator, queryKeys } from '@/axios';
import {
  IRegistrationPayload,
  ISellerRegistrationPayload,
  ISellerRegistrationPayloadDealer,
} from '@/Schema/authSchema';
import {
  CacDataResponse,
  EmailverificationResponse,
  ILoginPayload,
  ISellerRegistrationResponse,
  NinDataResponse,
} from '@/types/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useMemo } from 'react';

export function useLogin() {
  const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, error, isError } = useMutation<any, any, ILoginPayload>({
    mutationFn: (values: ILoginPayload) =>
      mutator({ method: 'POST', data: values, url: endpoints.auth.login }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.user.root });
    },
  });

  return useMemo(
    () => ({
      login: mutateAsync,
      data,
      isLoggingIn: isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}

export function useRegister() {
  // const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, isError, error } = useMutation<
    ISellerRegistrationResponse,
    any,
    ISellerRegistrationPayload
  >({
    mutationFn: (values: IRegistrationPayload) =>
      mutator({ method: 'POST', data: values, url: endpoints.auth.registerseller }),
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: queryKeys.user.root });
    },
  });

  return useMemo(
    () => ({
      signup: mutateAsync,
      data,
      isRegistering: isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}
export function useRegisterBusiness() {
  // const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, isError, error } = useMutation<
    ISellerRegistrationResponse,
    any,
    ISellerRegistrationPayloadDealer
  >({
    mutationFn: (values: IRegistrationPayload) =>
      mutator({ method: 'POST', data: values, url: endpoints.auth.registerseller }),
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: queryKeys.user.root });
    },
  });

  return useMemo(
    () => ({
      signup: mutateAsync,
      data,
      isRegistering: isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}

export function useVerifyEmail() {
  // const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, isError, error } = useMutation<
    EmailverificationResponse,
    any,
    { token: string }
  >({
    mutationFn: (values: { token: string }) =>
      mutator({ method: 'POST', data: values, url: endpoints.auth.verifyEmail }),
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: queryKeys.user.root });
    },
  });

  return useMemo(
    () => ({
      verifyEmail: mutateAsync,
      data,
      isVerifying: isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}

export function useForgotPassword() {
  // const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, isError, error } = useMutation<any, any, { email: string }>(
    {
      mutationFn: (values: { email: string }) =>
        mutator({ method: 'POST', data: values, url: endpoints.auth.forgetPassword }),
      onSuccess: () => {
        // queryClient.invalidateQueries({ queryKey: queryKeys.user.root });
      },
    },
  );

  return useMemo(
    () => ({
      forgotPassword: mutateAsync,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}

export function useResetPassword() {
  // const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, isError, error } = useMutation<
    any,
    any,
    { token: string; password: string }
  >({
    mutationFn: (values: { token: string; password: string }) =>
      mutator({ method: 'POST', data: values, url: endpoints.auth.resetPassword }),
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: queryKeys.user.root });
    },
  });

  return useMemo(
    () => ({
      resetPassword: mutateAsync,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}
export function useResendEmail() {
  const { mutateAsync, data, isPending, isError, error } = useMutation<any, any, { email: string }>(
    {
      mutationFn: (values: { email: string }) =>
        mutator({ method: 'POST', data: values, url: endpoints.auth.resendEmail }),
    },
  );

  return useMemo(
    () => ({
      resendEmail: mutateAsync,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}

export function useVerifyIdentity() {
  const { mutateAsync, data, isPending, isError, error } = useMutation<
    NinDataResponse | CacDataResponse,
    AxiosError,
    { nin?: string; cac?: string }
  >({
    mutationFn: (values: { nin?: string; cac?: string }) =>
      mutator({ method: 'POST', data: values, url: endpoints.auth.verifyIdentity }),
  });

  return useMemo(
    () => ({
      verifyIdentity: mutateAsync,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}
