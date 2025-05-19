import { endpoints, fetcher, mutator } from '@/axios';
import { getSessionItem } from '@/lib/Sessionstorage';
import { AccountOrder } from '@/types/types';
import { useMutation, useQuery } from '@tanstack/react-query';
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

export function useGetAuthenticatedUser() {
  const accessToken = getSessionItem('accessToken');
  const { data, isLoading, refetch } = useQuery<any>({
    queryKey: ['payment'],
    enabled: !!accessToken,
    queryFn: () => fetcher(endpoints.auth.currentUser),
  });

  return useMemo(
    () => ({
      data: data,
      userRefetch: refetch,
      isLoading,
    }),
    [data, isLoading, refetch],
  );
}

export function useGetOrderLists() {
  const { data, isLoading, refetch } = useQuery<any>({
    queryKey: ['orderlist'],
    queryFn: () => fetcher(endpoints.payment.orderList),
  });

  return useMemo(
    () => ({
      data,
      refetch,
      isLoading,
    }),
    [data, isLoading, refetch],
  );
}
