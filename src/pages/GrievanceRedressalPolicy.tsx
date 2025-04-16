// src/pages/GrievanceRedressalPolicy.tsx

import React from 'react';
import { grievanceRedressalPolicyContent } from '../constants'; // Import the grievance redressal policy content
import { BreadcrumbWithCustomSeparator } from '../components/shared/Breadcrumb'; // Adjust according to your actual file structure

const links = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Grievance Redressal Policy',
    to: '/grievance',
    active: true,
  },
];

const GrievanceRedressalPolicy: React.FC = () => {
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
          Grievance Redressal Policy
        </h1>
        <div className="mt-10 text-base text-gray-700">
          {/* Render the content here */}
          <div
            dangerouslySetInnerHTML={{
              __html: grievanceRedressalPolicyContent.replace(/\n/g, '<br />'),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GrievanceRedressalPolicy;
