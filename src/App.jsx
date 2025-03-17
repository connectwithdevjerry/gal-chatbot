import { Route, Router, Routes, useLocation } from "react-router";
import { Navbar } from "./components";
import { Chat } from "./pages";
import React, { useEffect } from "react";
import { CHAT, HOME } from "./paths";
import "./styles.css";
import { trackPageView } from "./analytics";

function analyticsTracker() {
  const location = useLocation();
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);
}

function App() {
  analyticsTracker();
  return (
    <Routes>
      {/* <Route path="/me" element={<DoubleBtn />} /> */}
      <Route index path={HOME} element={<Chat />} />
    </Routes>
  );
}

export default App;
