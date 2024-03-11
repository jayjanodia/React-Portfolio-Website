import { useEffect } from "react";
import HeaderImage from "../../assets/img/Profile_Transparent.png";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import CV from "../../assets/resume/Resume_JayJanodia.pdf";
import { HiDownload } from "react-icons/hi";
import "./Header.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Potrait" />
        </div>
        <h3 data-aos="fade-up">Jay Janodia</h3>
        {/*
        <p data-aos="fade-up">
          Data driven Software Development Engineer with career expertise in
          working on enhancement tickets to improve customer experience. Adept
          in using text analysis to determine scope of augmenting. Collaborative
          professional skilled in helping customers to migrate from a
          proprietary platform to TypeScript.
        </p>
  */}
        <p data-aos="fade-up">
          Experienced Software Development Engineer with a background in biotech and tech
          giants like Amazon, specializing in migration projects and improving product
          stability. Skilled in Python, SQL, Shell scripting, Java, and Typescript, with a
          knack for building unit testing frameworks. Passionate about machine learning and
          data science, particularly in computer vision and natural language processing,
          demonstrated through projects like vehicle detection for traffic optimization.
          Seeking opportunities to leverage expertise in innovative environments where I can
          contribute to impactful projects and continue advancing in the fields of technology
          and AI.
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn primary">
            My Work
          </a>
          <a href={CV} download className="btn primary">
            Download Resume
            <HiDownload />
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
