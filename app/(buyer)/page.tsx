import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/app/(buyer)/_components/Hero/Hero';
import VehicleTypeFilters from './_components/Filters/VehicleTypeFilters';
import Stats from './_components/Stats/Stats';
import Topselling from './_components/TopSelling/Topselling';
import Ourvalue from './_components/Ourvalue/Ourvalue';

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <VehicleTypeFilters />
      <Stats />
      <Topselling />
      <Ourvalue />
    </main>
  );
}
