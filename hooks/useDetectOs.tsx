import { useEffect, useState } from 'react';

const useDetectOS = (): string => {
  const [os, setOS] = useState<string>('');

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('windows')) {
      setOS('Windows');
    } else if (userAgent.includes('mac os')) {
      setOS('macOS');
    }
  }, []);

  return os;
};

export default useDetectOS;
