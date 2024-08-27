import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-[40px] px-[40px] pb-[60px] text-center">
      <div>
        <Link to={'/'} className="text-color-white-20 no-underline hover:underline">
          GitHub Repository
        </Link>
      </div>
      <div>
        <Link to={'/'} className="text-color-white-20 no-underline hover:underline">
          {new Date().getFullYear()} jmpark24
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
