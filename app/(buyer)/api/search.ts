import { endpoints, mutator } from '@/axios';
import { ApiResponse, SearchQuery } from '@/types/types';
import { useMutation } from '@tanstack/react-query';
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
