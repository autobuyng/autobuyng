import { endpoints, mutator } from '@/axios';
import { IContactDetailsSchema } from '@/Schema/authSchema';
import { useMutation } from '@tanstack/react-query';
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
