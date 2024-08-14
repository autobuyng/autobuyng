'use client';
import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 992;

const useIsMobile = (): { isMobile: boolean; width: number; isTablet: boolean } => {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    return typeof window !== 'undefined' && window.innerWidth <= MOBILE_BREAKPOINT;
  });
  const [isTablet, setIsTablet] = useState<boolean>(() => {
    return typeof window !== 'undefined' && window.innerWidth <= TABLET_BREAKPOINT;
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
      setIsTablet(window.innerWidth <= TABLET_BREAKPOINT);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isMobile: isMobile,
    isTablet: isTablet,
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
  };
};

export default useIsMobile;
