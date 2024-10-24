
import React from "react";
import image from "../../public/images/img1.jpeg";
import { title } from "process";
const imageAltText = "desktop with books and laptop";
const projectList = [
  {
    title: " basic Paytm project",
    description:
      "Implimented basic paytm application using react and node.js javascript, implimented user authentication using jwt tokens used mongodb for the database and implimented transactions to rollback if the payment failed ",
    url: "https://github.com/Anushabore60/paytmproject",
  },
  {
    title: "Weather application using API ",
    description:
      "developed a responsive weather application using React, Tailwindd css, API keys  and deployed this on Vercel ",
    url: "https://weather-app-seven-puce.vercel.app/",
  },
  {
    title: "Figma designs ",
    description:
      "Created Responsive designs using Figma  1.food devlivering application design 2.E-commerce design.",
    url: "",
  },

];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
