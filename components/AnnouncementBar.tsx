'use client';

import React from 'react';

const marqueeItems = [
  'Acne Specialist',
  'Hair Fall Treatments',
  'Chemical Peels',
  'PRP Therapy',
  'Pigmentation Solutions',
  'Personalized Skin Care',
  'Book Your Consultation Today',
];

export default function AnnouncementBar() {
  return (
    <div
      className="announcement-bar"
      role="region"
      aria-label="Clinic Announcements"
    >
      <div className="marquee-track">
        {/* First Content Block */}
        <div className="marquee-content">
          {marqueeItems.map((item, index) => (
            <React.Fragment key={`first-${index}`}>
              <span className="marquee-item">{item}</span>
              <span className="marquee-bullet" aria-hidden="true">•</span>
            </React.Fragment>
          ))}
        </div>

        {/* Second Identical Content Block for Seamless Infinite Loop */}
        <div className="marquee-content" aria-hidden="true">
          {marqueeItems.map((item, index) => (
            <React.Fragment key={`second-${index}`}>
              <span className="marquee-item">{item}</span>
              <span className="marquee-bullet" aria-hidden="true">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
