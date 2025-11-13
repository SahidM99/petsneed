'use client';

import React, { useState } from 'react';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export default function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Tab Bar */}
      <div className="border-b border-gray-200 mb-12">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 font-poppins font-semibold whitespace-nowrap transition-all ${
                activeTab === index
                  ? 'text-primary border-b-4 border-primary'
                  : 'text-text-medium hover:text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="animate-fadeIn">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}
