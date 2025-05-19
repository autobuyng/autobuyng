import { endpoints, fetcher, queryKeys } from '@/axios';
import { DashboardStatsResponse } from '@/types/types';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

export function useGetDashboardAnalytics() {
  const { data, isLoading, refetch } = useQuery<DashboardStatsResponse[]>({
    queryKey: queryKeys.vehicle.getAllVehicle,
    queryFn: () => fetcher(endpoints.dashboard.getAnalytics),
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
