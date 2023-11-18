import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigation = useNavigate();
  const navigationHandler = () => {
    navigation("/about");
  };

  const navigationDashboard = useNavigate();
  const navigationDashboardHandler = () => {
    navigationDashboard("/dashboard");
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={navigationHandler}>Goto About</button>
      <button onClick={navigationHandler}>read more</button>
      <button onClick={navigationDashboardHandler}>Dashboard</button>
    </div>
  );
};

export default Home;
