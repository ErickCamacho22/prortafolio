import React from "react";
import NavBar from "../components/NavBar";
import landingPage from "../assets/imgProjects/landingPage.png";
import Portafolio from "../assets/imgProjects/Portafolio.png";
import PracticandoJS from "../assets/imgProjects/PracticandoJS.png";
import appTaskTS from "../assets/imgProjects/appTaskTS.png";
import TaskApp from "../assets/imgProjects/react-task-app.png";
import JavaScripAPI from "../assets/imgProjects/JavaScripAPI.png"
import "../styles/projects.css";
import { NavLink } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1>Projects </h1>
        <div className="cards1">
          <figure className="card1">
            <img src={Portafolio} alt="Project Img" />
            <div className="description1">
              <h3>Portafolio</h3>
              <p>Portafolio se realizo con ReactJS, CSS y Bootstrap.</p>
              <a className="project" href="" target={"_blank"}>
                GitHub
              </a>
            </div>
          </figure>

          <figure className="card1">
            <img src={landingPage} alt="Project Img" />
            <div className="description1">
              <h3>Landing Page</h3>
              <p>
                Landing page de Coca Cola se realizo con HTML, CSS y JavaScript
              </p>
              <a
                className="project"
                href="https://github.com/ErickCamacho22/Landing-Page"
                target={"_blank"}
              >
                GitHub
              </a>
            </div>
          </figure>

          <figure className="card1">
            <img src={PracticandoJS} alt="Project Img" />
            <div className="description1">
              <h3>Practicando JS</h3>
              <p>
                Practicando JavaScript se realizo con HTML, CSS y JavaScript{" "}
              </p>
              <a
                className="project"
                href="https://github.com/ErickCamacho22/practicando-JS"
                target={"_blank"}
              >
                GitHub
              </a>
            </div>
          </figure>

          <figure className="card1">
            <img src={appTaskTS} alt="Project Img" />
            <div className="description1">
              <h3>App Task TypeScript</h3>
              <p>
                App de tareas pendientes se realizo con React, Bootstrap y
                TypeScript
              </p>
              <a
                className="project"
                href="https://github.com/ErickCamacho22/appTaskTS"
                target={"_blank"}
              >
                GitHub
              </a>
            </div>
          </figure>

          <figure className="card1">
            <img src={TaskApp} alt="Project Img" />
            <div className="description1">
              <h3>React Task App</h3>
              <p>App de tareas pendientes se realizo con React, Bootstrap</p>
              <a
                className="project"
                href="https://github.com/ErickCamacho22/react-task-app"
                target={"_blank"}
              >
                GitHub
              </a>
            </div>
          </figure>

          <figure className="card1">
            <img src={JavaScripAPI} alt="Project Img" />
            <div className="description1">
              <h3>JavaScrip API</h3>
              <p>Proyecto de JavaScript usando API de GitHub</p>
              <a
                className="project"
                href="https://github.com/ErickCamacho22/JavaScripAPI"
                target={"_blank"}
              >
                GitHub
              </a>
            </div>
          </figure>
        </div>
      </div>
    </>
  );
}
