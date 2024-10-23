
import React from "react";
 import image from "../images/background3.jpg";
const imageAltText = "purple and blue abstract background";
const description =
  "I’m an enthusiastic web development learner and an undergraduate student at RGUKT-Basar, passionate about creating modern, responsive web applications using the latest technologies."
const skillsList = [
  "UX/UI design",
  "Responsive web applications",
  "Latest web frameworks like React ",
  "Git&GitHub",
  "Production(Vercel)",
];

const detailOrQuote =
  " I love staying up to date with industry trends and continuously improving my skills by building real-world projects. ";
const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div className="glass-container"
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
