import React from "react";
import "../CSS/LoginCss.css";
import { Button, Form, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { saveUser, getUser } from "../actions/loggedInUserAction";
import Http from "../Common/HttpCalls";
import Constants from "../Common/Constants";

class LoginPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      emailId: "",
      password: "",
      accountExist: false,
      serverResponseText: "",
      showLoading: false,
      authToken: "",
      userData: null,
      photo: null,
    };
  }

  componentDidMount() {
    const hasData = localStorage.getItem("hasData");
    if (hasData === undefined || hasData === "0" || hasData === "") {
      //do nothing
    } else {
      // Verify Token
    }
  }

  LoginAccount = async () => {
    if (this.state.emailId !== "" && this.state.password !== "") {
      const { emailId, password } = this.state;
      const bodyData = {
        emailId: emailId,
        password: password,
      };
      this.setState({ showLoading: true, serverResponseText: "" });

      Http.POST(Constants.URLS.Login, bodyData)
        .then((res) => {
          const data = res.data;
          this.props.saveUser({
            name: data.username,
            emailId: data.emailId,
            authToken: data.token,
            photo: data.photo,
          });
          this.props.getUser();

          const status = parseInt(data.status);
          if (status) {
            this.setState({
              accountExist: true,
            });
          } else {
            this.setState({
              accountExist: false,
              showLoading: false,
              serverResponseText: data.message,
            });
          }
        })
        .catch((err) => console.log(err));
    } else {
      this.setState({
        showLoading: false,
        serverResponseText: "One or more field(s) are empty",
      });
    }
  };

  render() {
    const data = this.props.loggedInUser;
    return (
      <div>
        {this.state.accountExist ? (
          <>
            {console.log(data)}
            <Redirect push to="/dashboard" />
          </>
        ) : (
          <div>
            <div>
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
                      onChange={(e) =>
                        this.setState({ emailId: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group controlId="formPassword">
                    <Form.Label style={styles.fieldHeader}>
                      Password{" "}
                    </Form.Label>
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
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                    />

                    {this.state.showLoading ? (
                      <Button
                        style={{
                          marginTop: "1.5rem",
                          fontSize: "0.8rem",
                          position: "relative",
                        }}
                        block
                      >
                        {this.state.accountExist ? (
                          <div>
                            Logged In&nbsp;&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faCheck} size="1x" />
                          </div>
                        ) : (
                          <div>
                            Logging into your account&nbsp;&nbsp;&nbsp;
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
                          this.LoginAccount();
                        }}
                        block
                      >
                        Login to Valley.io
                      </Button>
                    )}
                  </Form.Group>
                </Form>
              </div>
            </div>
            {this.state.serverResponseText === "" ? (
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
                {this.state.serverResponseText}
              </div>
            )}
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

const mapStateToProps = (state) => ({
  loggedInUser: state.loggedInUser.loggedInUser,
});

export default connect(mapStateToProps, { getUser, saveUser })(LoginPage);
