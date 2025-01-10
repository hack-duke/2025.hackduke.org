import React from 'react';
import { Panel } from './panel';
import { H1 } from './typography';

// Reusable SponsorLogo Component
const SponsorLogo = ({ src, alt, className, url }) => {
  return (
    <a href={url} className='z-50' target="_blank" rel="noopener noreferrer">
      <img
        src={src}
        alt={alt}
        className={`bg-white bg-opacity-35 p-2 rounded-md ${className} w-full transform transition duration-200 hover:scale-105`}
      />
    </a>
  );
};

export const Sponsors = () => {
  return (
    <Panel className='h-[70vw]'>
      <div className="ml-[5vw] mr-[5vw]">
        <H1>Sponsors</H1>
        <div class="delay-[300ms] duration-[600ms] taos:translate-y-[100%] taos:opacity-0" data-taos-offset="300">
          <div className="flex flex-row gap-[1vw] w-full">
            <div className='flex flex-1 flex-col gap-[1vw]'> {/* Don't love doing it with flex like this */}
              <SponsorLogo src="/images/sponsors/DE_Shaw.svg" url="https://www.deshaw.com/" alt="DE Shaw" className='focus-visible:animate-bounce'/>
              <SponsorLogo src="/images/sponsors/Arize.svg" url="https://arize.com/" alt="Arize"/>
              <SponsorLogo src="/images/sponsors/Accenture.svg" url="https://www.accenture.com/" alt="Accenture"/>
              <SponsorLogo src="/images/sponsors/Perplexity.png" url="https://www.perplexity.ai/" alt="Perplexity"/>
            </div>
            <div className='flex flex-1 flex-col gap-[1vw]'>
              <SponsorLogo src="/images/sponsors/Duke%20I&E.svg" url="https://entrepreneurship.duke.edu/" alt="Duke I&E"/>
              <SponsorLogo src="/images/sponsors/iiD.png" url="https://bigdata.duke.edu/" alt="Duke Rhodes Information Initiative"/>
              <SponsorLogo src="/images/sponsors/CoLab.png" url="https://colab.duke.edu/" alt="Duke Innovation CoLab"/>
              <SponsorLogo src="/images/sponsors/Pratt.png" url="https://pratt.duke.edu/" alt="Pratt"/>
              <SponsorLogo src="/images/sponsors/RedBull.svg" url="https://www.redbull.com/" alt="RedBull"/>
            </div>
            <div className='flex flex-1 flex-col gap-[1vw]'> {/* Don't love doing it with flex like this */}
            <SponsorLogo src="/images/sponsors/Warp.svg" url="https://www.warp.dev/" alt="Warp"/>
              <SponsorLogo src="/images/sponsors/Monster.webp" url="https://www.monsterenergy.com/" alt="Monster"/>
              <SponsorLogo src="/images/sponsors/CardsAgainstHumanity.svg" url="https://www.cardsagainsthumanity.com/" alt="CardsAgainstHumanity"/>
              {/*<SponsorLogo src="/images/sponsors/StandoutStickers.svg" url="http://hackp.ac/mlh-StandOutStickers-hackathons" alt="StandoutStickers"/>*/}
            </div>
            <div className='flex flex-[0.5] flex-col gap-[1vw]'>
              <SponsorLogo src="/images/sponsors/Telora.jpeg" url="https://telora.com/" alt="Telora"/>
              <SponsorLogo src="/images/sponsors/Keebio.webp" url="https://keeb.io/" alt="Keebio"/>
            </div>
            <div className='flex flex-[0.5]'/>
          </div>
        </div>
        
      </div>
    </Panel>
  );
};
