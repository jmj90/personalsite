import React, { Component } from "react";
import { connect } from "react-redux";
import history from "../history";
import _ from "lodash";

class Projects extends Component {
  componentDidMount() {
    // this.transitionLoad()
    if (history.location) {
      this.transitionLoad();
      window.addEventListener("load", this.transitionLoad, false);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.transitionLoad);
  }

  transitionLoad() {
    let title = document.getElementById("title");
    let pics = Array.prototype.slice.call(
      document.getElementsByClassName("project-card-container")
    );
    let picsLength = pics.length;

    if (title.classList.contains("hidden")) {
      setTimeout(function () {
        title.className = "";
      }, 100);
    }
    for (var i = 0; i < picsLength; i++) {
      if (pics[i].classList.contains("hidden")) {
        let classes = pics[i].classList;
        setTimeout(function () {
          classes.replace("hidden", "live");
        }, 150);
      }
    }
  }

  expandAbout(evt) {
    let dropDownPanel = document.getElementsByClassName(
      "projectInformationDropdown"
    );
    let menuText = document.getElementsByClassName("panelButton");
    let image = document.getElementsByClassName("project-card");

    //selects current items dropdown panel
    let selectedDropDownPanel = Array.prototype.filter.call(
      dropDownPanel,
      function (currentPanel) {
        return currentPanel.id === evt.target.id;
      }
    );

    //selects current items menu button text
    let selectedMenu = Array.prototype.filter.call(
      menuText,
      function (currentMenu) {
        return currentMenu.id === evt.target.id;
      }
    );

    //selects current items menu button text
    let selectedImage = Array.prototype.filter.call(
      image,
      function (currentImage) {
        return currentImage.id === evt.target.id;
      }
    );

    // enable/disable functionality
    if (selectedMenu[0].innerText === "collapse ▴") {
      selectedDropDownPanel[0].classList.remove("active");
      selectedImage[0].classList.remove("disabled");
      selectedMenu[0].innerText = "find out more ▾";
    } else {
      selectedImage[0].classList.add("disabled");
      selectedDropDownPanel[0].classList.add("active");
      selectedMenu[0].innerText = "collapse ▴";
    }
  }

  getProjects() {
    let projectList = this.props.projects;
    projectList = _.sortBy(projectList, "title");

    return (
      <div className="projectsDisplay">
        <div className="productView">
          {projectList.map((project) => (
            <div key={project.id} className="project-card-container hidden">
              <div className="project-title">{project.title}</div>
              <div className="project-spread" onClick={this.expandAbout}>
                <img
                  id={project.id}
                  className="project-card"
                  src={project.imgUrl}
                />
                <div id={project.id} className="projectInformationDropdown">
                  <div className="date-link-display">
                    <div className="project-item">{project.date}</div>

                    {project.deployLink !== null ? (
                      <div className="project-item">
                        <a
                          href={project.deployLink}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {project.deployLink.slice(7)}
                        </a>
                      </div>
                    ) : (
                      ""
                    )}

                    {project.videoLink !== null ? (
                      <div className="project-item">
                        <a
                          href={project.videoLink}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Video Review
                        </a>
                      </div>
                    ) : (
                      ""
                    )}

                    {project.githubLink !== null ? (
                      <div className="project-item">
                        <a
                          href={project.githubLink}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Github
                        </a>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="textarea">
                    {project.description}
                    <div className="project-roles-list">
                      <div className="project-subtitle">Roles:</div>
                      {project.roles.map((role) => {
                        return <div className="project-role">{role}</div>;
                      })}
                    </div>
                    <div className="project-tech-list">
                      <div className="project-subtitle">Tech:</div>
                      {project.tech.map((tech) => {
                        tech = tech.trim();
                        switch (tech) {
                          case "React":
                            tech = (
                              <div className="project-sublist-item">
                                <img
                                  className="project-icons"
                                  src="/images/icons/react.png"
                                />
                                <div className="project-tech">{tech}</div>
                              </div>
                            );
                            break;
                          case "Firebase":
                            tech = (
                              <div className="project-sublist-item">
                                <img
                                  className="project-icons"
                                  src="/images/icons/firebase.png"
                                />
                                <div className="project-tech">{tech}</div>
                              </div>
                            );
                            break;
                          case "PostgreSQL":
                            tech = (
                              <div className="project-sublist-item">
                                <img
                                  className="project-icons"
                                  src="/images/icons/postgres.png"
                                />
                                <div className="project-tech">{tech}</div>
                              </div>
                            );
                            break;
                          case "Redux":
                            tech = (
                              <div className="project-sublist-item">
                                <img
                                  className="project-icons"
                                  src="/images/icons/redux.png"
                                />
                                <div className="project-tech">{tech}</div>
                              </div>
                            );
                            break;
                          case "Express":
                            tech = (
                              <div className="project-sublist-item">
                                <img
                                  className="project-icons"
                                  src="/images/icons/express.png"
                                />
                                <div className="project-tech">{tech}</div>
                              </div>
                            );
                            break;
                          case "Node":
                            tech = (
                              <div className="project-sublist-item">
                                <img
                                  className="project-icons"
                                  src="/images/icons/node.png"
                                />
                                <div className="project-tech">{tech}</div>
                              </div>
                            );
                            break;
                          default:
                            return <div className="project-tech">{tech}</div>;
                        }
                        return <div className="project-tech">{tech}</div>;
                      })}
                    </div>
                  </div>
                </div>
                <div id={project.id} className="panelButton">
                  {" "}
                  find out more ▾{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="viewport-projects">
        <div id="title" className="hidden">
          {" "}
          Projects{" "}
        </div>
        {this.getProjects()}
        <div className="Nav-Bottom">
          <div className="Nav-Item-2" onClick={() => history.push("/")}>
            {" "}
            Home{" "}
          </div>
          <div id="copy-moveable">© 2017-2019 Jake Johnson</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ projects }) => ({ projects });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
