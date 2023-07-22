import './App.css';
import NavBar from './sections/navBar/NavBar.jsx'
import ShowCase from './sections/showcase/ShowCase.jsx';
import Proj from './sections/projects/Proj.jsx';
import Exp from './sections/experience/Exp.jsx';
import About from './sections/about/About.jsx';
import Services from './sections/services/Services';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';

function App() {
  return (
    <div className="App">
      
      <ShowCase/>
      <NavBar/>
      <About/>
      <Exp />
      <Services/>
      <Proj/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
