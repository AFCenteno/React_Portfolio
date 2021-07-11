import React, { useState } from 'react';
import Portfolios from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Header from './Header';
import NavTabs from './NavTabs';
import Footer from './Footer';
import AboutMe from './pages/AboutMe';
import '../Style.css';


function Portfolio() {
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    switch(currentPage) {
      case 'Resume':
        return <Resume/>
      case 'Portfolio':
        return <Portfolios/>
      case 'Contact':
        return <Contact/>
      default:
        return <AboutMe/>
    }
  };

  return (
    document.title = currentPage,
    <div id='overall' className="container">
      <header className="row">
        <Header/>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      <div id='content'>
        <div>
          {renderPage()}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Portfolio;
