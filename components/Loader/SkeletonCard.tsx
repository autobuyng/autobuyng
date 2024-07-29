import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 items-center">
      <Skeleton className="h-[200px] w-full sm:w-[250px] rounded-xl" />
      <div className=" w-full sm:w-[250px] flex gap-4 items-center">
        {/* <Skeleton className="h-8 w-fll" /> */}
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
      </div>
      <Skeleton className="h-8 w-full sm:w-[250px]" />
    </div>
  );
}
