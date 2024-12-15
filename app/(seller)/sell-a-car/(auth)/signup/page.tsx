'use client';
import React, { useState } from 'react';
import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import Image from 'next/image';
import BusinessInfo from './_components/BusinessInfo';
import AccountInfo from './_components/AccountInfo';
import Link from 'next/link';
import Steptop from '@/app/(seller)/assets/vectortop.svg';
import Stepbottom from '@/app/(seller)/assets/vectorbottom.svg';
import { Separator } from '@/components/ui/separator';

interface ConditonTypes {
  [key: string]: SelectConditions;
}
type SelectConditions = {
  id: string;
  text: string;
  desc: string;
  component: JSX.Element;
};
const Signup = () => {
  const [condition, setCondition] = useState(' ');

  const SELECT_CONDITION: ConditonTypes = {
    individual: {
      id: 'individual',
      text: 'businessinfo',
      desc: 'Kindly select your Business Type',
      component: <BusinessInfo />,
    },

    business: {
      id: 'individual',
      text: 'accountInfo',
      desc: 'Add your Bank Details',
      component: <AccountInfo />,
    },
  };

  const handleChange = (event: { target: { value: any } }) => {
    const selectedCondition = event.target.value;
    setCondition(selectedCondition);
  };

  return (
    <div className="flex h-full">
      <div className="flex-[1] flex justify-center">
        <MaxWidthWrapper>
          <section className="min-h-[calc(100vh_-_76px)] w-full">
            <div className="max-w-[458px] mx-auto w-full my-8">
              {/* <form action="" className="w-full space-y-4 mt-4"> */}
              <h1 className="font-bold text-2xl text-center mb-4">Create An Account</h1>
              <div className="w-full space-y-4">
                <section className="w-full mt-10 px-3 sm:px-5">
                  <label htmlFor="condition" className="text-sm text-[#4D4C4C]">
                    Select your preferred option
                  </label>
                  <select
                    id="condition"
                    name="condition"
                    value={condition}
                    onChange={handleChange}
                    className="block w-full rounded px-4 py-[9px] mt-1 bg-white border border-black outline-none shadow-none"
                  >
                    <option value="" className="text-neutral-300">
                      Are you an Individual or Business owner
                    </option>
                    <option value="individual">Individual</option>
                    <option value="business">Business Owner</option>
                  </select>
                </section>
                <Separator />

                <section>{SELECT_CONDITION[condition]?.component}</section>
              </div>
              <div>
                <p className="text-center text-sm mt-4">
                  Signing up for an Autobuy sellers account means you agree to the{' '}
                  <span className="text-secondary-500">Privacy Policy</span>
                  and <span className="text-secondary-500">Terms of Service</span>
                </p>
                <p className="text-center text-sm mt-4">
                  Already have an account?{' '}
                  <Link className="text-secondary-500" href="/sell-a-car/login">
                    Login
                  </Link>
                </p>
              </div>
              {/* </form> */}
            </div>
          </section>
        </MaxWidthWrapper>
      </div>
      <div className="md:flex-[1] hidden md:block relative h-[calc(100vh_-_76px)]">
        <div className="fixed right-0 bottom-0 top-0 z-30 w-[50%] bg-secondary-700">
          <div className="flex justify-center items-center relative h-full">
            <div className="flex flex-col items-center gap-10 z-10 relative h-fit px-10">
              <Image
                src="https://ik.imagekit.io/wy2wtykti/Autobuy/image.png"
                alt="dashboard"
                width={512}
                height={300}
                className=""
              />
              <div className="max-w-[600px] text-center text-white">
                <h1 className="text-3xl font-bold">Turn your car into cash!</h1>
                <p className="text-sm font-medium">
                  Lorem ipsum dolor sit amet consectetur. Blandit elit egestas nam dictum enim.
                  Ultrices id molestie facilisis consectetur risus massa.
                </p>
              </div>
            </div>
            <Image
              src={Steptop}
              alt="step"
              width={260}
              height={260}
              className="absolute top-0 left-0"
            />
            <Image
              src={Stepbottom}
              alt="step"
              width={260}
              height={260}
              className="absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
