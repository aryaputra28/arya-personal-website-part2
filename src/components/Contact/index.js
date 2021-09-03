import React from "react";
import linkedin from "../../images/linkedin.png";
import instagram from "../../images/instagram.png";
import github from "../../images/Github.png";
import gitlab from "../../images/Gitlab.png";

function Contact() {
  return (
    <div className="ContainerBlack" id="contact">
      <div className="container">
        <p className="TitleContainer">Contact</p>
        <p className="QuoteContainer">
          “Contact with the customer is what business all about” -Jay Leno
        </p>
        <div
          style={{
            border: "1px solid white",
            marginTop: "40px",
          }}
        ></div>
        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-sm-6">
            <div class="d-flex justify-content-start mb-3">
              <div class="p-2">
                <img src={linkedin} alt="linkedinLogo"></img>
              </div>
              <div class="p-2" style={{ color: "white" }}>
                <p>linkedin.com/in/aryaputra-athallah-63b5a3199/</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div class="d-flex justify-content-start mb-3">
              <div class="p-2">
                <img src={instagram} alt="instagramLogo"></img>
              </div>
              <div class="p-2" style={{ color: "white" }}>
                <p>instagram.com/aryaputra213</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6" style={{ marginTop: "30px" }}>
            <div class="d-flex justify-content-start mb-3">
              <div class="p-2">
                <img src={github} alt="githubLogo"></img>
              </div>
              <div class="p-2" style={{ color: "white" }}>
                <p>github.com/aryaputra28</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6" style={{ marginTop: "30px" }}>
            <div class="d-flex justify-content-start mb-3">
              <div class="p-2">
                <img src={gitlab} alt="gitlabLogo"></img>
              </div>
              <div class="p-2" style={{ color: "white" }}>
                <p>gitlab.com/aryaputra213</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
