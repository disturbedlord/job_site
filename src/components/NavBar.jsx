import React from "react";
import avatar from "../assets/uifaces.jpg";
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
import { Link } from "react-router-dom";

export default class NavBar extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
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
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                cursor: "pointer",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    display: "flex",
                    justifyContent: "flex-end",
                    fontWeight: "bolder",
                  }}
                >
                  Avinash k
                </div>
                <div
                  style={{
                    fontSize: "0.65rem",
                    display: "flex",
                    justifyContent: "flex-end",
                    fontWeight: "bolder",
                    color: "rgba(0,0,0,0.6)",
                  }}
                >
                  hari16999@gmail.com
                </div>
              </div>
              <Link to="/profile">
                <Image
                  style={{ marginLeft: "10px" }}
                  src={avatar}
                  height="35rem"
                  width="35rem"
                  roundedCircle
                />
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const styles = {
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
};
