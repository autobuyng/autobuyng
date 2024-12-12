'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// import Google from '@/components/Navbar/assets/Google.svg';
// import Facebook from '@/components/Navbar/assets/Facebook.svg';

import { cn } from '@/lib/utils';
import { IRegistrationPayload, RegistrationSchema } from '@/Schema/authSchema';
import { useRegister } from '@/app/(buyer)/api/auth';
import { Loader } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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

  const { toast } = useToast();

  const { signup, isRegistering } = useRegister();

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
    console.log(data);
    // Implement your registration logic here
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(handleRegisterUser)}>
          <div className="space-y-4 w-full mx-auto">
            <>
              <div className="flex items-center gap-3 justify-between ">
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
                    placeholder="Tosin kadiri"
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
                    placeholder="Tosin "
                    className={cn(
                      'mt-1 block w-full py-1.5 px-2 outline-none border rounded-md border-neutral-700 shadow-sm sm:text-sm',
                      { 'border border-red-500': errors.lastName },
                    )}
                  />
                </div>
              </div>

              <div>
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
            </>

            <div>
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
                placeholder="tosinkadiri@gmail.com"
                className={cn(
                  'mt-1 w-full py-1.5 px-2 outline-none border rounded-md border-neutral-700 shadow-sm sm:text-sm',
                  { 'border border-red-500': errors.email },
                )}
              />
            </div>

            <div>
              <label
                // htmlFor="password"
                className="block text-left text-xs font-medium text-gray-700"
              >
                Password
              </label>
              <input
                {...register('password')}
                type="password"
                id="password"
                placeholder="******"
                className={cn(
                  'mt-1 w-full py-1.5 px-2 rounded-md outline-none border border-neutral-700 shadow-sm sm:text-sm',
                  { 'border border-red-500': errors.password },
                )}
              />
              {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
            </div>
            <p className="text-xs">
              By signing up, you confirm that youve read and accepted our and Privacy Policy.
            </p>

            <div className="w-full">
              <button className="w-full bg-primary-700 rounded-md py-3 text-white">
                {isRegistering ? <Loader className="animate-spin mx-auto w" /> : 'Sign up'}
              </button>
            </div>

            <p>
              Already have an account?{' '}
              <span onClick={() => setType('signin')} className="text-primary-500 cursor-pointer">
                Login in
              </span>
            </p>
          </div>
        </form>

        {/* <div className="flex flex-col gap-4">
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
            </div> */}
      </div>
    </>
  );
};

export default SignUp;
