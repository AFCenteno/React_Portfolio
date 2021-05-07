import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function Portfolio() {
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    switch(currentPage) {
      case 'Blog':
        return <Blog/>
      case 'About':
        return <About/>
      case 'Contact':
        return <Contact/>
      case 'Home':
        return <Home/>

    }
  };

  return (
    document.title = currentPage,
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
         renderPage()
        }
      </div>
    </div>
  );
}

export default Portfolio;
