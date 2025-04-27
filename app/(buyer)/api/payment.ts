import { endpoints, mutator } from '@/axios';
import { AccountOrder } from '@/types/types';
import { useMutation } from '@tanstack/react-query';
import { useMemo } from 'react';

export function useCreateOrder() {
  const { mutateAsync, data, isPending, isError, error } = useMutation<
    AccountOrder, //PaymentResponse
    any, //
    any
  >({
    mutationFn: (values) =>
      mutator({ method: 'GET', data: values, url: endpoints.payment.createOrder(values) }),
  });

  return useMemo(
    () => ({
      createOrder: mutateAsync,
      data,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}
