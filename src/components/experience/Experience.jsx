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
    </section>
  );
};

export default Experience;
