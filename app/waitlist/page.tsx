'use client';

import type React from 'react';
import { useState } from 'react';
import { Send } from 'lucide-react';
import Image from 'next/image';
import Autobuy from '@/app/assets/Autobuy.svg';
import { useToast } from '@/hooks/use-toast';
import { useWaitlist } from '../(buyer)/api/auth';

export default function AutobuyLanding() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const { waitlist, isPending } = useWaitlist();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await waitlist({ email });
      toast({
        title: 'Success',
        description: 'You have been added to the waitlist. We would be in touch, shortly',
      });
      setEmail('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white h-[40px] flex items-center sticky top-0 left-0 right-0 z-[100] px-8">
        <nav className="flex items-center">
          <Image src={Autobuy} alt="waitlist" height={50} width={100} className=" mx-auto" />
        </nav>
      </header>

      <main className="">
        <div className="w-full">
          <div className="relative mb-16 flex items-center justify-center">
            <div className="w-full h-[40rem] bg-[url('/img/waitlist.png')] bg-no-repeat bg-cover bg-center"></div>
            <div className="absolute top-8 z-10 mx-auto max-w-4xl">
              <div className="relative h-80 bg-cover bg-center flex items-center justify-center">
                <div className="relative z-10 text-center text-white px-8 -mt-12">
                  <h1 className="text-3xl text-center md:text-4xl font-bold mb-4">
                    Autobuy: The Safer, Smarter Way <br />
                    to Buy Cars in <span className="text-primary-700">Africa</span>
                  </h1>
                  <p className="text-lg opacity-90 max-w-[600px] mx-auto text-white">
                    AutoBuy is building Africa&apos;s most trusted car-buying platform featuring
                    AI-powered diagnostics, the first in Africa, with verified listings, transparent
                    pricing, and secure payments
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto z-20 -mt-[25rem] relative mb-4">
            <div className="bg-white rounded-3xl  shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-blue-100 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 relative">
                      <Image src={'/img/glass.png'} alt="waitlist" height={180} width={105} />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Our Exclusive Beta</h2>
                  <p className="text-gray-600 mb-6 text-sm">
                    We’re launching soon and we want you to be part of the first wave of users who
                    shape the future of car buying in Africa.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />

                    <button
                      type="submit"
                      className="w-full text-sm bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                    >
                      {isPending ? (
                        'Joining waitlist...'
                      ) : (
                        <span className="flex items-center">
                          Join the waitlist for priority access
                          <Send size={16} />
                        </span>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
