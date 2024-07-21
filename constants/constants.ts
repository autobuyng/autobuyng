import Sedan from '@/app/(buyer)/_components/Filters/assets/sedans.svg';
import Convertible from '@/app/(buyer)/_components/Filters/assets/convertibles.svg';
import Coupes from '@/app/(buyer)/_components/Filters/assets/couples.svg';
import Micros from '@/app/(buyer)/_components/Filters/assets/micros.svg';
import Minivans from '@/app/(buyer)/_components/Filters/assets/minivans.svg';
import Hatchback from '@/app/(buyer)/_components/Filters/assets/hatchback.svg';
import Pickups from '@/app/(buyer)/_components/Filters/assets/pickups.svg';
import Suv from '@/app/(buyer)/_components/Filters/assets/suv.svg';

import Toyota from '@/app/(buyer)/_components/Filters/assets/toyota.svg';
import Honda from '@/app/(buyer)/_components/Filters/assets/honda.svg';
import Lexus from '@/app/(buyer)/_components/Filters/assets/lexus.svg';
import Mercedes from '@/app/(buyer)/_components/Filters/assets/benz.svg';
import Kia from '@/app/(buyer)/_components/Filters/assets/benz.svg';
import Hyundai from '@/app/(buyer)/_components/Filters/assets/hyundia.svg';
import Bmw from '@/app/(buyer)/_components/Filters/assets/bmw.svg';
import Nissan from '@/app/(buyer)/_components/Filters/assets/nissan.svg';
import Acura from '@/app/(buyer)/_components/Filters/assets/acura.svg';
import Suzuki from '@/app/(buyer)/_components/Filters/assets/suzuki.svg';
import Jeep from '@/app/(buyer)/_components/Filters/assets/jeep.svg';
import Isuzu from '@/app/(buyer)/_components/Filters/assets/isuzu.svg';
import Chevrolet from '@/app/(buyer)/_components/Filters/assets/chevrolet.svg';
import Volkswagen from '@/app/(buyer)/_components/Filters/assets/vokswagen.svg';
import Ford from '@/app/(buyer)/_components/Filters/assets/ford.svg';
import Innoson from '@/app/(buyer)/_components/Filters/assets/innoson.svg';
import LandRover from '@/app/(buyer)/_components/Filters/assets/landrover.svg';
import Volvo from '@/app/(buyer)/_components/Filters/assets/volvo.svg';
import Infiniti from '@/app/(buyer)/_components/Filters/assets/infiniti.svg';
import Sabaru from '@/app/(buyer)/_components/Filters/assets/subaru.svg';
import Tesla from '@/app/(buyer)/_components/Filters/assets/tesla.svg';
import Greely from '@/app/(buyer)/_components/Filters/assets/geely.svg';
import Porshe from '@/app/(buyer)/_components/Filters/assets/porshe.svg';
import Audi from '@/app/(buyer)/_components/Filters/assets/audi.svg';
import Mazda from '@/app/(buyer)/_components/Filters/assets/mazda.svg';

import samlplevehicle from '@/app/(buyer)/assets/vehice1.avif';

export const CAR_BRANDS = [
  {
    id: 1,
    name: 'Toyota',
  },
  {
    id: 2,
    name: 'Honda',
  },
  {
    id: 3,
    name: 'Ford',
  },
  {
    id: 4,
    name: 'Chevrolet',
  },
  {
    id: 5,
    name: 'Nissan',
  },
  {
    id: 6,
    name: 'BMW',
  },
  {
    id: 7,
    name: 'Mercedes-Benz',
  },
  {
    id: 8,
    name: 'Audi',
  },
  {
    id: 9,
    name: 'Volkswagen',
  },
  {
    id: 10,
    name: 'Hyundai',
  },
  {
    id: 11,
    name: 'Kia',
  },
  {
    id: 12,
    name: 'Lexus',
  },
  {
    id: 13,
    name: 'Subaru',
  },
  {
    id: 14,
    name: 'Mazda',
  },
  {
    id: 15,
    name: 'Tesla',
  },
  {
    id: 16,
    name: 'Jaguar',
  },
  {
    id: 17,
    name: 'Land Rover',
  },
  {
    id: 18,
    name: 'Porsche',
  },
  {
    id: 19,
    name: 'Volvo',
  },
  {
    id: 20,
    name: 'Ferrari',
  },
];

