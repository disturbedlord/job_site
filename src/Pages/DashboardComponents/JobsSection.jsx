import "../../custom.css";
import "../../CSS/jobCardsCss.css";
import "../../CSS/dashboardCss.css";
import commonStyles from "../../Common/Styles";
import React from "react";
import { Button, Card, Form, FormControl } from "react-bootstrap";
import briefCase from "../../assets/briefcase.png";
import clock from "../../assets/clock.png";
import location from "../../assets/location.png";
import search from "../../assets/search.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { getUser } from "../../actions/loggedInUserAction";
import { connect } from "react-redux";
import Http from "../../Common/HttpCalls";
import Constants from "../../Common/Constants";

class DesktopSearchBar extends React.Component {
  render() {
    return (
      <Card
        id="desktopSearchBar"
        className="searchBar"
        style={{
          position: "fixed",
          top: "4rem",
          width: "100%",
          maxWidth: "622px",
          zIndex: "1000",
          ...styles.searchbar,
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0)",
        }}
      >
        <div
          id="jobTypeSearchBar"
          style={{ display: "flex", alignContent: "center" }}
        >
          <Form
            style={{ width: "100%", display: "flex", flexDirection: "row" }}
            inline
          >
            <img
              src={search}
              width="17rem"
              height="17rem"
              style={{ position: "relative", left: "8px", top: "0px" }}
            />
            <FormControl
              type="text"
              placeholder="Search for a job posting"
              className="searchBox input"
              id="jobTypeSearchInput"
              style={{
                fontSize: "0.75rem",
                margin: "0.1rem",
              }}
            />
          </Form>
        </div>
        <div
          style={{
            alignSelf: "center",
            opacity: "0.4",
          }}
          className="searchBarDivider"
        >
          |
        </div>
        <div
          id="jobLocationSearchBar"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Form
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            inline
          >
            <div>
              <img
                src={location}
                width="16rem"
                height="14rem"
                style={{
                  opacity: "0.5",
                  position: "relative",
                  left: "8px",
                  top: "0px",
                }}
              />
              <FormControl
                type="text"
                placeholder="Set location"
                className="searchBox input"
                style={{
                  fontSize: "0.75rem",
                  margin: "0.1rem",
                  width: "90%",
                }}
              />
            </div>
          </Form>

          <Button
            style={{
              fontSize: "0.7rem",
              backgroundColor: "#34CF8B",
              borderColor: "#34CF8B",
              fontWeight: "bold",
              margin: "0.5rem",
            }}
          >
            Search
          </Button>
        </div>
      </Card>
    );
  }
}

class MobileSearchBar extends React.Component {
  render() {
    return (
      <div
        style={{
          position: "fixed",
          top: "4rem",
          width: "100%",
          maxWidth: "622px",
          display: "flex",
          flexDirection: "row",
          zIndex: "1000",
          backgroundColor: "transparent",
        }}
        id="mobileSearchBar"
      >
        <Card
          className="searchBar"
          style={{
            width: "100%",
            position: "relative",
            margin: "1%",
            display: "flex",
            flexDirection: "row",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0)",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <div
              id="jobTypeSearchBar"
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                width: "100%",
              }}
            >
              <Form
                style={{ width: "100%", display: "flex", flexDirection: "row" }}
                inline
              >
                <img
                  src={search}
                  width="17rem"
                  height="17rem"
                  style={{ position: "relative", left: "8px", top: "0px" }}
                />
                <FormControl
                  type="text"
                  placeholder="Search for a job posting"
                  className="searchBox input"
                  id="jobTypeSearchInput"
                  style={{
                    fontSize: "0.75rem",
                    margin: "0.1rem",
                  }}
                />
              </Form>
            </div>
            <div
              style={{
                marginLeft: "50px",
                marginRight: "40px",
                borderBottom: "1px solid rgba(0,0,0,0.1)",
              }}
            ></div>
            <div
              id="jobTypeSearchBar"
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                width: "100%",
              }}
            >
              <Form
                style={{ width: "100%", display: "flex", flexDirection: "row" }}
                inline
              >
                <img
                  src={location}
                  width="17rem"
                  height="14rem"
                  style={{
                    position: "relative",
                    left: "8px",
                    top: "0px",
                    opacity: "0.5",
                  }}
                />
                <FormControl
                  type="text"
                  placeholder="Set Location"
                  className="searchBox input"
                  id="jobTypeSearchInput"
                  style={{
                    fontSize: "0.75rem",
                    margin: "0.1rem",
                  }}
                />
              </Form>
            </div>
          </div>

          <Button
            style={{
              fontSize: "0.7rem",
              backgroundColor: "#34CF8B",
              borderColor: "#34CF8B",
              fontWeight: "bold",
              margin: "0.5rem",
            }}
          >
            Search
          </Button>
        </Card>
      </div>
    );
  }
}

