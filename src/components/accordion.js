import { useState } from 'react'
import './accordion.css' // Import the CSS file for animations

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleItemClick = index => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <ul className='accordion flex align-center flex-col space-y-2 md:space-y-6'>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleItemClick(index)}
          index={index}
        />
      ))}
    </ul>
  )
}

const AccordionItem = ({ title, content, isOpen, onClick, index }) => {
  return (
    <li>
      <div
        className={`cursor-pointer custom-shell-bullet${
          index % 2 === 0 ? '' : '-alt'
        }`}
        onClick={onClick}
      >
      <p className='text-[2vw] md:text-2xl mb-0 md:mb-1'>{title}</p>
      </div>
      <div
        className={`text-[2vw] md:text-xl text-white opacity-75 ml-[3vw] md:ml-[3.2rem] content ${
          isOpen ? 'open' : ''
        }`}
      >
        {content}
      </div>
    </li>
  )
}

export default Accordion
