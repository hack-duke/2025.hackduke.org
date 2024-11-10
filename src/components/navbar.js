// Navbar.js
export const Navbar = () => {
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className='absolute top-0 w-screen text-2xl text-white bg-transparent p-4 z-50'>
      <ul className='flex justify-end space-x-8 pr-8'>
        <li onClick={() => scrollToSection('about')}>
          <button>About</button>
        </li>
        <li onClick={() => scrollToSection('tracks')}>
          <button>Tracks</button>
        </li>
        <li onClick={() => scrollToSection('speaker')}>
          <button>Speaker</button>
        </li>
        <li onClick={() => scrollToSection('schedule')}>
          <button>Schedule</button>
        </li>
        <li onClick={() => scrollToSection('faq')}>
          <button>FAQ</button>
        </li>
        <li onClick={() => scrollToSection('sponsors')}>
          <button>Sponsors</button>
        </li>
      </ul>
    </nav>
  )
}
