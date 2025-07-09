'use client';
import React, { useEffect, useState } from 'react';

import { Sheet, SheetContent } from '@/components/ui/sheet';

import '../result.css';
import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import SearchInput from '@/app/(buyer)/_components/SearchInput/SearchInput';
import { SearchQuery, SearchResponseData } from '@/types/types';
import FilterDisplay from '@/app/(buyer)/_components/Filters/FilterDisplay';

import Filters from '@/app/(buyer)/_components/Filters';
import Result from '@/app/(buyer)/_components/Result/Result';
import { useSearchVehicle } from '@/app/(buyer)/api/search';
import { usePathname } from 'next/navigation';
import { setLocalItem } from '@/lib/localStorage';
import { useStore } from '@/store/useStore';
import useIsMobile from '@/hooks/useIsMobile';
import { useDebounce } from 'use-debounce';
import Pagination from '@/app/(buyer)/_components/pagination';
import Image from 'next/image';
import { X } from 'lucide-react';
import { useRouter } from 'next-nprogress-bar';

const Results = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { filters, homePageSearchResult, compareVehicles, setCompareVehicles } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);

  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [debouncedSearch] = useDebounce(searchQuery, 1000);

  const { isTablet } = useIsMobile();
  const [searchResult, setSearchResult] = useState<SearchResponseData | null>(null);
  const { search, isPending, isError, error } = useSearchVehicle();

  const handleSearch = async (data: SearchQuery) => {
    try {
      const response = await search(data);
      setSearchResult(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 150,
      behavior: 'smooth',
    });
  }, [searchResult]);

  useEffect(() => {
    const searchParams: Partial<SearchQuery> = {
      page,
      limit: 12,
      ...(debouncedSearch && { keyword: debouncedSearch }),
      ...(filters.mileage ? { mileage: filters.mileage } : {}),
      ...(filters.vehicle_condition ? { condition: filters.vehicle_condition } : {}),
      ...(filters.year.min_year ? { yearMin: filters.year.min_year } : {}),
      ...(filters.mileageMax ? { mileageMax: filters.mileageMax } : {}),
      ...(filters.mileageMin ? { mileageMin: filters.mileageMin } : {}),
      ...(filters.year?.max_year ? { yearMax: filters?.year?.max_year } : {}),
      ...(filters.price.min_price ? { priceMin: filters.price.min_price } : {}),
      ...(filters.price.max_price ? { priceMax: filters.price.max_price } : {}),
      ...(filters.body_type ? { vehicleType: filters.body_type.toLowerCase() } : {}),
      ...(filters.cylinders ? { engine: filters.cylinders.toLowerCase() } : {}),
      ...(filters.interior_color ? { interiorColor: filters.interior_color.toLowerCase() } : {}),
      ...(filters.exterior_color ? { exteriorColor: filters.exterior_color.toLowerCase() } : {}),
      ...(filters.drive_train ? { driveTrain: filters.drive_train.toLowerCase() } : {}),
      ...(filters.fuel_type ? { fuelType: filters.fuel_type.toLowerCase() } : {}),
      ...(filters.transmission ? { transmission: filters.transmission.toLowerCase() } : {}),
      ...(filters.sortParameter ? { sortParameter: filters.sortParameter } : {}),
      ...(filters.sortOrder ? { sortOrder: filters.sortOrder } : {}),
      ...(filters.make ? { make: filters.make.toLowerCase() } : {}),
      ...(filters.vehicle_type ? { vehicleType: filters.vehicle_type.toLowerCase() } : {}),
    };

    // if (!homePageSearchResult || JSON.stringify(prevFilters.current) !== JSON.stringify(filters)) {
    handleSearch(searchParams);
    // }

    setLocalItem('previousPage', pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, debouncedSearch, page]);

  const removeFromCompare = (id: string) => {
    setCompareVehicles(compareVehicles.filter((vehicle) => vehicle._id !== id));
  };

  return (
    <main className="mb-24">
      <div className="bg-img">
        <MaxWidthWrapper>
          <div className="text-white font-bold text-lg md:text-2xl pt-16 max-w-[275px] text-center">
            Buy your dream vehicle at Autobuy!
          </div>
        </MaxWidthWrapper>
      </div>

      <MaxWidthWrapper>
        <section className="min-h-screen">
          <div className="mt-8 w-full flex items-center gap-6">
            <SearchInput search={searchQuery} setSearch={setSearchQuery} />
          </div>

          <div className="flex items-start justify-between mt-6 w-full">
            <div className="w-full ">
              <FilterDisplay
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                // filterQuery={filterQuery}
                // setFilterQuery={setFilterQuery}
              />
            </div>
          </div>

          <div className="flex w-full mt-8 gap-8">
            <div className=" hidden lg:block w-full max-w-[260px]">
              <Filters />

              <Sheet open={isTablet && isOpen} onOpenChange={setIsOpen}>
                <SheetContent className="max-w-full h-screen overflow-y-auto">
                  <h1 className="font-bold   border-b-2 mb-4 border-b-neutral-100">Filters</h1>
                  <div className="flex items-center gap-2 flex-wrap"></div>
                  <Filters />
                </SheetContent>
              </Sheet>
            </div>

            <div className="w-full">
              <Result
                isPending={isPending}
                searchResult={searchResult || homePageSearchResult}
                setSearchResult={setSearchResult}
                isError={isError}
                error={error}
              />
            </div>
          </div>
          <Pagination lastPage={searchResult?.lastPage as number} page={page} setPage={setPage} />
        </section>

        {compareVehicles.length > 0 && (
          <div className="fixed max-[420px]:right-0 max-[420px]:left-0 bottom-0 h-48 w-full pb-4 z-50 ">
            <div className="w-full md:max-w-4xl pt-2 p-2 md:p-4 h-full  mx-auto flex flex-col lg:flex-row items-center justify-center gap-2 bg-white shadow-lg rounded-xl">
              <div className="flex-1 flex items-center h-full  gap-4">
                {compareVehicles.map((vehicle) => (
                  <div key={vehicle._id} className="relative">
                    <div className="relative w-20 h-20 sm:w-28 sm:h-28">
                      <Image
                        src={vehicle.images[0]}
                        alt={vehicle.make}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <button>
                      <X
                        size={15}
                        onClick={() => removeFromCompare(vehicle._id)}
                        className="text-white bg-black rounded-full h-4 w-4 absolute -top-2 -right-2"
                      />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 h-full">
                <button
                  onClick={() => setCompareVehicles([])}
                  className="text-gray-500 text-sm flex items-center gap-2 hover:text-gray-900 border border-gray-200 py-2 px-4 rounded-md transition-colors"
                >
                  <X />
                  Clear All
                </button>
                <button
                  onClick={() =>
                    router.push(
                      `/compare?ids=${[...compareVehicles.map((vehicle) => vehicle._id)].join('-')}`,
                    )
                  }
                  className="bg-primary-700 text-white py-2 px-4 rounded-md"
                >
                  Compare
                </button>
              </div>
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </main>
  );
};

export default Results;
