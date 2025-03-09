'use client';
import React, { useState } from 'react';
import Faqs from './Faqs';
import ContactForm from './ContactUs';

interface renderComponentTypes {
  [key: string]: Steps;
}
type Steps = {
  name: string;
  component: JSX.Element;
};
const Support = () => {
  const [step, setStep] = useState('faq');

  const renderComponent: renderComponentTypes = {
    faq: {
      name: 'faq',
      component: <Faqs setStep={setStep} />,
    },
    contactus: {
      name: 'contactus',
      component: <ContactForm />,
    },
  };

  return <>{renderComponent[step].component}</>;
};

export default Support;
