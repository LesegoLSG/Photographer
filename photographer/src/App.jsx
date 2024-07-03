import { useContext, useState, useEffect } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
import AnimRoutes from "./Components/AnimRoutes";
import Header from "./Components/Header/Header";
import { CursorContext } from "./Context/CursorContext";
import Footer from "./Components/Footer/Footer";
import Toggle from "./Components/Toggle/Toggle";

function App() {
  const { cursorVariants, cursorBG } = useContext(CursorContext);

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="dark:bg-neutral-900">
      <Router>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <AnimRoutes />
      </Router>
      {/* toggle dark mode button */}
      {/* <Toggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} /> */}
      {/* Cursor */}
      <motion.div
        variants={cursorVariants}
        animate={cursorBG}
        className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full"
      ></motion.div>
      <Footer />
    </div>
  );
}

export default App;
