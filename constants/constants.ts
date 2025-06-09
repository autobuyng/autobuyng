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
import Kia from '@/app/(buyer)/_components/Filters/assets/kia.svg';
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
// import Sabaru from '@/app/(buyer)/_components/Filters/assets/subaru.svg';
// import Tesla from '@/app/(buyer)/_components/Filters/assets/tesla.svg';
// import Greely from '@/app/(buyer)/_components/Filters/assets/geely.svg';
import Porshe from '@/app/(buyer)/_components/Filters/assets/porshe.svg';
import Audi from '@/app/(buyer)/_components/Filters/assets/audi.svg';
// import Mazda from '@/app/(buyer)/_components/Filters/assets/mazda.svg';

import samlplevehicle from '@/app/(buyer)/assets/vehice1.avif';
import { VEHICLE_SEARCH_RESULTS_PROPS } from '@/types/types';

import Car1 from '@/app/(buyer)/_components/ImageSlider/assets/car7.avif';
import Car2 from '@/app/(buyer)/_components/ImageSlider/assets/car7.avif';
import Car3 from '@/app/(buyer)/_components/ImageSlider/assets/car7.avif';
import Car4 from '@/app/(buyer)/_components/ImageSlider/assets/car7.avif';
import Car5 from '@/app/(buyer)/_components/ImageSlider/assets/car7.avif';
import Car6 from '@/app/(buyer)/_components/ImageSlider/assets/car7.avif';
// import Car7 from '@/app/(buyer)/_components/ImageSlider/assets/car7.avif';

// const TeslaModel = 'https://ik.imagekit.io/0xy9wqmrh/Autobuy/Tesla.jpeg';

export const IMAGES = [Car1, Car2, Car3, Car4, Car5, Car6];

export const USER = false;

export const CAR_BRANDS = [
  {
    id: 1,
    name: 'Toyota',
    label: 'toyota',
  },
  {
    id: 2,
    name: 'Honda',
    label: 'honda',
  },
  {
    id: 3,
    name: 'Ford',
    label: 'ford',
  },
  {
    id: 4,
    name: 'Chevrolet',
    label: 'chevrolet',
  },
  {
    id: 5,
    name: 'Nissan',
    label: 'nissan',
  },
  {
    id: 6,
    name: 'BMW',
    label: 'bmw',
  },
  {
    id: 7,
    name: 'Mercedes-Benz',
    label: 'mercedes-benz',
  },
  {
    id: 8,
    name: 'Audi',
    label: 'audi',
  },
  {
    id: 9,
    name: 'Volkswagen',
    label: 'volkswagen',
  },
  {
    id: 10,
    name: 'Hyundai',
    label: 'hyundai',
  },
  {
    id: 11,
    name: 'Kia',
    label: 'kia',
  },
  {
    id: 12,
    name: 'Lexus',
    label: 'lexus',
  },
  {
    id: 13,
    name: 'Subaru',
    label: 'subaru',
  },
  {
    id: 14,
    name: 'Mazda',
    label: 'mazda',
  },
  {
    id: 15,
    name: 'Tesla',
    label: 'tesla',
  },
  {
    id: 16,
    name: 'Jaguar',
    label: 'jaguar',
  },
  {
    id: 17,
    name: 'Land Rover',
    label: 'land rover',
  },
  {
    id: 18,
    name: 'Porsche',
    label: 'porsche',
  },
  {
    id: 19,
    name: 'Volvo',
    label: 'volvo',
  },
  {
    id: 20,
    name: 'Ferrari',
    label: 'ferrari',
  },
];

export const PRICE_RANGE = [
  // {
  //   id: 1,
  //   name: 'Under 5 million',
  //   label:"5000000"
  // },
  {
    id: 2,
    name: 'Under 10 million',
    label: '10000000',
  },
  {
    id: 3,
    name: 'Under 15 million',
    label: '15000000',
  },
  {
    id: 4,
    name: 'Under 20 million',
    label: '20000000',
  },
  {
    id: 5,
    name: 'Under 25 million',
    label: '25000000',
  },
];

