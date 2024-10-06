'use client';
import Image from 'next/image';
import { useContext } from 'react';

import Google from '@/components/Navbar/assets/Google.svg';
import Facebook from '@/components/Navbar/assets/Facebook.svg';

import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import useDetectOS from '@/hooks/useDetectOs';
import { cn } from '@/lib/utils';
import useIsMobile from '@/hooks/useIsMobile';
import { AppContext } from '@/context/AppContext';
// import { USER } from '@/constants/constants';

const SignIn = ({
  isOpen,
  handleOpenChange,
  type,
  setType,
}: {
  isOpen: boolean;
  handleOpenChange: () => void;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const os = useDetectOS();
  const { isMobile } = useIsMobile();
  const { setUser, user } = useContext(AppContext);

  return (
    <div>
      <Dialog open={isOpen && !user} onOpenChange={handleOpenChange}>
        <DialogContent className=" max-w-[90%] mx-auto sm:max-w-[552px] ">
          <DialogTitle className="text-center">
            <h1 className="text-2xl md:text-3xl text-primary-700 py-4">
              {type === 'signin' ? 'Log in' : 'Create your Account'}
            </h1>
          </DialogTitle>
          <DialogDescription className="-mt-8 w-full">
            <form action="">
              <div className="space-y-4 w-full mx-auto">
                {type === 'signup' && (
                  <div>
                    <label
                      htmlFor="UserEmail"
                      className="block text-left text-xs font-medium text-gray-700"
                    >
                      FullName
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      placeholder="Tosin kadiri"
                      className="mt-1 block w-full py-3 px-2 outline-none border rounded-md border-neutral-700 shadow-sm sm:text-sm"
                    />
                  </div>
                )}

                <div>
                  <label
                    htmlFor="UserEmail"
                    className="block text-left text-xs font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="tosinkadiri@gmail.com"
                    className="mt-1 w-full py-3 px-2 outline-none border rounded-md border-neutral-700 shadow-sm sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-left text-xs font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="******"
                    className="mt-1 w-full py-3 px-2 rounded-md outline-none border border-neutral-700 shadow-sm sm:text-sm"
                  />
                </div>
                <p className="text-xs">
                  {type === 'signin'
                    ? 'forgot password '
                    : "By signing up, you confirm that you've read and accepted our  and Privacy Policy."}
                </p>

                <div className="w-full">
                  <button
                    onClick={() => setUser(true)}
                    className="w-full bg-primary-700 rounded-md py-3 text-white"
                  >
                    {type === 'signin' ? 'Log in' : 'Create Account'}
                  </button>
                </div>

                {type === 'signin' ? (
                  <p>
                    Don&apos;t have an account?{' '}
                    <span
                      onClick={() => setType('signup')}
                      className="text-primary-500 cursor-pointer"
                    >
                      SignUp
                    </span>
                  </p>
                ) : (
                  <p>
                    Already have an account?{' '}
                    <span
                      onClick={() => setType('signin')}
                      className="text-primary-500 cursor-pointer"
                    >
                      Login in
                    </span>
                  </p>
                )}
              </div>
            </form>

            <div className="flex flex-col gap-4">
              <div className="w-full flex justify-between items-center gap-[5px]">
                <span className="border-t-[1.5px] border-[#C0C0C0] w-full"></span>
                <span className="text-lg">or</span>
                <span className="border-t-[1.5px] border-[#C0C0C0] w-full"></span>
              </div>

              <div
                className={cn('flex  gap-4', {
                  'sm:flex-col': os === 'macOS',
                  'flex-col': isMobile,
                })}
              >
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
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SignIn;
