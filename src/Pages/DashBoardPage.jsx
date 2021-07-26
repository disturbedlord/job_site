import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import avatar from "../assets/uifaces.jpg";
import search from "../assets/search.png";
import location from "../assets/location.png";
import jobData from "../JobData";
import briefCase from "../assets/briefcase.png";
import clock from "../assets/clock.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "../CSS/dashboardCss.css";
import { connect } from "react-redux";
import { getUser } from "../actions/loggedInUserAction";
import {
  Image,
  Row,
  Col,
  Card,
  Form,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
import "../CSS/dashboardCss.css";
// import "../custom.css";
import ShowLoadingPage from "./ShowLoadingPage";
import Slider from "@material-ui/core/Slider";
// import materialuiSlider from "../components/materialuiSlider";
import { makeStyles } from "@material-ui/core";
import FiltersLeftSection from "./DashboardComponents/filtersLeftSection";
import JobsSection from "./DashboardComponents/JobsSection";
import FiltersRightSection from "./DashboardComponents/filtersRightSection";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import Http from "../Common/HttpCalls";
import Constants from "../Common/Constants";

class DashBoardPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      authorized: false,
      serverCallFinished: false,
      authToken: "",
      jobSelected: false,
      selectedJobData: "",
      userData: null,
    };
  }

  componentDidMount(props) {
    this.props.getUser();
    const authToken = this.props.loggedInUser.authToken;
    console.log(authToken);
    if (authToken !== undefined || authToken !== "") {
      Http.GET(Constants.URLS.Dashboard, { "auth-token": authToken })
        .then((res) => {
          const data = res.data;
          if (data !== undefined && data.status === 1) {
            this.setState({ authorized: true, serverCallFinished: true });
          } else {
            this.setState({ authorized: false, serverCallFinished: true });
          }
        })
        .catch((err) => console.log(err));
    } else {
      this.setState({ authorized: false, serverCallFinished: true });
    }
  }

  setData = (jobData) => {
    console.log(jobData);
    this.setState({
      jobSelected: true,
      selectedJobData: jobData,
    });
    console.log(this.state.selectedJobData, this.state.jobSelected);
  };

  render() {
    return (
      <div>
        {this.state.serverCallFinished ? (
          <div>
            {this.state.authorized ? (
              <div className="font">
                <NavBar userData={this.state.userData} />
                <div>
                  <div
                    style={{
                      marginRight: "0",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div id="filtersLeftSection" style={{ width: "25%" }}>
                      <FiltersLeftSection />
                    </div>
                    <div style={{ width: "75%" }}>
                      <JobsSection
                        clickedCard={(jobData) => this.setData(jobData)}
                        authToken={this.state.authToken}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                Unauthorized
                <div>
                  <Link to="/login">Login</Link>
                </div>
              </div>
            )}
          </div>
        ) : (
          <ShowLoadingPage />
        )}
      </div>
    );
  }
}

const styles = {
  dashboardContent: {},
  searchbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },

  salary: {
    display: "flex",
    justifyItems: "center",
    alignItems: "flex-start",
    marginTop: "1.5rem",

    flexDirection: "column",
  },
  jobType: {
    marginTop: "1.5rem",
  },
  job: {
    width: "50%",
    overflowY: "scroll",
  },
  filters: {
    position: "fixed",
    marginRight: "2%",
    left: "0px",
    marginLeft: "5%",
    marginTop: "1.5rem",
  },
  expfilters: {
    position: "fixed",
    marginRight: "10%",
    right: "0px",
    marginLeft: "2%",
    marginTop: "1.5rem",
  },
  categories: {
    display: "flex",
    justifyItems: "center",
    alignItems: "flex-start",
    margin: "1.5rem",
    marginTop: "1.5rem",

    flexDirection: "column",
  },
  categoriesLabel: {
    fontSize: "0.75rem",
    fontWeight: "500",
  },
  jobCategories: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    // alignItems: "baseline",
    marginTop: "0.8rem",
    marginBottom: "0.8rem",
  },
  container: {
    margin: "auto",
    width: "100%",
    height: "100%",
    position: "fixed",
    top: "0",
    backgroundColor: "rgba(200 , 200 , 200 , 0.7)",
    zIndex: "1000",
    bottom: "0",
    left: "0",
    right: "0",
  },
};

const mapStateToProps = (state) => ({
  loggedInUser: state.loggedInUser.loggedInUser,
});

export default connect(mapStateToProps, { getUser })(DashBoardPage);
