import Image from 'next/image';

import Autobuy from '@/app/assets/Autobuy.svg';
const SignIn = () => {
  return (
    <main>
      <div className="text-center">
        <Image src={Autobuy} alt="Autobuy" />
        <h1>Log in</h1>
      </div>
    </main>
  );
};

export default SignIn;
