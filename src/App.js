import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "./custom.css";
import "./CSS/commonCss.css";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import DashBoardPage from "./Pages/DashBoardPage";
import Profile from "./Pages/Profile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Form } from "react-bootstrap";
import JobDetails from "./Pages/JobDetails";

class CreateAccountHelper extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <Form>
        <Form.Group
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Form.Label style={{ ...styles.fieldHeader, fontWeight: "400" }}>
            Don't have an account?&nbsp;
          </Form.Label>

          <Form.Label
            // onClick={() => this.props.onRegisterPageClick("registerPage")}
            className="createAccount"
            style={{
              ...styles.fieldHeader,
              color: "rgb(0, 98, 204)",
              cursor: "pointer",
            }}
          >
            <Link to="/register">Create Account</Link>
          </Form.Label>
        </Form.Group>
      </Form>
    );
  }
}

function LoginToAccountHelper() {
  return (
    <Form.Group
      style={{
        marginTop: "1rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Form.Label style={{ ...styles.fieldHeader, fontWeight: "400" }}>
        Already have an account?&nbsp;
      </Form.Label>

      <Form.Label
        className="createAccount"
        style={{
          ...styles.fieldHeader,
          color: "rgb(0, 98, 204)",
          cursor: "pointer",
        }}
      >
        <Link to="/login">Login</Link>
      </Form.Label>
    </Form.Group>
  );
}

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      page: "loginPage",
    };
  }

  change() {
    this.setState();
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <div>
                <div
                  style={{
                    ...styles.logoFull,
                    paddingTop: "0.5rem",
                    paddingLeft: "1rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                    }}
                  >
                    Valley
                  </p>
                </div>
                <div style={styles.container}>
                  <LoginPage />
                  <CreateAccountHelper />
                </div>
              </div>
            </Route>
            <Route path="/login">
              <div>
                <div
                  style={{
                    ...styles.logoFull,
                    paddingTop: "0.5rem",
                    paddingLeft: "1rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                    }}
                  >
                    Valley
                  </p>
                </div>
                <div style={styles.container}>
                  <LoginPage />
                  <CreateAccountHelper />
                </div>
              </div>
            </Route>
            <Route path="/register">
              <div>
                <div
                  style={{
                    ...styles.logoFull,
                    paddingTop: "0.5rem",
                    paddingLeft: "1rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                    }}
                  >
                    Valley
                  </p>
                </div>

                <div style={styles.container}>
                  <RegisterPage />
                  <LoginToAccountHelper />
                </div>
              </div>
            </Route>
            <Route
              path="/dashboard"
              render={(props) => <DashBoardPage {...props} />}
            ></Route>
            <Route
              path="/job"
              render={(props) => <JobDetails {...props} />}
            ></Route>
            <Route
              path="/profile"
              render={(props) => <Profile {...props} />}
            ></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const styles = {
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

export default App;
