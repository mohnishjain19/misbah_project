import Home from "./Components/Home";
import { Routes, Route } from 'react-router-dom';
import AboutUs from "./Components/AboutUs";
import Missions from "./Components/Missions"
import Header from "./Components/Header";
  
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
     </>
  );
}

export default App;
