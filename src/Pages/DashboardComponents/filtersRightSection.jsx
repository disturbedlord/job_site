import React from "react";
import "../../CSS/dashboardCss.css";
import "../../custom.css";

class FiltersRightSection extends React.Component {
  render() {
    return (
      <div style={{ ...styles.expfilters }}>
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

const styles = {
  jobType: {
    marginTop: "1.5rem",
  },

  expfilters: {
    position: "fixed",
    marginRight: "10%",
    right: "0px",
    marginLeft: "2%",
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

export default FiltersRightSection;
