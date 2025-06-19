'use client';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { usePathname } from 'next/navigation';

const NextProgressBar = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isSeller = pathname.includes('sell-a-car');
  return (
    <>
      {children}
      <ProgressBar height="4px" color={isSeller ? "bg-secondary-900" : "#66a3f"} options={{ showSpinner: false }} shallowRouting />
    </>
  );
};

export default NextProgressBar;
