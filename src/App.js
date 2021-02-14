import About from './components/About';
import Contacts from './components/Contacts';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Technology from './components/Technology';
import Team from './components/Team';
import Form from './Form';
import "./components/mycss.css";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    AOS.init({
      offset: 80,
      duration: 700,
      easing: 'ease-in-linear',
      delay: 0,
    });
  },[])
  return (
    <Router>
       <Navbar />
       <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/testimonials" component={Testimonials} />
        <Route exact path="/technology" component={Technology} />
        <Route exact path="/form" component={Form} />
       </Switch>
       <Footer />
      
    </Router>
  );
}

export default App;
