'use client';
import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 768;

const useIsMobile = (): { isMobile: boolean; width: number } => {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    return typeof window !== 'undefined' && window.innerWidth <= MOBILE_BREAKPOINT;
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isMobile: isMobile, width: typeof window !== 'undefined' ? window.innerWidth : 0 };
};

export default useIsMobile;
