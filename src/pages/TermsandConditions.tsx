// src/pages/TermsandConditions.tsx

import React from 'react';
import { termsAndConditionsContent } from '../constants'; // Make sure this is defined in your constants file
import { BreadcrumbWithCustomSeparator } from '../components/shared/Breadcrumb';

const links = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Terms & Conditions',
    to: '/terms',
    active: true,
  },
];

const TermsandConditions: React.FC = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto p-3 my-5">
        <BreadcrumbWithCustomSeparator links={links} />
      </div>
      <div className="w-[90%] mx-auto my-16">
        <h1
          className="text-center text-black text-4xl font-semibold underline"
          style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: '48.666px',
            lineHeight: '59.48px',
            letterSpacing: '-0.973px',
          }}
        >
          Terms & Conditions
        </h1>
        <div className="mt-10 text-base text-gray-700">
          <div
            dangerouslySetInnerHTML={{
              __html: termsAndConditionsContent.replace(/\n/g, '<br />'),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TermsandConditions;