export const PRICE_RANGE = [
  {
    id: 1,
    name: 'Under 5 million',
  },
  {
    id: 2,
    name: 'Under 10 million',
  },
  {
    id: 3,
    name: 'Under 15 million',
  },
  {
    id: 4,
    name: 'Under 20 million',
  },
  {
    id: 5,
    name: 'Under 25 million',
  },
];

export const YEAR = [
  {
    id: 1,
    name: 2009,
  },
  {
    id: 2,
    name: 2010,
  },
  {
    id: 3,
    name: 2011,
  },
  {
    id: 4,
    name: 2012,
  },
  {
    id: 5,
    name: 2013,
  },
  {
    id: 6,
    name: 2014,
  },
  {
    id: 7,
    name: 2015,
  },
  {
    id: 8,
    name: 2016,
  },
  {
    id: 9,
    name: 2017,
  },
  {
    id: 10,
    name: 2018,
  },
  {
    id: 11,
    name: 2019,
  },
  {
    id: 12,
    name: 2020,
  },
  {
    id: 13,
    name: 2021,
  },
  {
    id: 14,
    name: 2022,
  },
  {
    id: 15,
    name: 2023,
  },
  {
    id: 16,
    name: 2024,
  },
];

export const VEHICLE_TYPE = [
  { id: '1', name: 'Sedan', Img: Sedan },
  { id: '2', name: 'Convertible', Img: Convertible },
  { id: '3', name: 'Coupes', Img: Coupes },
  { id: '4', name: 'Micos', Img: Micros },
  { id: '5', name: 'Minivans', Img: Minivans },
  { id: '6', name: 'Suvs', Img: Suv },
  { id: '7', name: 'Hatchback', Img: Hatchback },
  { id: '8', name: 'Pickups', Img: Pickups },
];

export const VEHICLE_BRAND = [
  { id: '1', name: 'Toyota', Img: Toyota },
  { id: '2', name: 'Honda', Img: Honda },
  { id: '3', name: 'Lexus', Img: Lexus },
  { id: '4', name: 'Mercedes-Benz', Img: Mercedes },
  { id: '5', name: 'Kia', Img: Kia },
  { id: '6', name: 'Hyundai', Img: Hyundai },
  { id: '7', name: 'Bmw', Img: Bmw },
  { id: '8', name: 'Nissan', Img: Nissan },
  { id: '9', name: 'Acura', Img: Acura },
  { id: '10', name: 'Suzuki', Img: Suzuki },
  { id: '11', name: 'Jeep', Img: Jeep },
  { id: '12', name: 'Isuzu', Img: Isuzu },
  { id: '13', name: 'Chevrolet', Img: Chevrolet },
  { id: '14', name: 'Volkswagon', Img: Volkswagen },
  { id: '0', name: 'Mazda', Img: Mazda },
  { id: '15', name: 'Ford', Img: Ford },
  { id: '16', name: 'Innoson', Img: Innoson },
  { id: '17', name: 'LandRover', Img: LandRover },
  { id: '18', name: 'Volve', Img: Volvo },
  { id: '19', name: 'Infiniti', Img: Infiniti },
  { id: '20', name: 'Audi', Img: Audi },
  { id: '21', name: 'Sabaru', Img: Sabaru },
  { id: '22', name: 'Tesla', Img: Tesla },
  { id: '23', name: 'Greely', Img: Greely },
  { id: '24', name: 'Porshe', Img: Porshe },
];

export const TRENDING_VEHICLE = [
  { id: '1', text: 'Nissan Rogue SV' },
  { id: '2', text: 'Nissan Rogue SV' },
  { id: '3', text: 'Nissan Rogue SV' },
  { id: '4', text: 'Nissan Rogue SV' },
  { id: '5', text: 'Nissan Rogue SV' },
  { id: '6', text: 'Nissan Rogue SV' },
  { id: '7', text: 'Nissan Rogue SV' },
  { id: '8', text: 'Nissan Rogue SV' },
  { id: '9', text: 'Nissan Rogue SV' },
  { id: '10', text: 'Nissan Rogue SV' },
];

export const POPULAR_MODEL = [
  { id: '1', text: 'Mazda CX-5Grand ' },
  { id: '2', text: 'Nissan Rogue SV' },
  { id: '3', text: 'Nissan Rogue SV' },
  { id: '4', text: 'Mazda VX-5 Touring' },
  { id: '5', text: 'Nissan Rogue SV' },
  { id: '6', text: 'Nissan Rogue SV' },
  { id: '7', text: 'Nissan Rogue SV' },
  { id: '8', text: 'Nissan Rogue SV' },
  { id: '9', text: 'Nissan Rogue SV' },
  { id: '10', text: 'Nissan Rogue SV' },
];

