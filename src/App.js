import './App.css'
import { TheNavbar } from './components/navbar'
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
      <TheNavbar />

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

        <div className='h-[20vw]'></div> {/* spacer frame */}

      </Backdrop>
    </ParallaxProvider>
  )
}

export default App