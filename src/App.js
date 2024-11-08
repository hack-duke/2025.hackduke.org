import './App.css'
import { Navbar } from './components/navbar'
import { Home } from './components/home'
import { About } from './components/about'
import { Tracks } from './components/tracks'
import { Schedule } from './components/schedule'
import { FAQ } from './components/faq'
import { Sponsors } from './components/sponsors'
import { Footer } from './components/footer'
import { Speaker } from './components/speaker'
import { Backdrop } from './components/backdrop'
import { ParallaxProvider } from 'react-scroll-parallax';


// TODO: Add the navbar
// TODO: Add the different sections (About, Tracks, etc.)
// TODO: Add the background image for each section
// (look at how https://www.treehacks.com structures their HTML)
function App () {
  return (
    <ParallaxProvider>
      <Navbar />

      <section id='home' className='relative'>
        <Home />
      </section>

      <Backdrop/>

      <div className='gradient-container'>
        <section id='about'>
          <About />
        </section>

        <section id='tracks'>
          <Tracks />
        </section>

        <section id='schedule'>
          <Schedule />
        </section>

        <section id='speaker'>
          <Speaker />
        </section>

        <section id='faq'>
          <FAQ />
        </section>

        <section id='sponsors'>
          <Sponsors />
        </section>

        <section id='footer'>
          <Footer />
        </section>
      </div>
    </ParallaxProvider>
  )
}

export default App