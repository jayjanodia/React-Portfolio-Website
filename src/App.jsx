import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import FloatingNav from "./components/floating-nav/FloatingNav";
import { useRef, useState, useEffect } from "react";
import Theme from "./theme/Theme";
import { useThemeContext } from "./context/theme-context";

const App = () => {
  const { themeState } = useThemeContext();
  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPosition, setSiteYPosition] = useState(0);

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  };

  useEffect(() => {
    // check if floating nav should be shown or hidden
    const floatingNavToggleHandler = () => {
      // check if we scrolled up or down at least 20px
      if (
        siteYPosition < mainRef?.current?.getBoundingClientRect().y - 20 ||
        siteYPosition > mainRef?.current?.getBoundingClientRect().y + 20
      ) {
        showFloatingNavHandler();
      } else {
        hideFloatingNavHandler();
      }
      setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
    };
    const checkYPosition = setInterval(floatingNavToggleHandler, 1000);

    // cleanup function
    return () => clearInterval(checkYPosition);
  }, [siteYPosition]);

  return (
    <main
      className={`${themeState.primary} ${themeState.background}`}
      ref={mainRef}
    >
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Experience />
      <Footer />
      <Theme />
      {showFloatingNav && <FloatingNav />}
    </main>
  );
};

export default App;
