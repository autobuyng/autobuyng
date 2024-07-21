import Image from 'next/image';

import Hero from '@/app/(buyer)/_components/Hero/Hero';
import VehicleTypeFilters from '../_components/Filters/VehicleTypeFilters';
import Stats from '../_components/Stats/Stats';
import Topselling from '../_components/TopSelling/Topselling';
import Ourvalue from '../_components/Ourvalue/Ourvalue';
import Seller from '../assets/sellerphoto.svg';
import PopularVehicle from '../_components/PopularVehicle/PopularVehicle';

export default function Home() {
  return (
    <main className="">
      <Hero />
      <VehicleTypeFilters />
      <Stats />
      <Topselling />
      <Ourvalue />
      <div>
        <Image src={Seller} alt="sell your vehicle" />
      </div>
      <PopularVehicle />
    </main>
  );
}
