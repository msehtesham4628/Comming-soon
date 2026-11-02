import React from 'react';

interface HeaderProps {
  logoSrc?: string;
}

export const Header: React.FC<HeaderProps> = ({ logoSrc = '/Park_Avenue_Logo.png' }) => {
  return (
    <header className="topbar">
      <div className="brand-group">
        <img className="logo" src={logoSrc} alt="Park Avenue Mens Wear logo" />
        <div className="brand-name">
          PARK AVENUE<br />
          <span>MENS WEAR</span>
        </div>
      </div>
      <div className="topbar-badge">
        <span className="badge-dot" />
        Administrative Hold
      </div>
    </header>
  );
};
