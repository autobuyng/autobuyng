'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Google from '@/components/Navbar/assets/Google.svg';

import { cn } from '@/lib/utils';
import { IRegistrationPayload, RegistrationSchema } from '@/Schema/authSchema';
import {
  useRegister,
  // useRegisterWithFaceBook,
  // useRegisterWithGoogle,
} from '@/app/(buyer)/api/auth';
import { EyeIcon, EyeOffIcon, Loader } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import Image from 'next/image';
import useDetectOS from '@/hooks/useDetectOs';
import useIsMobile from '@/hooks/useIsMobile';
import { useRouter } from 'next/navigation';

const SignUp = ({
  setType,
  setSignupData,
}: {
  setSignupData: React.Dispatch<React.SetStateAction<IRegistrationPayload | null>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationPayload>({
    resolver: zodResolver(RegistrationSchema),
  });
  const os = useDetectOS();
  const { isMobile } = useIsMobile();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const { toast } = useToast();

  const { signup, isRegistering } = useRegister();
  // const { googleSignup } = useRegisterWithGoogle();
  // const { faceBookSignup } = useRegisterWithFaceBook();

  const handleRegisterUser: SubmitHandler<IRegistrationPayload> = async (data) => {
    setSignupData(data);
    try {
      const response = await signup(data);
      if (response.status === true) {
        setType('verification');
      }
    } catch (error: any) {
      console.log(error, 'error');
      toast({
        title: 'Failed',
        description: error.message,
      });
    }
    // Implement your registration logic here
  };

  const googleLogin = () => {
    router.push('https://autobuy-latest.onrender.com/api/v1/auth/google');
  };
  const faceBookLogin = () => {
    router.push('https://autobuy-latest.onrender.com/api/v1/auth/facebook');
  };

  const handlSocialSignup = (type: string) => {
    try {
      type === 'google' ? googleLogin() : faceBookLogin();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(handleRegisterUser)}>
          <div className="space-y-4 w-full mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-between ">
              <div className="w-full">
                <label
                  // htmlFor="UserEmail"
                  className="block text-left text-xs font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  {...register('firstName')}
                  type="text"
                  id="fullName"
                  placeholder="John"
                  className={cn(
                    'mt-1 block w-full py-1.5 px-2 outline-none border rounded-md border-neutral-700 shadow-sm sm:text-sm',
                    { 'border border-red-500': errors.firstName },
                  )}
                />
              </div>

              <div className="w-full">
                <label
                  // htmlFor="UserEmail"
                  className="block text-left text-xs font-medium text-gray-700"
                >
                  Last name
                </label>
                <input
                  {...register('lastName')}
                  type="text"
                  id="lastName"
                  placeholder="Doe"
                  className={cn(
                    'mt-1 block w-full py-1.5 px-2 outline-none border rounded-md border-neutral-700 shadow-sm sm:text-sm',
                    { 'border border-red-500': errors.lastName },
                  )}
                />
              </div>
            </div>

            <div className="w-full flex flex-col sm:flex-row gap-2">
              <div className="w-full">
                <label
                  // htmlFor="UserEmail"
                  className="block text-left text-xs font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  {...register('phoneNumber')}
                  type="text"
                  id="phoneNumber"
                  placeholder="08012345678"
                  className={cn(
                    'mt-1 block w-full py-1.5 px-2 outline-none border rounded-md border-neutral-700 shadow-sm sm:text-sm',
                    { 'border border-red-500': errors.phoneNumber },
                  )}
                />
              </div>

              <div className="w-full">
                <label
                  // htmlFor="UserEmail"
                  className="block text-left text-xs font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  placeholder="johndoe@gmail.com"
                  className={cn(
                    'mt-1 w-full py-1.5 px-2 outline-none border rounded-md border-neutral-700 shadow-sm sm:text-sm',
                    { 'border border-red-500': errors.email },
                  )}
                />
              </div>
            </div>

            <div>
              <label
                // htmlFor="password"
                className="block text-left text-xs font-medium text-gray-700"
              >
                Password
              </label>
              <div
                className={cn(
                  'mt-1 flex justify-between items-center w-full  px-2 outline-none border rounded-md border-neutral-700 shadow-sm sm:text-sm',
                  { 'border border-red-500': errors.password },
                )}
              >
                <input
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="******"
                  className={cn(
                    'flex-1 border-none outline-none py-1.5',
                    // { 'border border-red-500': errors.password },
                  )}
                />
                {showPassword ? (
                  <EyeIcon onClick={() => setShowPassword(false)} />
                ) : (
                  <EyeOffIcon onClick={() => setShowPassword(true)} />
                )}
              </div>
              {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
            </div>
            <p className="text-xs">
              By signing up, you confirm that you&apos;ve read and accepted our
              <span className="text-primary-700 mx-1">Term Of Use</span>
              and <span className="text-primary-700">Privacy Policy.</span>
            </p>

            <div className="w-full">
              <button className="w-full bg-primary-700 rounded-md py-3 text-white">
                {isRegistering ? <Loader className="animate-spin mx-auto w" /> : 'Sign Up'}
              </button>
            </div>

            <p>
              Already have an account?{' '}
              <span onClick={() => setType('signin')} className="text-primary-500 cursor-pointer">
                Log In
              </span>
            </p>
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
              <button
                onClick={() => handlSocialSignup('google')}
                className="flex w-full items-center justify-center gap-4 border border-neutral-700 rounded-sm py-2 px-6"
              >
                <Image src={Google} alt="Google" /> <span>Sign up with Google</span>
              </button>
            </div>

            {/* <div className="w-full">
              <button
                onClick={() => handlSocialSignup('facebook')}
                className="flex w-full items-center justify-center gap-4 border border-neutral-700 rounded-sm py-2 px-6 whitespace-nowrap"
              >
                <Image src={Facebook} alt="Facebook" />
                <span> Sign up with Facebook</span>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
