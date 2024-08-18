'use client';

import useDetectOS from '@/hooks/useDetectOs';
import { cn } from '@/lib/utils';

const MaxWidthWrapper = ({ children }: { children: React.ReactNode }) => {
  const os = useDetectOS();
  return (
    <main className="w-full ">
      <div
        className={cn('max-w-[1224px] h-full mx-auto px-2  md:px-6', {
          'max-w-[1440px]': os === 'macOS',
        })}
      >
        {children}
      </div>
    </main>
  );
};

export default MaxWidthWrapper;
