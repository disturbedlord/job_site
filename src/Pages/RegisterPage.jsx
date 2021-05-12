import React from "react";
import "../index.css";
import { Button, Form } from "react-bootstrap";

class RegisterPage extends React.Component {
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
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "1.5rem",
              fontWeight: "bold",
              paddingBottom: "1rem",
            }}
          >
            Create Account
          </p>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label style={styles.fieldHeader}>Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="Some Name"
                style={{ fontSize: "0.8rem" }}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label style={styles.fieldHeader}>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="email@mail.com"
                style={{ fontSize: "0.8rem" }}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label style={styles.fieldHeader}>Password</Form.Label>
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
                Register to Valley.io
              </Button>
            </Form.Group>
          </Form>
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
    position: "fixed",
    height: "20rem",
    width: " 20rem",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
  },
  fieldHeader: {
    fontWeight: "600",
    fontSize: "0.8rem",
  },
};

export default RegisterPage;
