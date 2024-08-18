import MaxWidthWrapper from '@/components/MaxWidthWrapper/MaxWidthWrapper';
import React from 'react';

import Link from 'next/link';

type AccountInfoProp = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};
const AccountInfo = ({ step, setStep }: AccountInfoProp) => {
  console.log(step, setStep);
  return (
    <MaxWidthWrapper>
      <main className=" w-full grid place-items-center ">
        <div className="w-full space-y-2 pb-2">
          <form action="" className="space-y-4">
            <section className=" space-y-4">
              <div>
                <label
                  htmlFor="businessname"
                  className="block text-left py-1 text-sm font-medium text-neutral-500"
                >
                  Selected option
                </label>
                <select
                  className="px-2  border rounded-md border-neutral-700 shadow-sm w-full h-full py-3  outline-none sm:text-sm"
                  name=""
                  id=""
                >
                  <option value="1">First Bank</option>
                  <option value="2">Access Bank</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="accountname"
                  className="block text-left py-1 text-sm font-medium text-neutral-500"
                >
                  Account number
                </label>
                <div className="w-full">
                  <input
                    type="accountnumber"
                    id="accountnumber"
                    placeholder="Emmanuel"
                    className="  px-2  border rounded-md border-neutral-700 shadow-sm w-full h-full py-3  outline-none sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="accountname"
                  className="block text-left py-1 text-sm font-medium text-red-500"
                >
                  Account name
                </label>
                <div className="w-full">
                  <input
                    type="accountname"
                    id="accountname"
                    value="Chima Emmanuel "
                    placeholder=""
                    className="  px-2  border rounded-md border-neutral-700 shadow-sm w-full h-full py-3  outline-none sm:text-sm"
                  />
                </div>
              </div>
            </section>

            <div className="w-full mt-4">
              <button
                // onClick={() => setStep('businessinfo')}
                className="w-full bg-secondary-500 text-white py-2 px-4 rounded-sm"
              >
                Proceed
              </button>
            </div>

            <div className="text-sm">
              <p className="text-center">
                Signing up for an Autobuy sellers account means you agree to the{' '}
                <span className="text-secondary-700">Privacy Policy</span> and
                <span className="text-secondary-700"> Terms of Service</span>
              </p>

              <p className="text-center py-2">
                Already signed up?{' '}
                <Link href={'login'} className="text-secondary-700">
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

export default AccountInfo;
