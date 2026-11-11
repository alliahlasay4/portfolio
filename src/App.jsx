import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </MotionConfig>
  );
}

export default App;