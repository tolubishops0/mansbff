import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./Components/HomePage";
import LeaderBoard from "./Components/LeaderBoard";
import DashBoard from "./Components/DashBoard";
import PageNotFound from "./Components/PageNotFound";
import "./App.css";
import "./index.css";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const handleTheme = () => setDarkTheme(!darkTheme);

  return (
    <div className="container">
      <div className={darkTheme ? "darkTheme" : "lightTheme"}>
        <div className="theme-icon">
          <Link to="#" onClick={handleTheme}>
            <ion-icon
              style={{ fontSize: "20px" }}
              name="sunny-outline"
            ></ion-icon>
          </Link>
        </div>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
