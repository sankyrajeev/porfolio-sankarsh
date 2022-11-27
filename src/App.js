import { useState } from "react";
import"./App.css"

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home"

function App() {

  const [currentPage, setCurrentPage] = useState('home');

  const renderCurrentPage = () => {
    switch (currentPage) {

      case 'home':
        return <Home />;
      case 'about':
        return <About />;

      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      
      default:
        return <About />;


    }

  }

  //about portfolio conatct resume
  return (
    <main class="images">
    <>
      <Header setCurrentPage={setCurrentPage}
       />
      {renderCurrentPage()}

      <Footer />
    </>
    </main>



  );
}

export default App;
