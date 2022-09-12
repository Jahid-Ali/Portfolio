import React from "react";
import AboutScreen from "./components/AboutScreen";
import ContactScreen from "./components/ContactScreen";
import Home from "./components/HomeScreen";
import NavBar from "./components/NavBar";
import ProjectScreen from "./components/ProjectScreen";
import SkilsScreen from "./components/SkillsScreen";
import SocialSidebar from "./components/SocialSidebar";

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
    </div >
  );
}

export default App;
