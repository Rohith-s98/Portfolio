import './App.css';
import NavBar from './components/navBar/NavBar.jsx'
import ShowCase from './components/showcase/ShowCase.jsx';
import Proj from './components/projects/Proj.jsx';
import Exp from './components/experience/Exp.jsx';
import About from './components/about/About.jsx';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

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
