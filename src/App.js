import React from "react";
import AboutScreen from "./components/AboutScreen";
import ContactScreen from "./components/ContactScreen";
import Home from "./components/HomeScreen";
import NavBar from "./components/NavBar";
import ProjectScreen from "./components/ProjectScreen";
import SkilsScreen from "./components/SkillsScreen";
import SocialSidebar from "./components/SocialSidebar";

import Popup from "./components/Popup";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <SocialSidebar />
      <AboutScreen />
      <ProjectScreen />
      <SkilsScreen />
      <ContactScreen />

      <Popup />
    </div >
  );
}

export default App;
