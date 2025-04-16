// src/pages/PrivacyPolicy.tsx

import React from 'react';
import { privacyPolicyContent } from '../constants'; // Use relative import
import { BreadcrumbWithCustomSeparator } from '../components/shared/Breadcrumb'; // Adjust according to your actual file structure

const links = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Privacy Policy',
    to: '/privacy-policy',
    active: true,
  },
];

const PrivacyPolicy: React.FC = () => {
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
          Privacy Policy
        </h1>
        <div className="mt-10 text-base text-gray-700">
          {/* Render the content here */}
          <div
            dangerouslySetInnerHTML={{
              __html: privacyPolicyContent.replace(/\n/g, '<br />'),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
