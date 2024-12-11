import { endpoints, mutator } from '@/axios';
import { IRegistrationPayload } from '@/Schema/authSchema';
import { IAccountCreationResponse, ILoginPayload } from '@/types/types';
import { useMutation } from '@tanstack/react-query';
import { useMemo } from 'react';

export function useLogin() {
  // const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, error, isError } = useMutation<any, any, ILoginPayload>({
    mutationFn: (values: ILoginPayload) =>
      mutator({ method: 'POST', data: values, url: endpoints.auth.login }),
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: queryKeys.user.root });
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
    IAccountCreationResponse,
    any,
    IRegistrationPayload
  >({
    mutationFn: (values: IRegistrationPayload) =>
      mutator({ method: 'POST', data: values, url: endpoints.auth.register }),
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
  const { mutateAsync, data, isPending, isError, error } = useMutation<any, any, { token: string }>(
    {
      mutationFn: (values: { token: string }) =>
        mutator({ method: 'POST', data: values, url: endpoints.auth.verifyEmail }),
      onSuccess: () => {
        // queryClient.invalidateQueries({ queryKey: queryKeys.user.root });
      },
    },
  );

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
    { email: string; password: string }
  >({
    mutationFn: (values: { email: string; password: string }) =>
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
  // const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, isError, error } = useMutation<
    any,
    any,
    { email: string; password: string }
  >({
    mutationFn: (values: { email: string; password: string }) =>
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