export const YEAR = [
  {
    id: 1,
    name: '2009',
    label: '2009',
  },
  {
    id: 2,
    name: '2010',
    label: '2010',
  },
  {
    id: 3,
    name: '2011',
    label: '2011',
  },
  {
    id: 4,
    name: '2012',
    label: '2012',
  },
  {
    id: 5,
    name: '2013',
    label: '2013',
  },
  {
    id: 6,
    name: '2014',
    label: '2014',
  },
  {
    id: 7,
    name: '2015',
    label: '2015',
  },
  {
    id: 8,
    name: '2016',
    label: '2016',
  },
  {
    id: 9,
    name: '2017',
    label: '2017',
  },
  {
    id: 10,
    name: '2018',
    label: '2018',
  },
  {
    id: 11,
    name: '2019',
    label: '2019',
  },
  {
    id: 12,
    name: '2020',
    label: '2020',
  },
  {
    id: 13,
    name: '2021',
    label: '2021',
  },
  {
    id: 14,
    name: '2022',
    label: '2022',
  },
  {
    id: 15,
    name: '2023',
    label: '2023',
  },
  {
    id: 16,
    name: '2024',
    label: '2024',
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
  { id: '24', name: 'Porshe', Img: Porshe },
  { id: '15', name: 'Ford', Img: Ford },
  { id: '16', name: 'Innoson', Img: Innoson },
  { id: '17', name: 'LandRover', Img: LandRover },
  { id: '18', name: 'Volve', Img: Volvo },
  { id: '19', name: 'Infiniti', Img: Infiniti },
  { id: '20', name: 'Audi', Img: Audi },
  // { id: '21', name: 'Sabaru', Img: Sabaru },
  // { id: '22', name: 'Tesla', Img: Tesla },
  // { id: '23', name: 'Greely', Img: Greely },
  // { id: '24', name: 'Porshe', Img: Porshe },
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
  // { id: '9', text: 'Nissan Rogue SV' },
  // { id: '10', text: 'Nissan Rogue SV' },
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
  // { id: '9', text: 'Nissan Rogue SV' },
  // { id: '10', text: 'Nissan Rogue SV' },
];

export const SORT_LIST = [
  { id: '0', name: 'default ' },
  { id: '1', name: 'Best Available ' },
  { id: '2', name: 'Lowest Price' },
  { id: '3', name: 'Highest Price' },
  { id: '4', name: 'Lowest Mileage' },
  { id: '5', name: 'Highest Mileage' },
  { id: '6', name: 'Best deals' },
  { id: '7', name: 'Newest listed' },
  { id: '8', name: 'Oldest listed' },
];

export const VEHICLE_SEARCH_RESULTS: VEHICLE_SEARCH_RESULTS_PROPS[] = [
  {
    id: '1',
    name: 'Mercedes Benz',
    model: 'C 63',
    price: '35,000,000',
    mileage: '400',
    category: 'new',
    Img: samlplevehicle,
    engin: '8cyl',
    transmission: 'Automatic',
    desc: 'lorem ipsum doll sdt some thoda ',
    vin: '123456789',
    bodyStyle: 'Convertible',
    color: 'black',
    mpg: '34',
  },
  {
    id: '2',
    name: 'Mercedes ',
    model: 'C 63',
    price: '34,000,000',
    mileage: '400',
    category: 'new',
    Img: samlplevehicle,
    engin: '8cyl',
    transmission: 'Automatic',
    desc: 'lorem ipsum doll sdt some thoda ',
    vin: '123456789',
    bodyStyle: 'Convertible',
    color: 'black',
    mpg: '34',
  },
  {
    id: '3',
    name: 'Tesla',
    model: 'C 63',
    price: '15,000,000',
    mileage: '400',
    category: 'new',
    Img: samlplevehicle,
    engin: '8cyl',
    transmission: 'Automatic',
    desc: 'lorem ipsum doll sdt some thoda ',
    vin: '123456789',
    bodyStyle: 'Convertible',
    color: 'black',
    mpg: '34',
  },
  {
    id: '4',
    name: 'Toyota',
    model: 'C 63',
    price: '25,000,000',
    mileage: '400',
    category: 'new',
    Img: samlplevehicle,
    engin: '8cyl',
    transmission: 'Automatic',
    desc: 'lorem ipsum doll sdt some thoda ',
    vin: '123456789',
    bodyStyle: 'Convertible',
    color: 'black',
    mpg: '34',
  },
  {
    id: '5',
    name: 'Kia',
    model: 'C 63',
    price: '65,000,000',
    mileage: '400',
    category: 'new',
    Img: samlplevehicle,
    engin: '8cyl',
    transmission: 'Automatic',
    desc: 'lorem ipsum doll sdt some thoda ',
    vin: '123456789',
    bodyStyle: 'Convertible',
    color: 'black',
    mpg: '34',
  },
  {
    id: '6',
    name: 'Mercedes Benz',
    model: 'C 63',
    price: '35,000,000',
    mileage: '400',
    category: 'new',
    Img: samlplevehicle,
    engin: '8cyl',
    transmission: 'Automatic',
    desc: 'lorem ipsum doll sdt some thoda ',
    vin: '123456789',
    bodyStyle: 'Convertible',
    color: 'black',
    mpg: '34',
  },
  {
    id: '7',
    name: 'Mercedes Benz',
    model: 'C 63',
    price: '35,000,000',
    mileage: '400',
    category: 'new',
    Img: samlplevehicle,
    engin: '8cyl',
    transmission: 'Automatic',
    desc: 'lorem ipsum doll sdt some thoda ',
    vin: '123456789',
    bodyStyle: 'Convertible',
    color: 'black',
    mpg: '34',
  },
  {
    id: '8',
    name: 'Mercedes Benz',
    model: 'C 63',
    price: '35,000,000',
    mileage: '400',
    category: 'new',
    Img: samlplevehicle,
    engin: '8cyl',
    transmission: 'Automatic',
    desc: 'lorem ipsum doll sdt some thoda ',
    vin: '123456789',
    bodyStyle: 'Convertible',
    color: 'black',
    mpg: '34',
  },
  {
    id: '9',
    name: 'Mercedes Benz',
    model: 'C 63',
    price: '35,000,000',
    mileage: '400',
    category: 'new',
    Img: samlplevehicle,
    engin: '8cyl',
    transmission: 'Automatic',
    desc: 'lorem ipsum doll sdt some thoda ',
    vin: '123456789',
    bodyStyle: 'Convertible',
    color: 'black',
    mpg: '34',
  },
  {
    id: '10',
    name: 'Mercedes Benz',
    model: 'C 63',
    price: '35,000,000',
    mileage: '400',
    category: 'new',
    Img: samlplevehicle,
    engin: '8cyl',
    transmission: 'Automatic',
    desc: 'lorem ipsum doll sdt some thoda ',
    vin: '123456789',
    bodyStyle: 'Convertible',
    color: 'black',
    mpg: '34',
  },
  {
    id: '11',
    name: 'Mercedes Benz',
    model: 'C 63',
    price: '35,000,000',
    mileage: '400',
    category: 'new',
    Img: samlplevehicle,
    engin: '8cyl',
    transmission: 'Automatic',
    desc: 'lorem ipsum doll sdt some thoda ',
    vin: '123456789',
    bodyStyle: 'Convertible',
    color: 'black',
    mpg: '34',
  },
  {
    id: '12',
    name: 'Mercedes Benz',
    model: 'C 63',
    price: '35,000,000',
    mileage: '400',
    category: 'new',
    Img: samlplevehicle,
    engin: '8cyl',
    transmission: 'Automatic',
    desc: 'lorem ipsum doll sdt some thoda ',
    vin: '123456789',
    bodyStyle: 'Convertible',
    color: 'black',
    mpg: '34',
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
  { id: '13', name: '2021' },
  { id: '14', name: '2022' },
  { id: '15', name: '2023' },
  { id: '16', name: '2024' },
];

export const MILEAGE = [
  { id: '1', name: '0 - 30000 ' },
  { id: '2', name: '30000 - 60000 ' },
  { id: '3', name: '60000 - 90000 ' },
  { id: '4', name: '90000 - 120000 ' },
  { id: '5', name: '12000 - 150000' },
  { id: '6', name: 'Above 150000' },
  // { id: '7', name: '70000 ' },
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

export const BODY_STYLE = [
  { id: '2', name: 'Convertible' },
  { id: '3', name: 'Coupe ' },
  { id: '4', name: 'Hatchback' },
  { id: '5', name: 'Minivan' },
  { id: '6', name: 'Pickup' },
  { id: '7', name: 'SUV' },
  { id: '8', name: 'Sedan' },
  { id: '9', name: 'Van' },
  { id: '10', name: 'Wagon' },
];

export const COLORS = [
  { id: '1', name: 'Beige', color: '' },
  { id: '2', name: 'Black', color: '' },
  { id: '3', name: 'Blue ', color: '' },
  { id: '4', name: 'Brown', color: '' },
  { id: '5', name: 'Gold', color: '' },
  { id: '6', name: 'Grey', color: '' },
  { id: '7', name: 'Green', color: '' },
  { id: '8', name: 'Orange', color: '' },
  { id: '9', name: 'Pink', color: '' },
  { id: '10', name: 'Purple', color: '' },
  { id: '11', name: 'Red', color: '' },
  { id: '12', name: 'Silver', color: '' },
  { id: '13', name: 'White', color: '' },
  { id: '14', name: 'Yellow', color: '' },
];

export const TRANSMISSION = [
  { id: '1', name: 'manual' },
  { id: '2', name: 'Automatic' },
  { id: '2', name: 'Electric' },
  // { id: '3', name: 'CVT' },
  // { id: '4', name: 'Manual' },
  // { id: '5', name: 'Unknown' },
];

// front-wheel drive,
// rear-wheel drive,all-wheel drive
// four-wheel drive
export const DRIVE_TRAINS = [
  { id: '1', name: 'all-wheel drive' },
  { id: '2', name: 'four-wheel drive' },
  { id: '3', name: 'front-wheel drive' },
  { id: '4', name: 'rear-wheel drive' },
];

export const CYLINDERS = [
  { id: '1', name: '5 cylinders' },
  { id: '2', name: '6 cylinders' },
  { id: '3', name: '7 cylinders ' },
  { id: '4', name: '8 cylinders' },
  { id: '5', name: '10 cylinders' },
  { id: '6', name: '12 cylinders' },
  { id: '7', name: '16 cylinders' },
  { id: '8', name: '17 cylinders' },
  { id: '9', name: ' 19 cylinders' },
  { id: '10', name: '44 cylinders' },
  { id: '11', name: '54 cylinders' },
  { id: '12', name: '55 cylinders' },
  { id: '13', name: '66 cylinders' },
  { id: '14', name: '78 cylinders' },
];

export const FUEL_TYPE = [
  { id: 'electric', name: 'Electric' },
  { id: 'gasoline', name: 'Gasoline' },
  { id: 'hybrid', name: 'Hybrid' },
];

export const CONVENIENCEIOPTIONS = [
  { id: 'adaptive-cruise-control', name: 'Adaptive Cruise Control' },
  { id: 'autopilot', name: 'Autopilot' },
  { id: 'cool-seats', name: 'Cool Seats' },
  { id: 'heated-seats', name: 'Heated Seats' },
  { id: 'heated-steering-wheel', name: 'Heated Steering Wheel' },
  { id: 'keyless-start', name: 'Keyless Start' },
  { id: 'navigation-system', name: 'Navigation System' },
  { id: 'power-liftgate', name: 'Power Liftgate' },
  { id: 'remote-start', name: 'Remote Start' },
];

export const ENTERTAINMENTOPTIONS = [
  { id: 'apple-carplay-android-auto', name: 'Apple CarPlay/Android Auto' },
  { id: 'bluetooth', name: 'Bluetooth' },
  { id: 'homelink', name: 'HomeLink' },
  { id: 'premium-sound-system', name: 'Premium Sound System' },
  { id: 'rear-seat-entertainment', name: 'Rear Seat Entertainment' },
  { id: 'usb-port', name: 'USB Port' },
];

export const EXTERIOROPTIONS = [
  { id: 'alloy-wheels', name: 'Alloy Wheels' },
  { id: 'sunroof-moonroof', name: 'Sunroof/Moonroof' },
  { id: 'two-hitch', name: 'Two Hitch' },
  { id: 'two-hooks', name: 'Two Hooks' },
];

export const SAFETYOPTIONS = [
  { id: 'automatic-emergency-braking', name: 'Automatic Emergency Braking' },
  { id: 'backup-camera', name: 'Backup Camera' },
  { id: 'blind-spot-monitor', name: 'Blind Spot Monitor' },
  { id: 'break-assist', name: 'Break Assist' },
  { id: 'led-highlights', name: 'LED Highlights' },
  { id: 'lane-departure-warning', name: 'Lane Departure Warning' },
  { id: 'rear-cross-traffic-alert', name: 'Rear Cross Traffic Alert' },
  { id: 'stability-control', name: 'Stability Control' },
];

export const DOORCOUNTOPTIONS = [
  { id: '1-doors', name: '1 doors' },
  { id: '2-doors', name: '2 doors' },
  { id: '3-doors', name: '3 doors' },
  { id: '4-doors', name: '4 doors' },
  { id: '5-doors', name: '5 doors' },
  { id: '6-doors', name: '6 doors' },
  { id: '7-doors', name: '7 doors' },
  { id: '8-doors', name: '8 doors' },
];

export const reviews = [
  {
    name: 'Chinedu Adeyemi, Lagos',
    date: '2025-06-01',
    content:
      'Excellent service from start to finish! I sold my car quickly, thanks to the precise AI-powered appraisal and a seamless listing process. The transparent car history details and fast payment really set this platform apart. Highly recommended for anyone looking to sell their car in Nigeria.',
  },
  {
    name: 'Ngozi Okafor, Abuja',
    date: '2025-06-02',
    content:
      'Listing my vehicle was effortless, and the support I received was exceptional. The platform made tracking every sale a breeze, giving me full control over the process. I got a fair deal, and the experience was truly professional. This is the go-to place for buying and selling cars in Nigeria!',
  },
  {
    name: 'Fatima Bello, Kano',
    date: '2025-06-03',
    content:
      "I was impressed by the reliability and efficiency of this service. From a detailed car history report to a smooth, quick payment upon sale, everything was handled with utmost professionalism. Whether you're selling a car or exploring used cars for sale, this platform is the most trusted in Nigeria.",
  },
  {
    name: 'Chinedu Adeyemi, Lagos',
    date: '2025-06-04',
    content:
      'Excellent service from start to finish! I sold my car quickly with a transparent car history report and swift payment. This platform is a game-changer for selling cars in Nigeria.',
  },
  {
    name: 'Ngozi Okafor, Abuja',
    date: '2025-06-05',
    content:
      'Listing my vehicle was effortless and efficient. The seamless process, from appraisal to payment, gave me full control over my sale. Highly recommended!',
  },
  {
    name: 'Fatima Bello, Kano',
    date: '2025-06-06',
    content:
      'I was impressed by the reliable AI-powered diagnostic and fast payment system. The platform made it simple to sell my car with confidence.',
  },
  {
    name: 'Emeka Okonkwo, Port Harcourt',
    date: '2025-06-07',
    content:
      'Outstanding experience! My vehicle was appraised accurately and listed promptly. The comprehensive car history feature builds trust and ensures a smooth sale.',
  },
  {
    name: 'Aisha Yusuf, Ibadan',
    date: '2025-06-08',
    content:
      'From inspection to secure payment, every step was handled professionally. I felt supported throughout the process, making it the best place to sell my car.',
  },
  {
    name: 'Uche Nwankwo, Enugu',
    date: '2025-06-09',
    content:
      'Top-notch service! The detailed appraisal and transparent car history allowed me to list my car with ease. I received my payment quickly and securely.',
  },
  {
    name: 'Segun Akinyele, Benin City',
    date: '2025-06-10',
    content:
      'An innovative platform that truly simplifies selling cars. The seamless process and real-time tracking of my listing made all the difference.',
  },
  {
    name: 'Ijeoma Nnamdi, Owerri',
    date: '2025-06-11',
    content:
      'Fast, reliable, and hassle-free. The AI-powered inspection provided an accurate appraisal, and I was thrilled with the prompt payment upon sale.',
  },
  {
    name: 'Tunde Balogun, Jos',
    date: '2025-06-12',
    content:
      'A fantastic experience from start to finish! I managed to sell my car quickly, thanks to the clear car history report and efficient transaction process.',
  },
  {
    name: 'Amaka Obi, Warri',
    date: '2025-06-13',
    content:
      'I couldn’t be happier with the service. The platform’s seamless process for listing and selling cars in Nigeria is truly unmatched. Fast, secure, and transparent!',
  },
];
