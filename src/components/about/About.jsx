import AboutImage from "../../assets/img/About.JPG";
import CV from "../../assets/resume/JayJanodia_Resume.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";
import "./About.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Hi there! I'm a Software Development Engineer with experience
            working at Amazon, where I focused on migrating from a proprietary
            language to Typescript. During my time there, I used shell scripting
            and Java based on Jest framework to develop a unit testing framework
            for customers to test their Typescript code on. I also worked on
            various projects that aimed to improve the customer experience and
            enhance product stability. <br />
            <br /> In addition to my work at Amazon, I have also worked on
            several projects in the fields of machine learning and data science.
            My most recent project involved detecting cars and trucks and
            predicting their direction of travel for the 2022 aicitychallenge.
            This project was important in understanding how we can coordinate
            traffic lights to make them more efficient. My expertise in machine
            learning centers around computer vision and natural language
            processing, and I primarily code in Python. <br />
            <br />
            When I'm not working on software engineering or machine learning
            projects, I enjoy exploring the outdoors, trying new foods, and
            spending time with family and friends.
          </p>
          <a href={CV} download className="btn primary">
            Download Resume
            <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
