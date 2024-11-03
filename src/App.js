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
function App () {
  return (
    <div className="font-sans">
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <div className="gradient-container">
        <section id="about">
          <About />
        </section>

        <section id="tracks">
          <Tracks />
        </section>

        <section id="speaker">
          <Speaker />
        </section>

        <section id="schedule">
          <Schedule />
        </section>

        <section id="faq">
          <FAQ />
        </section>

        <section id="sponsors">
          <Sponsors />
        </section>

        <section id='footer'>
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;

