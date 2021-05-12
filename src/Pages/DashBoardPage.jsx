import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import avatar from "../assets/uifaces.jpg";
import search from "../assets/search.png";
import location from "../assets/location.png";
import jobData from "../JobData";
import briefCase from "../assets/briefcase.png";
import clock from "../assets/clock.png";
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
import "../custom.css";
import Slider from "@material-ui/core/Slider";
// import materialuiSlider from "../components/materialuiSlider";
import { makeStyles } from "@material-ui/core";

const jobTypes = [
  "Backend",
  "Frontend",
  "Full Stack",
  "Mobile",
  "UI/UX Design",
  "Project Management",
  "Testing",
];

const MUIStyles = makeStyles({
  track: {
    "& .MuiSlider-thumb": {
      backgroundColor: "white",
      border: "3px solid #26D782",
    },
    "& .MuiSlider-track": {
      backgroundColor: "#26D782",
    },
    "& .MuiSlider-rail": {
      backgroundColor: "#D5D6D8",
    },
  },
});

function MUISlider(props) {
  const classes = MUIStyles();
  const [value, setValue] = React.useState([10, 60]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.min(newValue[0]);
    props.max(newValue[1]);
  };
  return (
    <Slider
      value={value}
      onChange={handleChange}
      min={0}
      max={100}
      className={classes.track}
      style={{ width: "10rem" }}
    />
  );
}

class JobCard extends React.Component {
  render() {
    const job = this.props.job;
    return (
      <Card
        style={{
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0)",
        }}
      >
        <div style={{ padding: "1rem" }}>
          <div
            style={{
              // padding: "1rem",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "0.5rem",
              }}
            >
              <img
                src={job["companyImage"]}
                style={{
                  width: "2rem",
                  height: "2rem",
                }}
              />
              <div style={{ marginLeft: "0.5rem" }}>
                <div style={{ fontSize: "0.85rem", fontWeight: "bold" }}>
                  {job["jobName"]}
                </div>
                <div style={{ fontSize: "0.7rem", fontWeight: "bold" }}>
                  {job["companyName"]}
                </div>
              </div>
            </div>
            <div style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
              {job["salary"]["min"]}$ - {job["salary"]["max"]}$
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <div style={{}}>
              {job["skills"].map((skill) => {
                return (
                  <div
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: "bold",
                      backgroundColor: "#DBF3E8",
                      marginRight: "0.5rem",
                      marginTop: "1rem",
                      padding: "0.4rem",
                      color: "#2CB678",
                      borderRadius: "0.2rem",
                      display: "flex",
                      justifyContent: "center",
                      alignSelf: "center",
                    }}
                  >
                    {skill}
                  </div>
                );
              })}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignSelf: "flex-end",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "0.7rem",
                  margin: "0.5rem",
                  fontweight: "bold",
                }}
              >
                <img
                  src={location}
                  width="12rem"
                  height="12rem"
                  style={{ margin: "0.3rem" }}
                />
                <div
                  style={{ fontWeight: "bold", color: "rgba(0 ,0 , 0 , 0.4)" }}
                >
                  {job["jobLocation"]}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "0.7rem",
                  margin: "0.5rem",
                }}
              >
                <img
                  src={briefCase}
                  width="12rem"
                  height="12rem"
                  style={{ margin: "0.3rem" }}
                />
                <div
                  style={{ fontWeight: "bold", color: "rgba(0 ,0 , 0 , 0.4)" }}
                >
                  {job["jobType"]}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "0.7rem",
                  margin: "0.5rem",
                }}
              >
                <img
                  src={clock}
                  width="12rem"
                  height="12rem"
                  style={{ margin: "0.3rem" }}
                />
                <div
                  style={{ fontWeight: "bold", color: "rgba(0 ,0 , 0 , 0.4)" }}
                >
                  {job["postedOn"]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

class Filters extends React.Component {
  constructor(props) {
    super();
    this.state = {
      min: 10,
      max: 60,
    };
  }
  minValue = (x) => {
    this.setState({
      min: x,
    });
  };

  maxValue = (x) => {
    this.setState({
      max: x,
    });
  };

  render() {
    return (
      <div style={styles.filters}>
        <div style={styles.categories}>
          <div>
            <p style={{ fontSize: "0.85rem", fontWeight: "bold" }}>Category</p>
            {jobTypes.map((jobType) => {
              return (
                <div class="form-check" style={styles.jobCategories}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    style={{
                      color: "green",
                    }}
                  />
                  <label
                    className="form-check-label"
                    style={styles.categoriesLabel}
                    htmlFor={jobType}
                  >
                    {jobType}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div style={styles.salary}>
          <p style={{ fontSize: "0.85rem", fontWeight: "bold" }}>Salary</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <p style={{ fontSize: "0.7rem", fontWeight: "bold" }}>
              {this.state.min * 1000}$
            </p>
            <p style={{ fontSize: "0.7rem", fontWeight: "bold" }}>
              {this.state.max * 1000}$
            </p>
          </div>
          <MUISlider min={this.minValue} max={this.maxValue} />
        </div>
        <div style={styles.jobType}>
          <p style={{ fontSize: "0.85rem", fontWeight: "bold" }}>Type</p>

          <div class="form-check" style={styles.jobCategories}>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              style={{
                color: "green",
              }}
            />
            <label className="form-check-label" style={styles.categoriesLabel}>
              Full Time
            </label>
          </div>
          <div class="form-check" style={styles.jobCategories}>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              style={{
                color: "green",
              }}
            />
            <label className="form-check-label" style={styles.categoriesLabel}>
              Part Time
            </label>
          </div>
        </div>
      </div>
    );
  }
}

class Jobs extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "1rem" }}>
        <div>
          <Card
            style={{
              ...styles.searchbar,
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0)",
            }}
          >
            <Form inline>
              <img
                src={search}
                width="17rem"
                height="17rem"
                style={{ position: "relative", left: "8px", top: "0px" }}
              />
              <FormControl
                type="text"
                placeholder="Search for a job posting"
                className="searchBox"
                style={{
                  fontSize: "0.75rem",
                  margin: "0.1rem",
                  width: "20rem",
                }}
              />
            </Form>
            <div
              style={{ display: "flex", alignSelf: "center", opacity: "0.4" }}
            >
              |
            </div>
            <Form inline>
              <img
                src={location}
                width="17rem"
                height="17rem"
                style={{
                  position: "relative",
                  left: "8px",
                  top: "0px",
                  opacity: "0.3",
                }}
              />
              <FormControl
                type="text"
                placeholder="Set location"
                className="searchBox"
                style={{ fontSize: "0.75rem", margin: "0.1rem" }}
              />
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
            </Form>
          </Card>
        </div>
        <div>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "0.7rem",
              opacity: "0.4",
              fontWeight: "bold",
            }}
          >
            Showing {jobData.length} results
          </p>
          {jobData.map((job, idx) => {
            return <JobCard job={job} />;
          })}
        </div>
      </div>
    );
  }
}

