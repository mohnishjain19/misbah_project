import Home from "./Components/Home";
import { Routes, Route } from 'react-router-dom';
import AboutUs from "./Components/AboutUs";
import Missions from "./Components/Missions"
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <header>
      <Header/>
     </header>
     <main>
       <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/missions" element={<Missions/>} exact/>
          <Route path="/aboutus" element={<AboutUs/>} exact/>
       </Routes>
     </main>
     <footer>
     <Footer/>
     </footer>
     </>
  );
}

export default App;
