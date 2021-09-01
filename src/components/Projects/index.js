import React from "react";
import rekruit from "../../images/rekruit.png";
import covidify from "../../images/covidify.png";
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
            <img class="img-fluid" src={rekruit} alt="Rekruit"></img>
          </div>
          <div className="col-lg-6" style={{ marginTop: "20px" }}>
            <img class="img-fluid" src={covidify} alt="Covidify "></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