class Bar extends React.Component {
  render() {
    return (
      <div style={{ ...styles.filters }}>
        <div style={styles.jobType}>
          <p style={{ fontSize: "0.85rem", fontWeight: "bold" }}>
            Experience Level
          </p>

          <div class="form-check" style={styles.jobCategories}>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              style={{
                color: "green",
              }}
            />
            <label className="form-check-label" style={styles.categoriesLabel}>
              All
            </label>
          </div>
          <div class="form-check" style={styles.jobCategories}>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              style={{
                color: "green",
              }}
            />
            <label className="form-check-label" style={styles.categoriesLabel}>
              Junior
            </label>
          </div>
          <div class="form-check" style={styles.jobCategories}>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              style={{
                color: "green",
              }}
            />
            <label className="form-check-label" style={styles.categoriesLabel}>
              Mid
            </label>
          </div>
          <div class="form-check" style={styles.jobCategories}>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              style={{
                color: "green",
              }}
            />
            <label className="form-check-label" style={styles.categoriesLabel}>
              Senior{" "}
            </label>
          </div>
        </div>
      </div>
    );
  }
}

class DashBoardPage extends React.Component {
  render() {
    return (
      <div>
        <div style={styles.navbar} className="nav_bar">
          <Row style={{ marginLeft: "3%", marginRight: "0" }}>
            <Col
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignSelf: "center",
              }}
            >
              <div
                style={{
                  fontWeight: "600",
                  fontSize: "0.8rem",
                }}
              >
                Valley
              </div>
            </Col>
            <Col xs={6} style={{ display: "flex" }}>
              <div style={styles.links}>
                <div style={{ ...styles.link, fontWeight: "bold" }}>Jobs</div>
                <div style={{ ...styles.link, color: "rgba(0,0,0,0.5)" }}>
                  Post a job
                </div>
                <div style={{ ...styles.link, color: "rgba(0,0,0,0.5)" }}>
                  Companies
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <Image
                  src={avatar}
                  height="35rem"
                  width="35rem"
                  roundedCircle
                />
              </div>
            </Col>
          </Row>
        </div>
        <div style={styles.dashboardContent}>
          <div
            style={{
              marginRight: "0",
            }}
          >
            <div>
              <Filters />
            </div>
            <div xs={6}>
              <Jobs />
            </div>
            <div>
              <Bar />
            </div>
          </div>
        </div>
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
  filters: {
    marginRight: "20%",

    marginLeft: "20%",
    marginTop: "1.5rem",
  },
  categories: {
    display: "flex",
    justifyItems: "center",
    alignItems: "flex-start",
    // margin: "1.5rem",
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

export default DashBoardPage;
