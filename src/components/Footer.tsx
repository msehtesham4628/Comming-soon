import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="creator">
        MAINTENANCE & HOSTING BY <strong>ZENTRIXASR WEBSITES</strong>
      </div>
      <div className="copyright">
        © <span id="year">{currentYear}</span> PARK AVENUE MENS WEAR &bull; ALL RIGHTS RESERVED
      </div>
    </footer>
  );
};
