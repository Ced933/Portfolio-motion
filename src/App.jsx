import Test from './Test';
import './app.scss';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Parallax from './components/Parallax/Parallax';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import SideBar from './components/SideBar/SideBar';
import Contact from './components/Contact/Contact';

const App = () => {
  return <div>
    <section id='Homepage'>
      <Navbar/>
      <Hero/>
    </section>

    <SideBar/>

    <section id='Services'><Parallax type="services" /></section>
    <section><Services/></section>
    <section id='Portfolio'><Parallax type="portfolio" /></section>
    <Portfolio/>

    <section id='Contact'><Contact/></section>
  </div>;
};

export default App;
