import React from "react";
import rekruit from "../../images/rekruit.png";
import covidify from "../../images/covidify.png";
import aryaprofile from "../../images/arya-profile.jpg";

function Projects() {
  return (
    <div className="ContainerWhite" id="projects">
      <div className="container">
        <p className="TitleContainer">Projects</p>
        <p className="QuoteContainerWhite">
          “Every project is an opportunity to learn, to figure out problems and
          challenges, to invent and reinvent.” -David Rockwell
        </p>
        <div
          style={{
            border: "1px solid black",
            marginTop: "40px",
          }}
        ></div>
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-lg-6 " style={{ marginTop: "20px" }}>
            <a
              href="http://rekruit-b15.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="projectImage img-fluid"
                src={rekruit}
                alt="Rekruit"
              ></img>
            </a>
          </div>
          <div className="col-lg-6" style={{ marginTop: "20px" }}>
            <a
              href="http://covidify.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="projectImage img-fluid"
                src={covidify}
                alt="Covidify "
              ></img>
            </a>
          </div>
          <div className="col-lg-6" style={{ marginTop: "20px" }}>
            <a
              href="https://arya-profile.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="projectImage img-fluid"
                src={aryaprofile}
                alt="Covidify "
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
