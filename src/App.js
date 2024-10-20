import './App.css'
import { Navbar } from './components/navbar'
import { Home } from './components/home'
import { About } from './components/about'
import { Tracks } from './components/tracks'
import { Schedule } from './components/schedule'
import { FAQ } from './components/faq'
import { Sponsors } from './components/sponsors'
// TODO: Add the navbar
// TODO: Add the different sections (About, Tracks, etc.)
// TODO: Add the background image for each section
// (look at how https://www.treehacks.com structures their HTML)
function App () {
  return (
    <div className='font-sans'>
      <Navbar />
      <Home />
      <div className="gradient-container">
        <About />
        <Tracks />
        <Schedule />
        <FAQ />
        <Sponsors />
      </div>
     
    </div>
  )
}

export default App
