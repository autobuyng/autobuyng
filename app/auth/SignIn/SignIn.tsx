'use client';
// import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// import Google from '@/components/Navbar/assets/Google.svg';
// import Facebook from '@/components/Navbar/assets/Facebook.svg';

import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
// import useDetectOS from '@/hooks/useDetectOs';
import { cn } from '@/lib/utils';
// import useIsMobile from '@/hooks/useIsMobile';
import { AppContext } from '@/context/AppContext';
import { ILoginPayload, LoginSchema } from '@/Schema/authSchema';
import { useLogin } from '@/app/(buyer)/api/auth';
import { Loader } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
// import { USER } from '@/constants/constants';

const SignIn = ({
  isOpen,
  handleOpenChange,
  type,
  setType,
  setIsOpen,
}: {
  isOpen: boolean;
  handleOpenChange: () => void;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginPayload>({
    resolver: zodResolver(LoginSchema),
  });

  const { toast } = useToast();
  console.log(errors, 'errors');
  // const os = useDetectOS();
  // const { isMobile } = useIsMobile();
  const { user } = useContext(AppContext);
  const router = useRouter();

  const { login, isLoggingIn } = useLogin();

  console.log(type, 'type');

  const handleLoginUser: SubmitHandler<ILoginPayload> = async (data) => {
    console.log('signin');

    try {
      const response = await login(data);
      if (response.status === true) {
        toast({
          title: 'Success',
          description: response.data.message,
        });
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
      {type === 'signin' && (
        <Dialog open={isOpen && !user} onOpenChange={handleOpenChange}>
          <DialogContent className=" max-w-[90%] mx-auto sm:max-w-[552px] ">
            <DialogTitle className="text-center">
              <h1 className="text-2xl md:text-3xl text-primary-700 py-4">
                {type === 'signin' ? 'Log in' : 'Create your Account'}
              </h1>
            </DialogTitle>
            <DialogDescription className="-mt-8 w-full">
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
                    {errors.password && (
                      <p className="text-xs text-red-500">{errors.password.message}</p>
                    )}
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
                    <span
                      onClick={() => setType('signup')}
                      className="text-primary-500 cursor-pointer"
                    >
                      SignUp
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
            </DialogDescription>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default SignIn;
