import React from "react";
import MyImage from "../../images/Arya.png";

function About() {
  return (
    <div className="ContainerBlack" id="profile">
      <div className="container">
        <p className="TitleContainer">Profile</p>
        <p className="QuoteContainer">
          I’m a programmer, photographer, videographer, and graphic designer
        </p>
        <div
          style={{
            border: "1px solid white",
            marginTop: "40px",
          }}
        ></div>
        <div class="row" style={{ marginTop: "40px" }}>
          <div class="col-lg-4 aboutSection">
            <h3 id="aboutMe">About Me</h3>
            <p id="aboutDetail" style={{ marginTop: "40px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              rhoncus eu dui nec elementum. Integer malesuada erat nisl, ac
              commodo lacus accumsan quis. Integer eget enim arcu. Sed ante
              nibh, sagittis et ex sed, finibus pellentesque augue.
            </p>
          </div>
          <div class="col-lg-4 myPict">
            <img className="MyPhoto" src={MyImage} alt="MyPhoto"></img>
          </div>
          <div class="col-lg-4 aboutSection">
            <h3 id="aboutMe">Details</h3>
            <p id="detail" style={{ marginTop: "40px" }}>
              Name
            </p>
            <p id="aboutDetail">Aryaputra Athallah</p>
            <p id="detail">Age</p>
            <p id="aboutDetail">20 years</p>
            <p id="detail">Location</p>
            <p id="aboutDetail">Bogor</p>
          </div>
        </div>
        <div className="orderSection" style={{ textAlign: "center" }}></div>
      </div>
    </div>
  );
}

export default About;
