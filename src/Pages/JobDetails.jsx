import React from "react";
import "../custom.css";
import "../CSS/dashboardCss.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form, Spinner } from "react-bootstrap";
import NavBar from "../components/NavBar";
import commonStyles from "../Common/Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faUsers,
  faFile,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
export default class JobDetails extends React.Component {
  constructor(props) {
    super();
    this.state = {
      resumeFileName: "No File Selected",
    };
  }

  componentDidMount(props) {
    //fetch the details from DB
  }

  fileDrop = (e) => {
    this.setState({ resumeFileName: e.target.files[0].name });
  };

  render() {
    return (
      <div>
        <NavBar />
        <div>
          {/* Company Banner */}
          <div
            style={{
              height: "150px",

              width: "100%",
            }}
          >
            <img
              width="100%"
              height="150px"
              style={{ objectFit: "cover" }}
              src="https://mars.nasa.gov/imgs/mars2020/launch/liftoff-launch.jpg"
            />
          </div>
          <div
            style={{
              paddingLeft: "80px",
              paddingRight: "80px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div style={{ width: "50%" }}>
              {/* content */}
              <div
                style={{
                  position: "relative",
                }}
              >
                <div
                  style={{
                    borderRadius: "10px",
                    position: "relative",
                    height: "60px",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0)",
                    display: "table",
                  }}
                >
                  <img
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "red",
                      position: "absolute",
                      top: "-50px",
                    }}
                    width="100px"
                    height="100px"
                    src="https://media-exp1.licdn.com/dms/image/C560BAQEbqLQ-JE0vdQ/company-logo_200_200/0/1546981484841?e=1632355200&v=beta&t=mtOEmxMeE_-XZJ0tM2LZtu4Wh07L0_EdsyZQpAv2e3E"
                  />
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <div className="boldText" style={{ fontSize: "2rem" }}>
                  {/* job name */}
                  Frontend Engineer
                </div>
                <div className="boldText" style={{ fontSize: "1rem" }}>
                  SpaceX
                </div>
              </div>
              <div
                style={{
                  marginTop: "0.8rem",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    ...commonStyles.tag,
                    backgroundColor: "rgba(132,132,130 , 0.15)",
                    color: "rgba(44,53,57 , 0.7)",
                    fontSize: "0.7rem",
                  }}
                >
                  <FontAwesomeIcon
                    style={{ marginLeft: "2px", marginRight: "5px" }}
                    icon={faBuilding}
                    size="1x"
                  />
                  Aerospace Manufacturer
                </div>
                <div
                  style={{
                    ...commonStyles.tag,
                    backgroundColor: "rgba(132,132,130 , 0.15)",
                    color: "rgba(44,53,57 , 0.7)",
                    fontSize: "0.7rem",
                    marginLeft: "15px",
                  }}
                >
                  <FontAwesomeIcon
                    style={{ marginLeft: "2px", marginRight: "5px" }}
                    icon={faUsers}
                    size="1x"
                  />
                  5000 - 10000 People
                </div>
              </div>
              <div style={{ marginTop: "40px", marginBottom: "40px" }}>
                <div className="boldText" style={{ fontSize: "1.5rem" }}>
                  Working at SpaceX
                </div>
                <div
                  style={{ fontSize: "0.8rem", marginTop: "10px" }}
                  contenteditable="true"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
                <div
                  className="boldText"
                  style={{ fontSize: "1rem", marginTop: "30px" }}
                >
                  Minimum Qualification
                </div>
                <div style={{ fontSize: "0.8rem", marginTop: "10px" }}>
                  - Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  <br />
                  - Aliquam tincidunt mauris eu risus. Vestibulum auctor dapibus
                  <br />- Nunc dignissim risus id metus.
                </div>
                <div
                  className="boldText"
                  style={{ fontSize: "1rem", marginTop: "30px" }}
                >
                  Preferred Qualification
                </div>
                <div style={{ fontSize: "0.8rem", marginTop: "10px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div style={{ fontSize: "0.8rem", marginTop: "10px" }}>
                  - Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  <br />
                  - Aliquam tincidunt mauris eu risus. Vestibulum auctor dapibus
                  <br />- Nunc dignissim risus id metus.
                </div>
              </div>
            </div>
            <div
              style={{
                width: "50%",
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "60px",
                  width: "70%",
                  backgroundColor: "white",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                  padding: "10px 20px",
                  borderRadius: "10px",
                }}
              >
                <div style={{ fontSize: "1rem" }} className="boldText">
                  Upload Resume
                </div>
                <div style={{ fontSize: "0.75rem", margin: "10px 0" }}>
                  <FontAwesomeIcon
                    style={{ marginLeft: "2px", marginRight: "5px" }}
                    icon={faFileAlt}
                    size="1x"
                  />
                  {this.state.resumeFileName}
                </div>
                <div>
                  <form style={{ width: "100%" }}>
                    <input
                      type="file"
                      id="actual-btn"
                      style={{ display: "none" }}
                      onChange={this.fileDrop}
                    />
                    <label
                      style={{
                        marginTop: "0.4rem",
                        width: "100%",
                        fontSize: "0.8rem",
                      }}
                      htmlFor="actual-btn"
                      className="btn btn-primary boldText"
                    >
                      Upload Resume
                    </label>
                  </form>
                  <form style={{ width: "100%" }}>
                    <input style={{ display: "none" }} />
                    <label
                      style={{
                        marginTop: "0.4rem",
                        width: "100%",
                        fontSize: "0.8rem",
                      }}
                      className="btn btn-success boldText"
                    >
                      Apply
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
