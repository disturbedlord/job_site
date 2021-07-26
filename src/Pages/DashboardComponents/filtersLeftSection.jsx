// import materialuiSlider from "../components/materialuiSlider";
import { makeStyles } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import React from "react";
import "../../CSS/dashboardCss.css";
import "../../custom.css";

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

class FiltersLeftSection extends React.Component {
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
        <div>
          <div>
            <p style={{ fontSize: "0.85rem", fontWeight: "bold" }}>Category</p>
            {jobTypes.map((jobType, id) => {
              return (
                <div key={id} class="form-check" style={styles.jobCategories}>
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

const styles = {
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
    position: "fixed",
    marginRight: "2%",
    left: "0px",
    marginLeft: "5%",
    marginTop: "1.5rem",
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

export default FiltersLeftSection;
