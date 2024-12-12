// 'use client';

import { cn } from '@/lib/utils';

const MaxWidthWrapper = ({ children }: { children: React.ReactNode }) => {
  // const os = useDetectOS();
  return (
    <div className="w-full ">
      <div className={cn('max-w-[1536px] h-full mx-auto px-4  md:px-6', {})}>{children}</div>
    </div>
  );
};

export default MaxWidthWrapper;
