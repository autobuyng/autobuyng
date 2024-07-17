import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/app/(buyer)/_components/Hero/Hero';
import VehicleTypeFilters from './_components/Filters/VehicleTypeFilters';
import Stats from './_components/Stats/Stats';

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <VehicleTypeFilters />
      <Stats />
    </main>
  );
}
