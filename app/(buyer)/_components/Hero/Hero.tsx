'use client';
import React from 'react';
import Image from 'next/image';
import './hero.css';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import HomeSearch from '../HomeSearch/HomeSearch';
import FingerPrint from '../../assets/Fingerprint.svg';
import useDetectOS from '@/hooks/useDetectOs';
import { cn } from '@/lib/utils';

const Hero = () => {
  const os = useDetectOS();
  return (
    <section
      className={cn('bg min-h-screen bg-primary-500 relative ', {
        'md:h-[calc(120vh_-_76px)]': os === 'Windows',
        'h-[calc(100vh_-_76px)]': os === 'macOS',
      })}
    >
      <MaxWidthWrapper>
        <main
          className={cn('pt-8 md:pt-10', {
            'sm:pt-24': os === 'macOS',
          })}
        >
          <div className={cn({ 'mt-10': os === 'macOS' })}>
            <p
              className={cn(
                ' max-w-[382px] md:max-w-[600px] text-primary-700  text-3xl md:text-4xl font-[700]',
                {
                  'mt-4 sm:mt-0 text-lg md:text-xl ': os === 'windows',
                },
              )}
            >
              AutoBuy the Smarter Way to Buy a Car with confidence
            </p>
            <p className="text-lg  text-primary-700">
              Buy or <span className="text-secondary-500">sell</span> with us in minutes!
            </p>
          </div>

          <div className="mt-3 pb-20">
            <HomeSearch />
          </div>

          <div className="absolute bottom-[2rem] left-[60px] h-14 w-14 rounded-[50%] flex items-center justify-center bg-primary-500 p-2">
            <Image src={FingerPrint} alt="FingerPrint" />
          </div>
        </main>
      </MaxWidthWrapper>
    </section>
  );
};
//https://vapi.verifyme.ng/v1/verifications/identities/nin/:ref
export default Hero;
