import { endpoints, fetcher, mutator, queryKeys } from '@/axios';
// import { getLocalItem } from '@/lib/localStorage';
import { IRegistrationPayload } from '@/Schema/authSchema';
import {
  EmailverificationResponse,
  IAccountCreationResponse,
  ILoginPayload,
  LoginResponse,
  UserResponse,
} from '@/types/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

export function useLogin() {
  // const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, error, isError } = useMutation<
    LoginResponse,
    any,
    ILoginPayload
  >({
    mutationFn: (values) => mutator({ method: 'POST', data: values, url: endpoints.auth.login }),
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
export function useRegisterWithGoogle() {
  // const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, isError, error } = useMutation<
    IAccountCreationResponse,
    any
  >({
    mutationFn: () => mutator({ method: 'GET', url: endpoints.auth.registerWithGoogle }),
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: queryKeys.user.root });
    },
  });

  return useMemo(
    () => ({
      googleSignup: mutateAsync,
      data,
      isRegistering: isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}
export function useRegisterWithFaceBook() {
  // const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, isError, error } = useMutation<
    IAccountCreationResponse,
    any
  >({
    mutationFn: () => mutator({ method: 'GET', url: endpoints.auth.registerWithFacebook }),
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: queryKeys.user.root });
    },
  });

  return useMemo(
    () => ({
      faceBookSignup: mutateAsync,
      data,
      isRegistering: isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}
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

export function useGetAuthenticatedUser() {
  const { data, isLoading, isError, error, refetch } = useQuery<any>({
    queryKey: queryKeys.user.root,
    queryFn: () => fetcher(endpoints.auth.currentUser),
  });
  return useMemo(
    () => ({
      data: data,
      isError,
      error,
      userRefetch: refetch,
      isLoading,
    }),
    [data, isLoading, error, isError, refetch],
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
  // const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, isError, error } = useMutation<any, any, { email: string }>(
    {
      mutationFn: (values: { email: string }) =>
        mutator({ method: 'POST', data: values, url: endpoints.auth.resendEmail }),
      onSuccess: () => {
        // queryClient.invalidateQueries({ queryKey: queryKeys.user.root });
      },
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
export function useWaitlist() {
  // const queryClient = useQueryClient();
  const { mutateAsync, data, isPending, isError, error } = useMutation<any, any, { email: string }>(
    {
      mutationFn: (values: { email: string }) =>
        mutator({ method: 'POST', data: values, url: endpoints.waitlist }),
      onSuccess: () => {
        // queryClient.invalidateQueries({ queryKey: queryKeys.user.root });
      },
    },
  );

  return useMemo(
    () => ({
      waitlist: mutateAsync,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}
