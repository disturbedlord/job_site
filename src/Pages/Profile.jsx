import React from "react";
import NavBar from "../components/NavBar";
import avatar from "../assets/uifaces.jpg";
import { Image } from "react-bootstrap";
import DummyLogo from "../assets/dummyLogo.png";
import "../CSS/commonCss.css";
import "../custom.css";
import "../CSS/profileCss.css";
import AddDataCommonComponent from "../Common/AddDataCommonComponent";
import commonStyle from "../Common/Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faEnvelope,
  faEnvelopeSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Click } from "../common";
import "../CSS/profileCss.css";
import "../CSS/commonCss.css";
import Constants from "../Common/Constants";
import { textAreaAdjust } from "../common";
import UserInputModal from "../Common/UserInputModal";
import { experienceData } from "../Common/ProfileComponents/Experience";
import { connect } from "react-redux";
import { GET_USER } from "../actions/types";
import PropTypes from "prop-types";
import { getUser } from "../actions/loggedInUserAction";

class Profile extends React.Component {
  constructor(props) {
    super();
    this.state = {
      addPSClicked: false,
      addWEClicked: false,
      profiledata: [],
      showModal: false,
    };
  }

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const { loggedInUser } = this.props;

    return (
      <div>
        <NavBar />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
          // className="whiteBG"
        >
          <div style={{ width: "25%" }}>
            <div
              style={{
                position: "fixed",
                width: "25%",
                height: "100%",
                borderRight: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              {/* Column 1 */}
              <div
                style={{
                  marginTop: "10%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    marginLeft: "10px",
                    border: "3px solid rgba(46, 204, 113 , 0.3)",
                  }}
                  src={avatar}
                  height="80px"
                  width="80px"
                  roundedCircle
                />
                <div className="boldText" style={{ marginTop: "20px" }}>
                  {loggedInUser.name}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(0,0,0,0.6)",
                    fontWeight: "bolder",
                  }}
                  id="profileCurrentJob"
                  onClick={(e) => Click(e.target.id)}
                  className="profileCurrentJobClass"
                >
                  Position
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "rgba(0,0,0,0.6)",
                    fontWeight: "bolder",
                    marginTop: "2px",
                  }}
                  id="profileCurrentLocation"
                >
                  City , Country
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    marginTop: "15px",
                    borderBottom: "1px solid rgba(0,0,0,0.1)",
                    width: "30%",
                  }}
                ></div>
              </div>

              <div style={{ marginTop: "20px" }}>
                <div
                  style={{
                    color: "rgba(0,0,0,0.6)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <FontAwesomeIcon
                    style={{
                      border: "3px solid rgba(46, 204, 113 , 0.3)",
                      width: "30px",
                      height: "30px",
                      padding: "5px",

                      borderRadius: "50px",
                    }}
                    icon={faBolt}
                    size="1x"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    margin: "1rem 2rem",
                  }}
                >
                  {/* Skills */}
                  <div style={commonStyle.skillTag}>Azure</div>
                  <div style={commonStyle.skillTag}>AWS</div>
                  <div style={commonStyle.skillTag}>C++</div>
                  <div style={commonStyle.skillTag}>C#</div>
                  <div style={commonStyle.skillTag}>Python</div>
                  <div style={commonStyle.skillTag}>Azure</div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "75%",
            }}
          >
            {/* Column 2 */}
            <div style={{ margin: "30px 30px" }}>
              {/* summary */}
              <div className="boldText">Professional Summary</div>
              {/* <AddDataCommonComponent /> */}
              {!this.state.addPSClicked ? (
                <AddDataCommonComponent
                  click={() => this.setState({ addPSClicked: true })}
                />
              ) : (
                <PlaceHolderProfessionalSummary
                  onClick={() => console.log(":ok:ok:")}
                />
              )}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "30px",
                  alignItems: "center",
                }}
              >
                <div className="boldText" style={{}}>
                  Work Experience
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: "20px",
                    height: "fit-content",
                  }}
                >
                  <div
                    style={{
                      ...commonStyle.tag,
                      color: "rgb(39, 174, 96)",
                      backgroundColor: "rgba(46, 204, 113 , 0.2)",
                      cursor: "pointer",
                    }}
                    onClick={() => this.setState({ showModal: true })}
                  >
                    Add Exp
                  </div>
                  {this.state.showModal ? (
                    <UserInputModal
                      type="addExperience"
                      closeModal={() => this.setState({ showModal: false })}
                    />
                  ) : null}
                  <div
                    style={{
                      ...commonStyle.tag,
                      color: "rgb(241, 196, 15)",
                      backgroundColor: "rgba(241, 196, 15 , 0.2)",
                      marginLeft: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Reorder
                  </div>
                </div>
              </div>
              {/* <AddDataCommonComponent /> */}
              {this.state.profiledata.length == 0 ? (
                <div
                  style={{
                    ...commonStyle.errorTag,
                  }}
                >
                  No Data
                </div>
              ) : (
                <></>
              )}

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "30px",
                  alignItems: "center",
                }}
              >
                <div className="boldText" style={{}}>
                  Education
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: "20px",
                    height: "fit-content",
                  }}
                >
                  <div
                    style={{
                      ...commonStyle.tag,
                      color: "rgb(39, 174, 96)",
                      backgroundColor: "rgba(46, 204, 113 , 0.2)",
                      cursor: "pointer",
                    }}
                  >
                    Add Edu
                  </div>
                  <div
                    style={{
                      ...commonStyle.tag,
                      color: "rgb(241, 196, 15)",
                      backgroundColor: "rgba(241, 196, 15 , 0.2)",
                      marginLeft: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Reorder
                  </div>
                </div>
              </div>
              <AddDataCommonComponent click={() => {}} />
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            fontSize: "0.8rem",
          }}
          className="btn btn-success boxShadow"
        >
          Update
        </div>
      </div>
    );
  }
}

class PlaceHolderProfessionalSummary extends React.Component {
  render() {
    return (
      <div style={{ ...Styles.content }} contentEditable="true">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
        eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
        zzril delenit augue duis dolore te feugait nulla facilisi. Epsum
        factorial non deposit quid pro quo hic escorol.
      </div>
    );
  }
}

const Styles = {
  content: {
    fontSize: "0.8rem",
    marginTop: "10px",
    fontWeight: "600",
    color: "rgba(0,0,0,0.6)",
    // marginLeft: "20px",
  },
};

Profile.propTypes = {
  loggedInUser: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loggedInUser: state.loggedInUser.loggedInUser,
});

export default connect(mapStateToProps, { getUser })(Profile);
