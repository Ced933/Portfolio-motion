import Test from './Test';
import './app.scss';
import Navbar from './components/Navbar/Navbar';
import SideBar from './components/SideBar/SideBar';

const App = () => {
  return <div>
    <section id='Homepage'>
      <Navbar/>
    </section>
    <SideBar/>
    <section id='Services'>Parallax</section>
    <section>Service</section>
    <section id='Portfolio'>Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio1</section>
    <section>Portfolio1</section>
    <section id='Contact'>Contact</section>
  </div>;
};

export default App;