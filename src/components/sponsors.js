import React from 'react';
import { Panel } from './panel';
import { H1 } from './typography';

// Reusable SponsorLogo Component
const SponsorLogo = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-auto z-50 ${className}`}
    />
  );
};

export const Sponsors = () => {
  return (
    <Panel>
      <div className="ml-[5vw] mr-[5vw]">
        <H1>Sponsors</H1>
        <div className="flex flex-row gap-6 w-full max-w-screen-md">
          {/* Row 1 */}
          <div className="flex flex-col justify-between items-center gap-6">
            <SponsorLogo src="/images/Optiver.svg" alt="Optiver" className="flex-1" />
            <SponsorLogo src="/images/HRT.svg" alt="HRT" className="flex-1" />
            <SponsorLogo src="/images/IMC.svg" alt="IMC" className="flex-1" />
          </div>
          {/* Row 2 */}
          <div className="flex flex-col justify-between items-center gap-0">
            <SponsorLogo src="/images/DRW.svg" alt="DRW" className="flex-1" />
            <SponsorLogo src="/images/Roblox.svg" alt="Roblox" className="flex-1" />
            <SponsorLogo src="/images/Duke%20I&E.svg" alt="Duke I&E" className="flex-1" />
          </div>
          {/* Row 3 */}
          <div className="flex flex-col justify-center items-center gap-0">
            <SponsorLogo src="/images/Pinecone.svg" alt="Pinecone" className="flex-1" />
          </div>
        </div>
      </div>
    </Panel>
  );
};
