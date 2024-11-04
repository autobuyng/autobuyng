'use client';
import React, { useState } from 'react';
import Account from './_component/Account';
import Security from './_component/Security';
import { cn } from '@/lib/utils';

type TabTypes = {
  id: string;
  text: string;
  component: React.JSX.Element;
};
const Settings = () => {
  const [activeTab, setActiveTab] = useState('1');

  const TABS: TabTypes[] = [
    { id: '1', text: 'Account', component: <Account /> },
    { id: '2', text: 'Security', component: <Security /> },
  ];

  return (
    <main className="mx-8">
      <h1 className="font-bold md:text-2xl">Settings</h1>

      <div className="flex  mt-4  border-b border-neutral-300 gap-4">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              onClick={() => setActiveTab(tab.id)}
              key={tab.id}
              className={cn(' px-2 z-10', { 'border-b-2  border-red-400': isActive })}
            >
              {tab.text}
            </button>
          );
        })}
      </div>

      <div>
        {TABS.map((tab) => {
          if (activeTab === tab.id) {
            return <div key={tab.id}>{tab.component}</div>;
          }
          return null;
        })}
      </div>
    </main>
  );
};

export default Settings;
