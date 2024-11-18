import React from 'react';
import { Panel } from './panel';
import { H1 } from './typography';

// Reusable SponsorLogo Component
const SponsorLogo = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`z-50 bg-white bg-opacity-35 p-2 rounded-md ${className}`}
    />
  );
};

export const Sponsors = () => {
  return (
    <Panel className='h-[70vw]'>
      <div className="ml-[5vw] mr-[5vw]">
        <H1>Sponsors</H1>
        <div className="flex flex-row gap-[1vw] w-full max-w-screen-md">
          <div className='flex flex-1 flex-col gap-[1vw]'> {/* Don't love doing it with flex like this */}
            <SponsorLogo src="/images/sponsors/DE_Shaw.svg" alt="DE Shaw"/>
            <SponsorLogo src="/images/sponsors/Arize.svg" alt="Arize"/>
          </div>
          <div className='flex flex-1 flex-col gap-[1vw]'>
            <SponsorLogo src="/images/sponsors/Duke%20I&E.svg" alt="Duke I&E"/>
            <SponsorLogo src="/images/sponsors/iiD.png" alt="Duke Rhodes Information Initiative"/>
            <SponsorLogo src="/images/sponsors/CoLab.png" alt="Duke Innovation CoLab"/>
          </div>
          <div className='flex flex-[0.5] flex-col gap-[1vw]'>
          <SponsorLogo src="/images/sponsors/Telora.jpeg" alt="Telora"/>
          <SponsorLogo src="/images/sponsors/Keebio.webp" alt="Keebio"/>
          </div>
        </div>
      </div>
    </Panel>
  );
};
