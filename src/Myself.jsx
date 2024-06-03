import React from "react";
import "./index.css";
import "./myself.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaFile } from "react-icons/fa";

import diego from "/src/assets/diego_photo.png";
function Myself() {
  return (
    <div className="my-self">
      <div className="container-three-div">
        <div class="left-div">
          <div className="my-namei">
            <h1>I'm</h1>
            <h2 className="my-namei-text"> Diego Iván Perea Montealegre</h2>
            <p className="my-date">Date of birth: 20.03.2001</p>
          </div>
        </div>
        <div class="middle-div">
          <div className="my-elipsed"></div>
          <img src={diego} alt="photo" className="my-photod" />
        </div>
        <div class="right-div">
          <div className="my-descriptioni">
            <p>
              Curious Mechatronic engineer with specialization in artificial
              intelligence who loves to learn, adapts and grows in his
              knowledge, effective leader who knows how to identify when it is
              time to lead. Prioritizes growth over stability. Innovative
              thinking. Able to work in a team and self-manage.
            </p>
          </div>
          <div className="my-lenguaguei">
            <h3>Languagues</h3>
            <div class="language-container">
              <div class="language-item">
                <h4>Spanish</h4>
                <p>Native Level</p>
              </div>
              <div class="language-item">
                <h4>English</h4>
                <p>
                  Advanced Level{" "}
                  <a href="https://www.efset.org/cert/FpmPXy">B2</a>
                </p>
              </div>
              <div class="language-item">
                <h4>Korean </h4>
                <p>Very Basic Level</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-links">
        <a
          className="my-link"
          href="https://www.linkedin.com/in/diego-perea-montealegre"
        >
          <p>
            <FaLinkedin />
            Linkedin
          </p>
        </a>
        <a className="my-link" href="https://github.com/diegoperea20">
          <p>
            <FaGithub /> Github
          </p>
        </a>

        <a
          className="my-link"
          href="https://drive.google.com/file/d/1J6e7eKrLRgOsgBUel-GBYdtMynpj9-Kf/view?usp=sharing"
        >
          <p>
            <FaFile />
            CV
          </p>
        </a>
        <a className="my-link" href="mailto:diego.perea@uao.edu.co">
          <p>
            <FaEnvelope /> Email
          </p>
        </a>
      </div>
    </div>
  );
}

export default Myself;
