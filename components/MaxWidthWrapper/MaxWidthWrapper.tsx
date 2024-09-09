// 'use client';

import { cn } from '@/lib/utils';

const MaxWidthWrapper = ({ children }: { children: React.ReactNode }) => {
  // const os = useDetectOS();
  return (
    <main className="w-full ">
      <div className={cn('max-w-[1336px] h-full mx-auto px-2  md:px-6', {})}>{children}</div>
    </main>
  );
};

export default MaxWidthWrapper;