export const SORT_LIST = [
  { id: '1', name: 'Best Available ' },
  { id: '2', name: 'Lowest Price' },
  { id: '3', name: 'Highest Price' },
  { id: '4', name: 'Lowest Mileage' },
  { id: '5', name: 'Highest Mileage' },
  { id: '6', name: 'Best deals' },
  { id: '7', name: 'Newest listed' },
  { id: '8', name: 'Oldest listed' },
];

export const VEHICLE_SEARCH_RESULTS = [
  {
    id: '1',
    name: 'Mercedes Benz',
    model: 'C 63',
    price: '35,000,000',
    mileage: '400',
    category: 'new',
    Img: samlplevehicle,
  },
  {
    id: '2',
    name: 'Mercedes Benz',
    model: 'C 63',
    price: '35,000,000',
    mileage: '400',
    category: 'new',
    Img: samlplevehicle,
  },
  {
    id: '3',
    name: 'Tesla',
    model: 'C 63',
    price: '35,000,000',
    mileage: '400',
    category: 'new',
    Img: samlplevehicle,
  },
  {
    id: '4',
    name: 'Mercedes Benz',
    model: 'C 63',
    price: '35,000,000',
    mileage: '400',
    category: 'new',
    Img: samlplevehicle,
  },
  {
    id: '5',
    name: 'Mercedes Benz',
    model: 'C 63',
    price: '35,000,000',
    mileage: '400',
    category: 'new',
    Img: samlplevehicle,
  },
  {
    id: '6',
    name: 'Mercedes Benz',
    model: 'C 63',
    price: '35,000,000',
    mileage: '400',
    category: 'new',
    Img: samlplevehicle,
  },
  {
    id: '7',
    name: 'Mercedes Benz',
    model: 'C 63',
    price: '35,000,000',
    mileage: '400',
    category: 'new',
    Img: samlplevehicle,
  },
  {
    id: '8',
    name: 'Mercedes Benz',
    model: 'C 63',
    price: '35,000,000',
    mileage: '400',
    category: 'new',
    Img: samlplevehicle,
  },
  {
    id: '9',
    name: 'Mercedes Benz',
    model: 'C 63',
    price: '35,000,000',
    mileage: '400',
    category: 'new',
    Img: samlplevehicle,
  },
  {
    id: '10',
    name: 'Mercedes Benz',
    model: 'C 63',
    price: '35,000,000',
    mileage: '400',
    category: 'new',
    Img: samlplevehicle,
  },
  {
    id: '11',
    name: 'Mercedes Benz',
    model: 'C 63',
    price: '35,000,000',
    mileage: '400',
    category: 'new',
    Img: samlplevehicle,
  },
  {
    id: '12',
    name: 'Mercedes Benz',
    model: 'C 63',
    price: '35,000,000',
    mileage: '400',
    category: 'new',
    Img: samlplevehicle,
  },
];

export const MAX_YEAR = [
  { id: '1', name: '2009' },
  { id: '2', name: '2010' },
  { id: '3', name: '2011' },
  { id: '4', name: '2012' },
  { id: '5', name: '2013' },
  { id: '6', name: '2014' },
  { id: '7', name: '2015' },
  { id: '8', name: '2016' },
  { id: '9', name: '2017' },
  { id: '10', name: '2018' },
  { id: '11', name: '2019' },
  { id: '12', name: '2020' },
  { id: '13', name: '2012' },
  { id: '14', name: '2022' },
  { id: '15', name: '2023' },
  { id: '16', name: '2024' },
];

export const MILEAGE = [
  { id: '1', name: '10000 or less' },
  { id: '2', name: '20000 or less' },
  { id: '3', name: '30000 or less' },
  { id: '4', name: '40000 or less' },
  { id: '5', name: '50000 or less' },
  { id: '6', name: '60000 or less' },
  { id: '7', name: '70000 or less' },
  // { id: '8', name: '2016' },
  // { id: '9', name: '2017' },
  // { id: '10', name: '2018' },
  // { id: '11', name: '2019' },
  // { id: '12', name: '2020' },
  // { id: '13', name: '2012' },
  // { id: '14', name: '2022' },
  // { id: '15', name: '2023' },
  // { id: '16', name: '2024' },
];
