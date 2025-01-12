'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { cn } from '@/lib/utils';
// import useIsMobile from '@/hooks/useIsMobile';
// import { AppContext } from '@/context/AppContext';
import { ILoginPayload, LoginSchema } from '@/Schema/authSchema';
import { useLogin } from '@/app/(buyer)/api/auth';
import { EyeIcon, EyeOffIcon, Loader } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
// import { useContext } from 'react';
import { useRouter } from 'next/navigation';
// import { useContext } from 'react';
import { setSessionItem } from '@/lib/Sessionstorage';
import { useStore } from '@/store/useStore';
import { useState } from 'react';

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
  // const os = useDetectOS();
  // const { isMobile } = useIsMobile();
  // const { user, setUser } = useContext(AppContext);
  const { setUser } = useStore();

  const router = useRouter();

  const { login, isLoggingIn } = useLogin();

  const handleLoginUser: SubmitHandler<ILoginPayload> = async (data) => {
    try {
      const response = await login(data);
      if (response.status === true) {
        toast({
          title: 'Success',
          description: response.message,
        });
        setUser(response.data.user);
        setSessionItem('accessToken', response.data.accessToken);
      }
      setIsOpen(false);
    } catch (error: any) {
      toast({
        title: 'Failed',
        description: error.message,
      });
    }
    console.log(data);
    // Implement your registration logic here
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
    </div>
  );
};

export default SignIn;
