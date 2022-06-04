import Home from "./Components/Home";
import { Routes, Route } from 'react-router-dom';
import AboutUs from "./Components/AboutUs";
import Missions from "./Components/Missions"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ContactUs from "./Components/ContactUs";
import Download
 from "./Components/Download";
 import AirwayBill from "./Components/AirwayBill";
function App() {
  return (
    <div className="fixap">
    <header>
      <Header/>
     </header>
     <main>
       <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/missions" element={<Missions/>} exact/>
          <Route path="/aboutus" element={<AboutUs/>} exact/>
          <Route path="/contactus" element={<ContactUs/>} exact/>
          <Route path="/download" element={<Download/>} exact/>
          <Route path="/airwayBill" element={<AirwayBill/>} exact/>
       </Routes>
     </main>
     <footer>
     <Footer/>
     </footer>
     </div>
  );
}

export default App;
