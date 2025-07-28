import { endpoints, fetcher, mutator } from '@/axios';
import { getSessionItem } from '@/lib/Sessionstorage';
import { AccountOrder, LoanRequest, LoanResponse, OrderListResponse } from '@/types/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useMemo } from 'react';

export function useCreateOrder() {
  const { mutateAsync, data, isPending, isSuccess, isError, error } = useMutation<
    AccountOrder,
    any,
    any
  >({
    mutationFn: (values) =>
      mutator({ method: 'GET', data: values, url: endpoints.payment.createOrder(values) }),
  });

  return useMemo(
    () => ({
      createOrder: mutateAsync,
      data,
      isSuccess,
      isPending,
      error,
      isError,
    }),
    [mutateAsync, data, isPending, error, isError],
  );
}
export function useGetLoanEstimate() {
  const { mutateAsync, data, isPending, isSuccess, isError, error } = useMutation<
    LoanResponse,
    AxiosError,
    LoanRequest
  >({
    mutationFn: (values) =>
      mutator({ method: 'POST', data: values, url: endpoints.loan.getEstimate }),
  });

  return useMemo(
    () => ({
      getLoanEstimate: mutateAsync,
      data,
      isSuccess,
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
  const { data, isLoading, refetch } = useQuery<OrderListResponse>({
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
