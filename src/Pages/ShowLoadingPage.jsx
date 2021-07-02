import React from "react";
import { Spinner } from "react-bootstrap";
import "../CSS/showLoadingPageCss.css";
class ShowLoadingPage extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.placeInCenter}>
          <Spinner animation="border" role="status" size="xl">
            <span className="sr-only">Loading...</span>
          </Spinner>
          <br />
          <div className="fadeInFadeOutElement">
            Fetching Resources from Server
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    margin: "auto",
    padding: "auto",
    width: "20rem",
    height: "5rem",
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
  },
  placeInCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
};

export default ShowLoadingPage;
