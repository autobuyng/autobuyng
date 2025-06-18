'use client';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { usePathname } from 'next/navigation';

const NextProgressBar = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isSeller = pathname.includes('sell-a-car');
  console.log(isSeller, 'isSeler');
  return (
    <>
      {children}
      <ProgressBar height="4px" color="#66A3FF" options={{ showSpinner: false }} shallowRouting />
    </>
  );
};

export default NextProgressBar;
