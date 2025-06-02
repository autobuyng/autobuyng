'use client';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { ILoginPayload, LoginSchema } from '@/Schema/authSchema';
import { useLogin } from '@/app/(buyer)/api/auth';
import { EyeIcon, EyeOffIcon, Loader } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { useStore } from '@/store/useStore';
import Google from '@/components/Navbar/assets/Google.svg';

import { getLocalItem, setLocalItem } from '@/lib/localStorage';
import { useLikeMultipleVehicle } from '@/app/(buyer)/api/search';

const SignIn = ({
  setType,
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginPayload>({
    resolver: zodResolver(LoginSchema),
  });

  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [likeMultipleVehicles, setLikeMultipleVehicles] = useState(false);
  const { setUser } = useStore();

  const router = useRouter();

  const { login, isLoggingIn } = useLogin();
  const { likeMultipleVehicle } = useLikeMultipleVehicle();

  const handleLoginUser: SubmitHandler<ILoginPayload> = async (data) => {
    try {
      const response = await login(data);
      if (response.status === true) {
        toast({
          description: 'Logged in Successfully',
          position: 'top-right',
        });
        setUser(response.data.user);
        setLikeMultipleVehicles(true);
        setLocalItem('accessToken', response.data.accessToken);
      }
      setIsOpen(false);
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Failed',
        description: error.message,
      });
    }
  };

  useEffect(() => {
    const localLikeMultipleVehicles: string[] = getLocalItem('likeMultipleVehicles');
    if (likeMultipleVehicles && localLikeMultipleVehicles) {
      likeMultipleVehicle({ vehicles: localLikeMultipleVehicles });
    }
  }, [likeMultipleVehicles]);

  const googleLogin = () => {
    router.push('https://autobuy-latest.onrender.com/api/v1/auth/google');
  };


  const handlSocialSignup = () => {
    try {
      googleLogin()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleLoginUser)}>
        <div className="space-y-4 w-full mx-auto">
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
              placeholder="johnDoe@gmail.com"
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
            <div
              className={cn(
                'mt-1 flex justify-between   items-center w-full  px-2 outline-none border rounded-md border-neutral-700 shadow-sm sm:text-sm',
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
          <p
            onClick={() => {
              router.push('/forgot-password');
              setIsOpen(false);
            }}
            className="text-xs text-primary-700 cursor-pointer"
          >
            Forgot password
          </p>

          <div className="w-full">
            <button className="w-full bg-primary-700 rounded-md py-3 text-white">
              {isLoggingIn ? <Loader className="animate-spin mx-auto w" /> : 'Log in'}
            </button>
          </div>

          <p>
            Don&apos;t have an account?{' '}
            <span onClick={() => setType('signup')} className="text-primary-500 cursor-pointer">
              Sign Up
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
        >
          <div className="w-full">
            <button
              onClick={() => handlSocialSignup()}
              className="flex w-full items-center justify-center gap-4 border border-neutral-700 rounded-sm py-2 px-6"
            >
              <Image src={Google} alt="Google" /> <span>Sign up with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
