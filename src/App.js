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
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <Navbar />

      <section id='home' className='relative'>
        <Home />
      </section>

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

        <div className='h-[10vw]'></div> {/* spacer */}

      </Backdrop>
    </ParallaxProvider>
  )
}

export default App