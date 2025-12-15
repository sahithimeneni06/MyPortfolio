import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Achievements />
      <Contact />
    </>
  );
}
