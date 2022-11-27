import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function App() {

  const [currentPage, setCurrentPage] = useState('contact');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;

      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      
      default:
        return <h2>About Me</h2>


    }

  }

  //about portfolio conatct resume
  return (
    <>
      <Header setCurrentPage={setCurrentPage}
       />
      {renderCurrentPage()}

      <Footer />
    </>



  );
}

export default App;
