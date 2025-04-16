// src/components/shared/Breadcrumb.tsx

import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router DOM

interface LinkItem {
  label: string;
  to: string;
  active?: boolean;
}

interface BreadcrumbProps {
  links: LinkItem[];
}

export const BreadcrumbWithCustomSeparator: React.FC<BreadcrumbProps> = ({ links }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-2">
        {links.map((link, index) => (
          <li key={index} className={`flex items-center ${link.active ? 'text-black' : 'text-gray'}`}>
            <Link to={link.to} className={`hover:underline ${link.active ? 'font-semibold' : ''}`}>
              {link.label}
            </Link>
            {index < links.length - 1 && <span className="mx-2">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};
