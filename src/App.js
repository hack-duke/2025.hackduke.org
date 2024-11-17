import './App.css'
import { Navbar } from './components/navbar'
import { Home } from './components/home'
import { About } from './components/about'
import { Tracks } from './components/tracks'
import { Schedule } from './components/schedule'
import { FAQ } from './components/faq'
import { Sponsors } from './components/sponsors'
import { Speaker } from './components/speaker'
import { Backdrop } from './components/backdrop'

function App() {
  return (
    <>
      <Navbar />

      <Home />

      <Backdrop>
        <section id='about'>
          <About />
        </section>

        <section id='tracks'>
          <Tracks />
        </section>

        <section id='speaker'>
          <Speaker />
        </section>

        <section id='schedule'>
          <Schedule />
        </section>

        <section id='faq'>
          <FAQ />
        </section>

        <section id='sponsors'>
          <Sponsors />
        </section>

        <div className='h-[20vw] flex justify-center'>
          <h1 className='absolute bottom-10 text-white text-[2vw] z-50'>Made With 🩷 by HACKDUKE team</h1>
        </div>
      </Backdrop>
    </>
  )
}

export default App