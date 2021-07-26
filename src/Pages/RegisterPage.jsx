import React from "react";
import "../index.css";
import { Button, Form, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCoffee } from "@fortawesome/free-solid-svg-icons";
import Http from "../Common/HttpCalls";
import Constants from "../Common/Constants";

class RegisterPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      password: "",
      emailId: "",
      registerBtnClicked: false,
      accountCreated: false,
      timer: 5,
      showTimer: false,
      error: "",
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  tick() {
    if (this.state.timer !== 0 && this.state.showTimer) {
      this.setState({ timer: this.state.timer - 1 });
    }

    if (this.state.timer === 1 && this.state.showTimer) {
      window.location.href = "http://localhost:3000/login";
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  timeout = (delay) => {
    return new Promise((res) => setTimeout(res, delay));
  };

  createAccount = async () => {
    const { username, password, emailId } = this.state;
    if (username.length > 0 && password.length > 0 && emailId.length > 0) {
      this.setState({
        registerBtnClicked: true,
        error: "",
      });

      const bodyData = {
        username: username,
        emailId: emailId,
        password: password,
      };

      Http.POST(Constants.URLS.Register, bodyData)
        .then((res) => {
          const data = res.data;
          const status = parseInt(data.status);
          if (status) {
            this.setState({
              accountCreated: true,
              registerBtnClicked: true,
            });
            this.timeout(500);
            this.setState({ showTimer: true });
            console.log(this.state.showTimer);
          } else {
            this.setState({
              accountCreated: false,
              registerBtnClicked: false,
              error: data.message,
            });
          }
        })
        .catch((err) => console.log(err));
    } else {
      this.setState({
        registerBtnClicked: false,
        accountCreated: false,
        error: "One or more field(s) are empty",
      });
    }
  };

  render() {
    return (
      <div>
        <div>
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
                type="text"
                placeholder="Some Name"
                style={{ fontSize: "0.8rem" }}
                onChange={(event) =>
                  this.setState({ username: event.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label style={styles.fieldHeader}>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="email@mail.com"
                style={{ fontSize: "0.8rem" }}
                onChange={(event) =>
                  this.setState({ emailId: event.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label style={styles.fieldHeader}>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="*********"
                style={{ fontSize: "0.8rem" }}
                onChange={(event) =>
                  this.setState({ password: event.target.value })
                }
              />

              {this.state.registerBtnClicked ? (
                <Button
                  style={{
                    marginTop: "1.5rem",
                    fontSize: "0.8rem",
                    position: "relative",
                  }}
                  block
                >
                  {this.state.accountCreated ? (
                    <div>
                      Account Created&nbsp;&nbsp;&nbsp;
                      <FontAwesomeIcon icon={faCheck} size="1x" />
                      {this.state.showTimer ? (
                        <div
                          style={{
                            position: "absolute",
                            top: "0px",
                            right: "0px",
                            padding: "6.5px",
                            fontWeight: "bold",
                          }}
                        >
                          {this.state.timer}
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  ) : (
                    <div>
                      Creating your account&nbsp;&nbsp;&nbsp;
                      <Spinner animation="border" role="status" size="sm">
                        <span className="sr-only">Loading...</span>
                      </Spinner>
                    </div>
                  )}
                </Button>
              ) : (
                <Button
                  style={{
                    marginTop: "1.5rem",
                    fontSize: "0.8rem",
                  }}
                  onClick={() => {
                    this.createAccount();
                  }}
                  block
                >
                  Register to Valley.io
                </Button>
              )}
            </Form.Group>
          </Form>
        </div>
        {this.state.error === "" ? (
          <div></div>
        ) : (
          <div
            style={{
              ...styles.fieldHeader,
              display: "flex",
              justifyContent: "center",
              color: "red",
            }}
          >
            {this.state.error}
          </div>
        )}
      </div>
    );
  }
}

const styles = {
  logoFull: {
    padding: "10px",
  },
  fieldHeader: {
    fontWeight: "600",
    fontSize: "0.8rem",
  },
  redirectingPopup: {
    position: "fixed",
    top: "0",
    right: "1rem",
  },
};

export default RegisterPage;
