import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen">
      <div className="bg-[#EBF6FD] h-[200px] w-full flex items-center justify-center">
        <h1 className=" text-xl md:text-2xl lg:text-[42px] text-center">Privacy Policy</h1>
      </div>

      <div className="max-w-5xl mx-6 xl:mx-auto my-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline">
              Privacy Policy Statement
            </AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:no-underline">Scope</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:no-underline">
              Personal Information Collected
            </AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="hover:no-underline">
              How We Use The Information
            </AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="hover:no-underline">
              How We Disclose Your Information
            </AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="hover:no-underline">
              How We Privatize Your Choices And Rights
            </AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="hover:no-underline">
              How We Protect Your Personal Infromations
            </AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="hover:no-underline">
              International Data transfers
            </AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger className="hover:no-underline">Contact Us</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
