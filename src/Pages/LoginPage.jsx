import React from "react";
import { Button, Form } from "react-bootstrap";
import "../CSS/LoginCss.css";
import logo from "../assets/logoFull.svg";
class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <div style={styles.logoFull}>
          <p
            style={{
              fontSize: "1rem",
              fontWeight: "600",
            }}
          >
            Valley
          </p>
          {/* <img src="https://ai.devoteam.com/wp-content/uploads/sites/91/2018/05/google-logo-icon-png-transparent-background.png" /> */}
        </div>
        <div style={styles.container}>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "1.5rem",
                fontWeight: "bold",
                paddingBottom: "2rem",
              }}
            >
              Welcome Back
            </div>
            <Form>
              <Form.Group controlId="formEmail">
                <Form.Label style={styles.fieldHeader}>
                  Email Address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="email@mail.com"
                  style={{ fontSize: "0.8rem" }}
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label style={styles.fieldHeader}>Password </Form.Label>
                <Form.Label
                  style={{
                    ...styles.fieldHeader,
                    color: "rgba(0, 0, 0, 0.4)",
                  }}
                >
                  &nbsp;&#8231; Forgot?
                </Form.Label>

                <Form.Control
                  type="password"
                  placeholder="*********"
                  style={{ fontSize: "0.8rem" }}
                />

                <Button
                  type="submit"
                  style={{ marginTop: "1.5rem", fontSize: "0.8rem" }}
                  block
                >
                  Login to Valley.io
                </Button>
                <Form.Group
                  style={{
                    marginTop: "1rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Form.Label
                    style={{ ...styles.fieldHeader, fontWeight: "400" }}
                  >
                    Don't have an account?&nbsp;
                  </Form.Label>
                  <Form.Label
                    className="createAccount"
                    style={{
                      ...styles.fieldHeader,
                      color: "rgb(0, 98, 204)",
                      cursor: "pointer",
                    }}
                  >
                    Create Account
                  </Form.Label>
                </Form.Group>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  logoFull: {
    padding: "10px",
  },
  container: {
    margin: "auto",
    width: "20rem",
    height: "20rem",
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
  },
  fieldHeader: {
    fontWeight: "600",
    fontSize: "0.8rem",
  },
};

export default LoginPage;
