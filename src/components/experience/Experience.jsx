import data from "./data";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="Experience">
      <h2>Experience</h2>
      <p>Find my professional experience and Education below.</p>
      <div className="container services__container" data-aos="fade-up">
        {data.map((item) => (
          <div className="service">
            <h4>{item.title}</h4>
            <em>{item.location}</em>
            <ul class="skills-list">
              {item.desc.map((bullet) => (
                <li>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <br />
      <h2>Skill</h2>
      <p>
        Find my Skill Levels for various technologies below on a scale from 1-10
      </p>
      <div className="skill" data-aos="fade-up">
        <li>
          <h3>Python</h3>
          <span className="bar">
            <span className="python"></span>
          </span>
        </li>
        <li>
          <h3>MySQL</h3>
          <span className="bar">
            <span className="mysql"></span>
          </span>
        </li>
        <li>
          <h3>Java</h3>
          <span className="bar">
            <span className="java"></span>
          </span>
        </li>
        <li>
          <h3>Shell Scripting</h3>
          <span className="bar">
            <span className="shell"></span>
          </span>
        </li>
        <li>
          <h3>HTML</h3>
          <span className="bar">
            <span className="html"></span>
          </span>
        </li>
        <li>
          <h3>CSS</h3>
          <span className="bar">
            <span className="css"></span>
          </span>
        </li>
        <li>
          <h3>JavaScript</h3>
          <span className="bar">
            <span className="javascript"></span>
          </span>
        </li>
      </div>
    </section>
  );
};

export default Experience;
