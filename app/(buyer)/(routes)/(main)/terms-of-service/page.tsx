import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const TermofService = () => {
  return (
    <main className="min-h-screen">
      <div className="bg-[#EBF6FD] h-[200px] w-full flex items-center justify-center">
        <h1 className=" text-xl md:text-2xl lg:text-[42px] text-center">Terms of Service </h1>
      </div>

      <div className="max-w-5xl mx-6 xl:mx-auto my-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline font-medium text-sm ">
              Terms of Service
            </AccordionTrigger>
            <AccordionContent className="text-sm">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:no-underline font-medium text-sm">
              Scope
            </AccordionTrigger>
            <AccordionContent className="text-sm">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:no-underline font-medium text-sm">
              Personal Information Collected
            </AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="hover:no-underline font-medium text-sm">
              How We Use The Information
            </AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="hover:no-underline font-medium text-sm ">
              How We Disclose Your Information
            </AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="hover:no-underline font-medium text-sm">
              How We Privatize Your Choices And Rights
            </AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="hover:no-underline font-medium text-sm">
              How We Protect Your Personal Infromations
            </AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="hover:no-underline font-medium text-sm">
              International Data transfers
            </AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger className="hover:no-underline font-medium text-sm">
              Contact Us
            </AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
};

export default TermofService;
