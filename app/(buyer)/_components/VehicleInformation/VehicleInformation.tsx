import Link from 'next/link';
import React from 'react';

// import Interior from '@/app/(buyer)/assets/interior.svg';
// import Exterior from '@/app/(buyer)/assets/exterior.svg';
// import Drivetrain from '@/app/(buyer)/assets/Drivetrain.svg';
// import Transmit from '@/app/(buyer)/assets/tramit.svg';
// import Engine from '@/app/(buyer)/assets/engine.svg';
// import Fueltype from '@/app/(buyer)/assets/Fueltype.svg';
// import Mpg from '@/app/(buyer)/assets/Mpg.svg';
// import Vin from '@/app/(buyer)/assets/vin.svg';
// import Love from '@/app/(buyer)/assets/love.svg';

const VehicleInformation = () => {
  return (
    <div className="mt-4">
      <div>
        <div className="my-2 space-y-2">
          <div className="flex items-center justify-between">
            <p className="font-[600] text-2xl">Mercedes Benz</p>
            <p className="text-white bg-primary-700 px-1 py-1 rounded-tl-[10px] rounded-br-[10px]">
              Foreign used
            </p>
          </div>

          <div className="space-x-1 flex items-center">
            <span className="text-neutral-700 font-semibold">9k miles</span>
            <span>|</span>
            <span className="text-xl font-bold tracking-wide">NGN13,000,000</span>
          </div>

          <div className="flex items-center justify-center gap-2 bg-[#CCE0FF] w-[191px] h-[29px] rounded-[50px] text-sm">
            <span className="text-primary-900">VIN</span> <span>19XFB2F71FE246463</span>
          </div>
        </div>

        <div>
          <h1 className="py-2 font-bold text-xl">Overview</h1>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-6">
            <div>
              <h1 className="text-[20px] leading-[25px] font-medium">Navy Blue</h1>
              <p className="bg-primary-100 text-primary-900 w-[101px] h-[25px] flex items-center justify-center text-sm rounded-[50px]">
                interior color
              </p>
            </div>

            <div>
              <h1 className="text-[20px] leading-[25px] font-medium">4 Wheel Drive</h1>
              <p className="bg-primary-100 text-primary-900 w-[80px] h-[25px] flex items-center justify-center text-sm rounded-[50px]">
                Drive train
              </p>
            </div>

            <div>
              <h1 className="text-[20px] leading-[25px] font-medium">Automatic</h1>
              <p className="bg-primary-100 text-primary-900 w-[103px] h-[25px] flex items-center justify-center text-sm rounded-[50px]">
                Transmission
              </p>
            </div>

            <div>
              <h1 className="text-[20px] leading-[25px] font-medium">35 - 40</h1>
              <p className="bg-primary-100 text-primary-900 w-[48px] h-[25px] flex items-center justify-center text-sm rounded-[50px]">
                MPG
              </p>
            </div>

            <div>
              <h1 className="text-[20px] leading-[25px] font-medium">Black</h1>
              <p className="bg-primary-100 text-primary-900 w-[101px] h-[25px] flex items-center justify-center text-sm rounded-[50px]">
                Exterior color
              </p>
            </div>

            <div>
              <h1 className="text-[20px] leading-[25px] font-medium">PMS</h1>
              <p className="bg-primary-100 text-primary-900 w-[77px] h-[25px] flex items-center justify-center text-sm rounded-[50px]">
                Fuel Type
              </p>
            </div>

            <div>
              <h1 className="text-[20px] leading-[25px] font-medium">35 - 40</h1>
              <p className="bg-primary-100 text-primary-900 w-[48px] h-[25px] flex items-center justify-center text-sm rounded-[50px]">
                MPG
              </p>
            </div>
            <div>
              <h1 className="text-[20px] leading-[25px] font-medium">1.8L,4Cyl</h1>
              <p className="bg-primary-100 text-primary-900 w-[61px] h-[25px] flex items-center justify-center text-sm rounded-[50px]">
                Engine
              </p>
            </div>

            {/* <div className="w-full space-y-3">
              <div className="flex gap-3 items-center w-full">
                <p className="flex gap-1.5 items-center justify-center">
                  <Image src={Interior} alt="Interior" width={30} height={30} />
                  <span className="text-primary-700 font-[600] whitespace-nowrap">
                    Interior Color:
                  </span>
                </p>
                <span>Navy Blue</span>
              </div>

              <div className="flex gap-3 items-center w-full">
                <p className="flex gap-1.5 items-center justify-center">
                  <Image src={Exterior} alt="Exterior" width={30} height={30} />
                  <span className="text-primary-700 font-[600] whitespace-nowrap">
                    Exterior color:
                  </span>
                </p>
                <span>Black</span>
              </div>

              <div className="flex gap-3 items-center w-full">
                <p className="flex gap-1.5 items-center justify-center">
                  <Image src={Drivetrain} alt="Drivetrain" width={30} height={30} />
                  <span className="text-primary-700 font-[600]">Drivetrain:</span>
                </p>
                <span>4 wheel drive</span>
              </div>

              <div className="flex gap-3 items-center w-full">
                <p className="flex gap-1.5 items-center justify-center">
                  <Image src={Fueltype} alt="Fuel type" width={30} height={30} />
                  <span className="text-primary-700 font-[600]">Fuel type:</span>
                </p>
                <span>PMS</span>
              </div>

              <div className="flex gap-3 items-center w-full">
                <p className="flex gap-1.5 items-center justify-center">
                  <Image src={Transmit} alt="Transmission" width={30} height={30} />
                  <span className="text-primary-700 font-[600]">Transmission:</span>
                </p>
                <span>AUTOMATIC</span>
              </div>

              <div className="flex gap-3 items-center w-full">
                <p className="flex gap-1.5 items-center justify-center">
                  <Image src={Mpg} alt="MPG" width={30} height={30} />
                  <span className="text-primary-700 font-[600]">MPG:</span>
                </p>
                <span>35 - 40</span>
              </div>

              <div className="flex gap-3  items-start justify-start w-full">
                <p className="flex gap-1.5 items-center justify-center ">
                  <Image src={Engine} alt="Engine type" width={30} height={30} />
                  <span className="text-primary-700 font-[600] whitespace-nowrap">
                    Engine type:
                  </span>
                </p>
                <span className="">
                  1.8L I-4 i-VTEC variable valve control, regular unleaded, engine
                </span>
              </div>

              <div className="flex gap-3 items-center w-full">
                <p className="flex gap-1.5 items-center justify-center">
                  <Image src={Vin} alt="Vin" width={30} height={30} />
                  <span className="text-primary-700 font-[600]">Vin:</span>
                </p>
                <span>14DAETDEITYDDJTAOTE</span>
              </div>
            </div> */}
          </div>

          <p className="underline text-sm text-primary-900 cursor-pointer mt-8 capitalize">
            <Link href="/vehicle-history/45174d0d-7906-4cef-a617-904cf2a580eb">
              view vehicle history
            </Link>
          </p>
        </div>

        <div className="mt-8">
          <h1 className="py-2 font-bold text-xl">Features</h1>
          <div className=" grid grid-cols-1 md:grid-cols-2">
            <div className="space-y-2">
              <p>Heated and Ventilated Seats</p>
              <p>Power Liftgate</p>
              <p>Parking Sensors</p>
              <p>Rear View Camera</p>
              <p>360 Camera System</p>
            </div>

            <div className="space-y-2">
              <p>Apple CarPlay</p>
              <p>Blind Spot Monitor</p>
              <p>Remote Start</p>
              <p>Sunroofs</p>
              <p>Wireless Charging</p>
            </div>
          </div>

          <button className="border-2 mt-8 border-primary-900 text-primary-900 font-bold w-[265px] h-[48px] rounded-sm uppercase">
            View All Features & Specs
          </button>
        </div>

        <div className="mt-8">
          <div className="w-full  h-[148px] bg-primary-700 flex items-center justify-between rounded-[15px] px-6">
            <p className="text-white flex-[4]">
              Our vehicle inspection is conducted using advanced AI diagnostics, providing an
              accurate, data-driven analysis of its condition and performance. This ensures a
              reliable and transparent report for informed decision-making.
            </p>
            <p className="w-[100px] h-[100px] rounded-[50%] bg-[#D9D9D9] "></p>
          </div>

          {/* <h1 className="py-2 font-bold text-xl">Additional Features</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quisquam quis
            perspiciatis officia, nesciunt explicabo voluptatem temporibus est adipisci ratione.
          </p> */}
        </div>

        {/* <div className="mt-8">
          <h1 className="py-2 font-bold text-xl">Have any question</h1>
          <p>
            Get answers to questions about the car, request for a detailed explanation and seek
            professional guidance from our staffs.
          </p>

          <button className="bg-primary-700 text-white px-3 py-1 rounded-sm">Chat with us</button>
        </div> */}

        {/* <div className="mt-8">
          <h1 className="py-2 font-bold text-xl">Made your decision?</h1>
          <div className="flex gap-4">
            <button className="bg-primary-700 text-white px-3 py-1 rounded-sm">
              Buy this car Now!
            </button>
            <button className="border-2 flex items-center gap-2 border-primary-700 rounded-sm px-3 py-1 text-primary-700">
              <span>Save to Inventory</span>
              <Image src={Love} alt="Love" />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default VehicleInformation;
