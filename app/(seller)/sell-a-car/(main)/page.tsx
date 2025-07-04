import React from 'react';
import Image from 'next/image';
import './page.css';
import Marquee from 'react-fast-marquee';

import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import SellerStep from '@/app/(seller)/_components/SellerStep/SellerStep';
import HeroImg from '@/app/(seller)/assets/sellerimg.svg';
// import SVector from '@/app/(seller)/assets/seamlessvector.svg';
import Track from '@/app/(seller)/assets/track.svg';
import BgVector from '@/app/(seller)/assets/backgroundvector.svg';
import MobilAnalytic from '@/app/(seller)/assets/mobileanalytics.svg';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTriggerTwo,
} from '@/components/ui/accordion';
import ModalStepper from '../_components/ModalStepper';
import DynamicImage from '@/components/DynamicImage/DynamicImage';
import { reviews } from '@/constants/constants';

export const metadata = {
  title: 'Autobuy',
  description: 'Generated by create next app',
};

const Seller = () => {
  return (
    <div>
      <section className="relative w-full h-full">
        <div className="grid w-full place-items-center h-auto md:h-[calc(100vh_-_76px)] md:max-h-[638px] bg-gradient-to-b from-[#FC816940] via-[#F199892D] t0-[#FFFFFF1A]">
          <MaxWidthWrapper>
            <div className="flex py-6 z-10 relative w-full gap-4 flex-col md:flex-row items-center justify-around">
              <div className="flex flex-col gap-6">
                <div className="flex justify-center md:justify-start ">
                  <Image src={HeroImg} alt="Image" height={150} width={150} />
                </div>
                <div className=" max-w-[398px]   min-[430px]:max-w-[658px] text-black text-center md:text-start">
                  <h1 className="font-bold text-3xl md:text-[40px] lg:text-[54px] leading-[40px] md:leading-[70px]">
                    Sell Your{' '}
                    <span className="px-3 md:px-[15px] relative inline-block">
                      Car
                      {/* <Image
                        src={SVector}
                        alt="vector"
                        width={275}
                        height={100}
                        className="absolute -top-[25%] md:-top-[8%] lg:-top-[22%] right-0 w-[98%] md:w-auto"
                      /> */}
                    </span>{' '}
                    Quickly and Securely
                  </h1>
                  {/* <p className="min-[380px]:text-lg mt-2">
                    Where Your Vehicle Finds Its Next Adventure!
                  </p> */}
                </div>
              </div>

              <ModalStepper />
            </div>
          </MaxWidthWrapper>
        </div>
      </section>

      <SellerStep />

      <section className="my-24 relative ">
        <MaxWidthWrapper>
          <div className="text-center md:text-start w-full md:w-[70%] mb-12">
            <h1 className="font-bold text-2xl md:text-[42px] md:leading-[52px] text-[#1A1A1A] mb-2">
              You don’t just sell, we help you track and manage every sale in one place!
            </h1>
            <p className="text-sm md:text-base">
              You don’t just sell—manage every sale in one place! Our platform lets you track your
              listings, monitor offers, and handle transactions effortlessly. From used cars for
              sale to trucks for sale, every detail—from verified car history to secure payments—is
              organized for a seamless sell car experience. Join the trusted network for buying and
              selling cars in Nigeria and stay in control of every sale.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:h-[360px]">
            <div className="h-full w-full lg:w-[713px]">
              <DynamicImage
                desktopImg={Track}
                mobileImg={MobilAnalytic}
                className="h-full w-full rounded-tr-[30px] lg:rounded-tr-[0px] lg:rounded-bl-[30px] rounded-bl-[0px] "
              />
              {/* <Image
                src={Track}
                alt="track"
                width={713}
                height={360}
                className="h-full w-full rounded-tr-[30px] lg:rounded-tr-[0px] lg:rounded-bl-[30px] rounded-bl-[0px] "
              /> */}
            </div>
            <div className="bg-[#E6583D] py-6 px-10 rounded-bl-[30px] lg:rounded-bl-[0px] lg:rounded-tr-[30px] rounded-br-[30px] h-full w-full lg:max-w-[480px]">
              <ul className="list-disc pl-1 sm:pl-5 flex flex-col gap-2 text-white">
                <li className="">
                  <p className="font-bold text-lg">Comprehensive Management: </p>
                  <span className="">
                    Beyond just selling, track every sale and expense in one streamlined platform
                    for total control
                  </span>
                </li>
                <li className="text-[#F17F5A]">
                  <p className="font-bold text-lg"> Seamless Experience:</p>
                  <span>
                    Simplify vehicle sales and expense tracking with user-friendly tools designed to
                    save you time and effort.
                  </span>
                </li>
                <li className="text-[#F17F5A]">
                  <p className="font-bold text-lg">Stay Organized: </p>
                  <span>
                    Keep all your sales data accessible in one place, helping you stay organized and
                    focused on growth.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </MaxWidthWrapper>
        <Image
          src={BgVector}
          alt="background vector"
          height={1000}
          width={500}
          className="absolute -top-[40%] right-0 -z-10 hidden sm:block"
        />
      </section>

      <section className="bg-[#FFF6F0] py-10">
        <MaxWidthWrapper>
          <h1 className=" font-bold text-2xl text-center md:text-left mb-3  md:text-[42px] mt-8">
            What Our Customers Are Saying
          </h1>
          <p className="font-medium text-center md:text-left">
            Weve sold more than 200 cars for customers and received a lot of great feedback. See
            what our clients say about us.
          </p>
          <div className="flex w-full overflow-y-auto gap-4 ">
            <Marquee>
              {reviews.map((item) => (
                <div
                  key={item.name}
                  className="w-[400px] bg-white rounded-lg  shadow-sm px-6 py-8 my-8 mx-4 space-y-4"
                >
                  <div className="flex items-start gap-2">
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-neutral-500">{item.date}</p>
                    </div>
                  </div>

                  <p>{item.content}</p>
                </div>
              ))}
            </Marquee>
          </div>
          <p className="underline text-secondary-700 text-lg cursor-pointer mt-3">
            See All Reviews
          </p>
        </MaxWidthWrapper>
      </section>

      <section className=" mt-16">
        <MaxWidthWrapper>
          <div className="flex flex-col md:flex-row gap-6 md:gap-16">
            <div className="flex justify-center">
              <div className="text-center md:text-start max-w-[600px]">
                <h1 className=" font-bold text-3xl md:text-[42px] md:leading-[50px] mb-3">
                  Frequently Asked Questions
                </h1>
                <p className="font-medium mb-6">Have questions? Were here to help</p>
                <button
                  type="button"
                  className="text-secondary-700 font-medium border border-secondary-700 rounded-[50px] px-4 py-3 w-[186px]"
                >
                  View All FAQs
                </button>
              </div>
            </div>

            <div className="mb-16 w-full">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-[#E6583D66]">
                  <AccordionTriggerTwo className="hover:no-underline text-left md:text-center">
                    How does the car inspection process work?
                  </AccordionTriggerTwo>
                  <AccordionContent className="w-full">
                    During the inspection, our experts will physically examine your vehicle to
                    assess its overall condition. This includes checking the exterior, interior,
                    engine, tires, lights, and other key components.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem className="border-[#E6583D66]" value="item-2">
                  <AccordionTriggerTwo className="hover:no-underline text-left md:text-center">
                    How long does the inspection take?
                  </AccordionTriggerTwo>
                  <AccordionContent>
                    The vehicle inspection typically takes between 30 to 45 minutes, depending on
                    the car’s condition and documentation. Our team conducts a thorough check to
                    ensure all details match the submitted information.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem className="border-[#E6583D66]" value="item-3">
                  <AccordionTriggerTwo className="hover:no-underline text-left md:text-center">
                    Can I sell my car without an inspection?
                  </AccordionTriggerTwo>
                  <AccordionContent>
                    No,an inspection is required to verify the vehicle’s condition and confirm its
                    value.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem className="border-[#E6583D66]" value="item-4">
                  <AccordionTriggerTwo className="hover:no-underline text-left md:text-center">
                    How does the AI-generated vehicle appraisal work?
                  </AccordionTriggerTwo>
                  <AccordionContent>
                    Our AI appraisal system works by connecting a specialized AI tool to your
                    vehicle’s OBD (On-Board Diagnostics) port. The tool automatically retrieves key
                    data from the car—such as mileage, engine health, fault codes, and other system
                    metrics—and compares it with factory specifications stored in the AI database.
                    This allows for a fast, accurate, and unbiased valuation based on the vehicle’s
                    actual condition.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem className="border-[#E6583D66]" value="item-5">
                  <AccordionTriggerTwo className="hover:no-underline text-left md:text-center">
                    What do I need to bring to the inspection appointment?
                  </AccordionTriggerTwo>
                  <AccordionContent>
                    <ul>
                      <li> Valid ID (e.g., driver’s license or national ID)</li>
                      <li> Vehicle registration document </li>
                      <li>Proof of ownership (if different from registration)</li>
                      <li>Service or maintenance records (if available)</li>
                      <li>Any accessories or spare keys included in the sale</li>
                      <li>
                        Bringing complete documentation helps speed up the inspection and ensures a
                        smoother appraisal process.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default Seller;
