import React, { useState } from 'react';
import { Logo } from './logo';
import { FiMenu, FiX } from 'react-icons/fi';

const ApplyButton = ({ isMobile }) => {
  return (
    <a href='https://portal.hackduke.org/'>
      <button className={`text-white ${isMobile ? ('flex') : ('text-2xl bg-gradient-to-b from-[#A414B5] to-[#540A5D] pl-8 pr-8 pt-1 pb-1 rounded-xl transform transition duration-200 hover:scale-105')}`}>
        Apply
      </button>
    </a>
    
  )
}

const NavLink = ({sectionId, title}) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button className="text-white flex" onClick={() => scrollToSection(sectionId)}>{title}</button>
  )
}

const NavLinks = ({isMobile}) => {
  const links = [
    { sectionId: 'about', title: 'About' },
    { sectionId: 'tracks', title: 'Tracks' },
    { sectionId: 'schedule', title: 'Schedule' },
    { sectionId: 'faq', title: 'FAQ' },
    { sectionId: 'sponsors', title: 'Sponsors' },
  ];

  return (
    <>
      {
        isMobile ? (
          <div className='flex flex-col text-lg text-start bg-black rounded-md p-4'>
            {links.map((link) => {
              return <NavLink key={link.sectionId} sectionId={link.sectionId} title={link.title}/>
            })}
            {/* <ApplyButton isMobile/> */}
          </div>
        ) : (
          <div className='flex text-2xl gap-8'>
            {links.map((link) => {
              return <NavLink key={link.sectionId} sectionId={link.sectionId} title={link.title}/>
            })}
            {/* <ApplyButton/> */}
          </div>
        )
      }
    </>
  )
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='absolute top-0 z-50 mx-auto flex w-full justify-between p-8'>
      <Logo/>
      <div className='hidden md:flex'>
        <NavLinks/>
      </div>
      <div className='md:hidden'>
          {isOpen ? (
            <div className='flex-col'>
              <div className='flex justify-end mb-2'>
                <FiX className='h-10 w-10 text-white cursor-pointer' onClick={() => (setIsOpen(false))}/>
              </div>
              <NavLinks isMobile/>
            </div>
          ) : (
            <FiMenu className='h-10 w-10 text-white cursor-pointer' onClick={() => (setIsOpen(true))}/>
          )}
        </div>
    </nav>
  );
};
