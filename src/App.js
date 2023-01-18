import {Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Logo from "./components/Logo/Logo";
import Services from "./components/Services/Services";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <container className="Header">
      <content className="Header__AppHeader">
        <div className="Header__AppHeader__AppLogo">
          <Logo />
        </div>
        <div className="Header__AppHeader__AppNav">
          <Navbar />
        </div>
      </content>
      <div className="AppRoute">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Profil/:id" element={<Profile />} />
        </Routes>
      </div>
    </container>
  );
}

export default App;