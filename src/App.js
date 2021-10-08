import './App.css';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/includes/Header';
import Spotlight from './components/Spotlight';
import {Helmet} from "react-helmet";

function App() {
  return(
    <>
    <Helmet>
        <title>Global Award</title>
    </Helmet>
     <Header />
     <Spotlight />
     <Awards />
     <Contact />
     <Footer />
     </>
  )
  
}

export default App;
