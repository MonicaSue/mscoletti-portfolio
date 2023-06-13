// modules

// components
import ProfileCard from './components/ProfileCard/ProfileCard';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

// sections
import Home from './sections/Home';
import About from './sections/About';
import Experiences from './sections/Experiences';
import Projects from './sections/Projects';


// css
import './App.css';

function App() {
  return (
    <>
      <div className='profileSideBar'>
        <ProfileCard />
      </div>
      <Nav/>
      <div id='main'>
        <Home />
        <Projects />
        <About />
        <Experiences />
        <Footer />
      </div>
    </>  
  );
}

export default App;
