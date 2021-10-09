import './App.css';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/includes/Header';
import Spotlight from './components/Spotlight';
import {Helmet} from "react-helmet";
import { useState } from 'react';
import SideMenu from './components/SideMenu';

function App() {
  const [isOpen,setIsOpen]= useState(false)
  function toggle(){
    setIsOpen(!isOpen)
    console.log(isOpen);
  }
  return(
    <>
    <Helmet>
        <title>Global Award</title>
    </Helmet>
     <Header toggle={toggle} isOpen={isOpen}/>
     <SideMenu toggle={toggle} isOpen={isOpen}/>
     <Spotlight />
     <Awards />
     <Contact />
     <Footer />
     </>
  )
  
}

export default App;
