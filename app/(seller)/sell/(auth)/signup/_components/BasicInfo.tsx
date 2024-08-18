import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';

import Google from '@/components/Navbar/assets/Google.svg';
import Facebook from '@/components/Navbar/assets/Facebook.svg';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

type BasicInfoProps = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const BasicInfo = ({ step, setStep }: BasicInfoProps) => {
  return (
    <MaxWidthWrapper>
      <main className=" w-full grid place-items-center ">
        {/* <h1 className="text-center font-bold text-2xl mt-8">
          Welcome! Create your account to sell a vehicle.
        </h1> */}
        <div className="w-full space-y-4 py-2">
          <form action="" className="space-y-4">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-left text-sm font-medium text-neutral-500"
                >
                  First name
                </label>
                <div className="w-full">
                  <input
                    type="text"
                    id="firstname"
                    placeholder="chima"
                    className="  px-2  border rounded-md border-neutral-700 shadow-sm w-full h-full py-3  outline-none sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="lastname"
                  className="block text-left text-sm font-medium text-neutral-500"
                >
                  Last name
                </label>
                <div className="w-full">
                  <input
                    type="lastname"
                    id="lastname"
                    placeholder="Emmanuel"
                    className="  px-2  border rounded-md border-neutral-700 shadow-sm w-full h-full py-3  outline-none sm:text-sm"
                  />
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="mobilenumber"
                  className="block text-left text-sm font-medium text-neutral-500"
                >
                  Mobile number
                </label>
                <div className="w-full">
                  <input
                    type="text"
                    id="mobilenumber"
                    placeholder="chima"
                    className="  px-2  border rounded-md border-neutral-700 shadow-sm w-full h-full py-3  outline-none sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="lastname"
                  className="block text-left text-sm font-medium text-neutral-500"
                >
                  Email
                </label>
                <div className="w-full">
                  <input
                    type="email"
                    id="email"
                    placeholder="abc@gmail.com"
                    className="  px-2  border rounded-md border-neutral-700 shadow-sm w-full h-full py-3  outline-none sm:text-sm"
                  />
                </div>
              </div>
            </section>

            <section>
              <div>
                <label
                  htmlFor="mobilenumber"
                  className="block text-left text-sm font-medium text-neutral-500"
                >
                  Password
                </label>
                <div className="w-full">
                  <input
                    type="password"
                    id="password"
                    placeholder=""
                    className="  px-2  border rounded-md border-neutral-700 shadow-sm w-full h-full py-3  outline-none sm:text-sm"
                  />
                </div>
              </div>
            </section>

            <div className="w-full mt-4">
              <button
                onClick={() => setStep(step + 1)}
                className="w-full bg-secondary-500 text-white py-2 px-4 rounded-sm"
              >
                Proceed
              </button>
            </div>

            <div className="w-full my-3 flex justify-between items-center gap-[5px]">
              <span className="border-t-[1.5px] border-[#C0C0C0] w-full"></span>
              <span className="text-lg">or</span>
              <span className="border-t-[1.5px] border-[#C0C0C0] w-full"></span>
            </div>

            <div className={cn('flex flex-col md:flex-row  gap-4')}>
              <div className="w-full">
                <button className="flex w-full items-center justify-center gap-4 border border-neutral-700 rounded-sm py-2 px-6">
                  <Image src={Google} alt="Google" /> <span>Sign up with Google</span>
                </button>
              </div>

              <div className="w-full">
                <button className="flex w-full items-center justify-center gap-4 border border-neutral-700 rounded-sm py-2 px-6 whitespace-nowrap">
                  <Image src={Facebook} alt="Facebook" />
                  <span> Sign up with Facebook</span>
                </button>
              </div>
            </div>

            <div className="text-sm">
              <p className="text-center">
                Signing up for an Autobuy sellers account means you agree to the{' '}
                <span className="text-secondary-700">Privacy Policy</span> and
                <span className="text-secondary-700"> Terms of Service</span>
              </p>

              <p className="text-center">
                Already signed up?{' '}
                <Link href="login" className="text-secondary-700">
                  <span>Log in</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </main>
    </MaxWidthWrapper>
  );
};

export default BasicInfo;
