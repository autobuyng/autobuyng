'use client';
import Image from 'next/image';
import React from 'react';

import useIsMobile from '@/hooks/useIsMobile';

const DynamicImage = ({
  desktopImg,
  mobileImg,
  className,
}: {
  desktopImg: string;
  mobileImg: string;
  className?: string;
}) => {
  const { isMobile } = useIsMobile();

  console.log(isMobile ? 'mobile' : 'desktop');
  return <Image src={isMobile ? mobileImg : desktopImg} alt="image" className={className} />;
};

export default DynamicImage;
