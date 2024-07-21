'use client';
import React, { useState } from 'react';

import '../cars.css';
import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import SearchInput from '@/app/(buyer)/_components/SearchInput/SearchInput';
import { suggestionList } from '@/types/types';

const Cars = ({ params }: { params: { slug: string } }) => {
  const [search, setSearch] = useState<suggestionList | null>(null);
  console.log(params);
  return (
    <main>
      <div className="bg-img">
        <MaxWidthWrapper>
          <div className="text-white font-bold text-lg md:text-2xl pt-16 max-w-[275px] text-center">
            Buy your dream vehicle at Autobuy!
          </div>
        </MaxWidthWrapper>
      </div>

      <MaxWidthWrapper>
        <section>
          <div className="mt-8 w-full">
            <SearchInput search={search} setSearch={setSearch} />
          </div>
        </section>
      </MaxWidthWrapper>
    </main>
  );
};

export default Cars;