class JobCard extends React.Component {
  render() {
    const job = this.props.job;
    return (
      // <Link to="/jobdetails">
      <Card
        className="jobCard"
        onClick={() => this.props.click()}
        style={{
          margin: "0.4rem",
          border: "none",
          borderRadius: "6px",
          border: "1px solid rgba(0, 0, 0, 0.125)",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ margin: "0.8rem" }}>
          <div>
            {/* Image section */}
            <div
              style={{
                padding: "0.8rem",
                backgroundColor: "rgba(0,191,255 , 0.3)",
                display: "table",

                borderRadius: "10px",
              }}
            >
              <img src={job["companyImage"]} width="25px" height="25px" />
            </div>
          </div>
          <div
            className="boldText"
            style={{
              marginTop: "0.6rem",
              marginLeft: "0.2rem",
              fontSize: "0.85rem",
              opacity: "0.85",
            }}
          >
            {job["jobName"]}
          </div>
          <div
            style={{
              marginLeft: "0.2rem",
              fontWeight: "bolder",
              fontSize: "0.7rem",
            }}
          >
            {job["companyName"]}
          </div>
          <div
            style={{
              marginTop: "0.5rem",
              marginLeft: "0.2rem",
              fontSize: "0.75rem",
              fontWeight: "400",
            }}
          >
            The user experience Designer position exists to create compelling
            and elegant digital user experiences through through through desig..{" "}
            <span
              style={{ color: "#4169e1", cursor: "pointer", fontWeight: "600" }}
            >
              Read More
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ ...commonStyles.tag, marginTop: "0.5rem" }}>
              {job["jobType"]}
            </div>
            <div
              style={{
                ...commonStyles.tag,
                marginTop: "0.5rem",
                marginLeft: "10px",
              }}
            >{`Mid Level`}</div>
          </div>
          <Link
            to={{
              pathname: `/job/${job["_id"]}`,
              state: { jobId: job["_id"] },
            }}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: "bolder",
                backgroundColor: "#4169e1",
                paddingTop: "0.4rem",
                paddingLeft: "0.6rem",
                paddingBottom: "0.4rem",
                paddingRight: "0.6rem",
                width: "8rem",
                display: "flex",
                justifyContent: "center",
                borderRadius: "5px",
                marginTop: "0.8rem",
                color: "white",
                cursor: "pointer",
              }}
            >
              Learn More
            </div>
          </Link>
        </div>
      </Card>
      // </Link>
    );
  }
}

class JobsSection extends React.Component {
  constructor(props) {
    super();
    this.state = {
      jobData: [],
    };
  }

  click = (job) => {
    this.props.clickedCard(job);
  };

  componentDidMount(props) {
    this.props.getUser();
    const authToken = this.props.loggedInUser.authToken;
    if (authToken !== undefined || authToken !== "") {
      Http.GET(Constants.URLS.AllJobs, { "auth-token": authToken })
        .then((res) => {
          const jobs = res.data;
          this.setState({
            jobData: jobs.data,
          });
        })
        .catch((err) => console.log(err));
    }
  }
  render() {
    return (
      <div style={{ marginTop: "1rem" }}>
        <div>
          <DesktopSearchBar />
          <MobileSearchBar />
        </div>
        <div>
          <p
            style={{
              marginLeft: "1%",
              marginTop: "5rem",
              fontSize: "0.7rem",
              opacity: "0.4",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Showing {this.state.jobData.length} results
          </p>
          <div className="jobCards">
            {this.state.jobData.map((job, idx) => {
              return (
                <JobCard click={() => this.click(job)} key={idx} job={job} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  dashboardContent: {},
  searchbar: {
    justifyContent: "space-between",
    alignSelf: "center",
  },
  navbar: {
    position: "sticky",
    top: "0",
    zIndex: "1",
    paddingTop: "0.3rem",
    paddingBottom: "0.3rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.2rem",
    backgroundColor: "white",
    height: "2.8rem",
  },
  links: {
    display: "flex",
    flexDirection: "row",
    justifyItems: "flex-start",
    alignItems: "center",
  },

  link: {
    marginRight: "3rem",
    fontSize: "0.75rem",
    fontWeight: "600",
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
};

const mapStateToProps = (state) => ({
  loggedInUser: state.loggedInUser.loggedInUser,
});

export default connect(mapStateToProps, { getUser })(JobsSection);
