'use client';

import useDetectOS from '@/hooks/useDetectOs';
import { cn } from '@/lib/utils';

const MaxWidthWrapper = ({ children }: { children: React.ReactNode }) => {
  const os = useDetectOS();
  return (
    <main className="w-full ">
      <div
        className={cn('max-w-[1200px] mx-auto  px-6', {
          'max-w-[1336px]': os === 'windows',
        })}
      >
        {children}
      </div>
    </main>
  );
};

export default MaxWidthWrapper;
