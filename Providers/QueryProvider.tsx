'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AxiosError } from 'axios';
import { useState } from 'react';

export function ReactQuery({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: (failureCount, error) => {
              // Don't retry on 401/403/404 errors
              const axiosError = error as AxiosError
              if (axiosError.response?.status && [401, 403, 404].includes(axiosError.response.status)) {
                return false
              }
              // Retry other errors up to 3 times
              return failureCount < 3
            },
            refetchOnWindowFocus: false,
            staleTime: 10 * 1000
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
