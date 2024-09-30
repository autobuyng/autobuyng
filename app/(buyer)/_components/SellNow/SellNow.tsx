'use client';
import Image from 'next/image';
import React from 'react';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import { MoveUpRight } from 'lucide-react';
import useIsMobile from '@/hooks/useIsMobile';

const SellNow = () => {
  const { isMobile } = useIsMobile();
  return (
    <MaxWidthWrapper>
      <div className="flex relative items-center w-full h-full justify-between gap-8">
        <Image
          src={
            isMobile
              ? 'https://ik.imagekit.io/0xy9wqmrh/Autobuy/b888a232ae02b19d27eb51524348942b_Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EyzYdTfRCi163AP7Aw8plljGTqzCMiTsOmw68WPvC82tfZrY1dSSnhAkgdbA3kXOGTto6EC4pGicdIK0qb0D8ot5GsYR1t~TldQFIcvWb8Xk2fF1V9X53sQ1M3u-KqzNH7PqbfqFJ5dAMuDZ5erX0EbFTGYrJthm6SGvV57dj5X4F8f7E1gOygJ8v8yMwQuG0DnKfNvhBX1zAoT487PwXZxV0sMyqo2QAES8s7BKYAHA3HjKjERQ7bMbouR7HDw-RoeYv~AlGQD7f0-~Oa8YZDImxX0PL83J3kFh6KoNxp-F4Zydx1De0J7GILioFYOsFX1uDyspgoCDfGh2mSSkmg__'
              : 'https://ik.imagekit.io/0xy9wqmrh/Autobuy/Frame%208626.jpg'
          }
          width={600}
          height={380}
          alt="sell your vehicle"
          className="rounded-lg w-full h-full flex-[2] object-cover"
        />

        <div className="absolute top-0 md:static flex-[1] flex w-full h-full items-center justify-center">
          <div className="space-y-3 md:space-y-5 w-full h-full text-center flex flex-col items-center justify-center">
            <h1 className="text-white  md:text-black md:text-[28px] lg:text-[36px] capitalize max-w-[380px] md:max-w-[400px] font-bold">
              Out with the old, in with the new!
            </h1>
            <p className=" text-sm md:text-[18px] font-medium text-white md:text-[#484747]">
              Sell your Vehicle with Autobuy in <span className="text-[#E16045]">NO TIME!</span>
            </p>
            <button className="w-[150px] px-2 py-2 text-white text-center mx-auto bg-secondary-500 rounded-md flex items-center justify-center gasp-6">
              <span>Sell Now</span>
              <MoveUpRight size={12} className="flex justify-center items-center ml-1.5" />
            </button>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default SellNow;
