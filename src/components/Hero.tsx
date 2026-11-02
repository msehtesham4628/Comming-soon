import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="notice-pill">
        <span className="notice-dot" />
        Payment On Hold
      </div>

      <p className="eyebrow">Official Administrative Notice &bull; Zentrixasr Websites</p>

      <h1>
        Under<br />
        <em>Maintenance.</em>
      </h1>

      <div className="hold-highlight">
        Website Under Maintenance by Zentrixasr Websites &bull; Payment on Hold
      </div>

      <p className="intro">
        This website is currently under maintenance by <strong>Zentrixasr Websites</strong>. 
        Online services, domain routing, and public access have been temporarily placed on hold 
        pending payment clearance. Normal operations will resume immediately once the account 
        balance is settled.
      </p>

      <div className="notice-card">
        <div className="notice-card-header">
          <span>&#9888;</span>
          <span>Administrative Review Notice</span>
        </div>
        <p className="notice-card-body">
          Service access has been restricted by <strong>Zentrixasr Websites</strong> due to a pending 
          payment hold. To lift this restriction and reactivate the website, please contact the 
          web administration team at Zentrixasr Websites.
        </p>
      </div>

      <div className="line" />

      <p className="status status-hold">
        <span className="status-dot" />
        <span>SERVICE SUSPENDED &bull; PAYMENT HOLD ACTIVE</span>
      </p>
    </section>
  );
};
