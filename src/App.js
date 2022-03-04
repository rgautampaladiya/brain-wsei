import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import IndexScreen from "./screens/IndexScreen";
import AboutProjectScreen from "./screens/AboutProjectScreen";
import ObjectivesScreen from "./screens/ObjectivesScreen";
import ManualsModulesScreen from "./screens/ManualsModulesScreen";
import PartnersScreen from "./screens/PartnersScreen";
import ContactUsScreen from "./screens/ContactUsScreen";
import EventNewsScreen from "./screens/EventNewsScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameScreen from "./screens/GameScreen";

function App() {
  return (
    <div>
      <Router>
        <div className="flex flex-col justify-center items-start">
          <Header />
          <div className="bg-slate-400 h-0.5 w-full my-5" />
          <Routes>
            <Route path="/abouttheproject" element={<AboutProjectScreen />} />
            <Route path="/objectives" element={<ObjectivesScreen />} />
            <Route path="/manualsmodules" element={<ManualsModulesScreen />} />
            <Route path="/eventsnews" element={<EventNewsScreen />} />
            <Route path="/partners" element={<PartnersScreen />} />
            <Route path="/contactus" element={<ContactUsScreen />} />
            <Route path="/game" element={<GameScreen />} />
            <Route path="/" element={<IndexScreen />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
