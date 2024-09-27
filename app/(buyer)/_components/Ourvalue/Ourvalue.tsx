import Image from 'next/image';
import React from 'react';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import ourvalues from '../../assets/ourvalues.svg';

const Ourvalue = () => {
  return (
    <MaxWidthWrapper>
      <main className="mb-8 relative">
        <div className="text-center w-full absolute  md:top-8  ">
          <h1 className="font-semibold text-center sm:text-2xl lg:text-4xl max-w-[45rem] mx-auto">
            We Are Committed To Delivering A Superior Customer Experience
          </h1>
        </div>

        <div className="w-full  ">
          <Image src={ourvalues} alt="Ourvalue" />
        </div>
      </main>
    </MaxWidthWrapper>
  );
};

export default Ourvalue;
