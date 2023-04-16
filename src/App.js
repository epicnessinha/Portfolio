import React from 'react';
import './App.css';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import ContactCards from './components/ContactCards/ContactCards';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Projects />

      <ContactCards />
      <Footer />
    </div>
  );
}

export default App;
