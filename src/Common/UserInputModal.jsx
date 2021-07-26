import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Row, Col } from "react-bootstrap";
import "../CSS/commonCss.css";
import Constants from "../Common/Constants";
import { Click } from "../common";
import { textAreaAdjust } from "../common";
import commonStyle from "./Styles";
import { WorkExperience } from "./ModalClasses";
import { ExperienceHandler } from "./ProfileComponents/Experience";
import { connect } from "react-redux";
import { getUser } from "../actions/loggedInUserAction";
import PropTypes from "prop-types";

class UserInputModal extends React.Component {
  constructor(props) {
    super();
    this.state = {
      showModal: false,
      fields: [],
      modalTitle: "",
      object: null,
    };
  }

  componentDidMount(props) {
    this.props.getUser();
  }

  closeModal = () => {
    this.props.closeModal();
  };

  render() {
    const { loggedInUser } = this.props;

    const handleClose = () => this.closeModal(false);
    const { type } = this.props;
    let object;
    switch (type) {
      case "addExperience":
        object = new ExperienceHandler();
      default:
        let ele;
    }

    return (
      <div>
        <Modal show={true} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title className="boldText" style={{ fontSize: "1.2rem" }}>
              {object.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                {object.fields.map((field, id) => {
                  if (field.child === undefined) {
                    return (
                      <div key={id}>
                        <Form.Group>
                          <Form.Label style={Styles.fieldHeader}>
                            <div
                              style={{ display: "flex", flexDirection: "row" }}
                            >
                              {field.title}
                              {field.tag === undefined ? (
                                <></>
                              ) : (
                                <div
                                  style={{
                                    ...commonStyle.tag,
                                    marginLeft: "10px",
                                  }}
                                >
                                  {field.tag}
                                </div>
                              )}
                            </div>
                          </Form.Label>
                          <Form.Control
                            className="noResize"
                            type="text"
                            id="input"
                            as={field.type}
                            rows="5"
                            placeholder={field.placeholder}
                            style={{
                              fontSize: "0.75rem",
                              fontWeight: "bolder",
                            }}
                            onChange={(e) => {
                              object.data[id] = e.target.value;
                            }}
                          />
                        </Form.Group>
                      </div>
                    );
                  } else {
                    return (
                      <div key={id}>
                        <Form>
                          <Form.Label style={Styles.fieldHeader}>
                            {field.title}
                          </Form.Label>
                          <Row>
                            <Col>
                              <Form.Group>
                                <Form.Control
                                  className="noResize"
                                  type="text"
                                  id="input"
                                  as={field.type}
                                  rows="5"
                                  placeholder={field.child[0].placeholder}
                                  style={{
                                    fontSize: "0.75rem",
                                    fontWeight: "bolder",
                                  }}
                                  onChange={(e) =>
                                    (object.data[id] = e.target.value)
                                  }
                                />
                              </Form.Group>
                            </Col>
                            <Col>
                              <Form.Group>
                                <Form.Control
                                  className="noResize"
                                  type="text"
                                  id="input"
                                  as={field.type}
                                  rows="5"
                                  placeholder={field.child[1].placeholder}
                                  style={{
                                    fontSize: "0.75rem",
                                    fontWeight: "bolder",
                                  }}
                                  onChange={(e) =>
                                    (object.data[id] = e.target.value)
                                  }
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                        </Form>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="success"
              onClick={() => {
                object.emailId = loggedInUser.emailId;
                object.authToken = loggedInUser.authToken;
                object.saveData();
                handleClose();
              }}
              style={{ fontSize: "0.8rem", fontWeight: "bolder" }}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const Styles = {
  content: {
    fontSize: "0.8rem",
    marginTop: "10px",
    fontWeight: "600",
    color: "rgba(0,0,0,0.6)",
    // marginLeft: "20px",
  },
  fieldHeader: {
    fontWeight: "bolder",
    fontSize: "0.7rem",
  },
};

UserInputModal.propTypes = {
  loggedInUser: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loggedInUser: state.loggedInUser.loggedInUser,
});

export default connect(mapStateToProps, { getUser })(UserInputModal);

{
  /* <>
        <Button
          variant="primary"
          style={{
            position: "absolute",
            bottom: "50px",
            right: "10px",
            fontSize: "0.8rem",
          }}
          onClick={handleShow}
        >
          Launch demo modal
        </Button>

        <Modal
          // dialogClassName="border-radius-2"
          show={this.state.showModal}
          onHide={handleClose}
          centered
          // className="noBorder"
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    }}
                  >
                    <div
                      className="editDiv"
                      style={{
                        padding: "8px",
                        // backgroundColor: "blue",
                        borderRadius: "30px",
                        display: "table",
                        border: "3px solid rgba(250 , 10 , 1 , 0.5)",
                        alignSelf: "flex-start",
                      }}
                    >
                      <form style={{ width: "100%" }}>
                        <input
                          type="file"
                          id="actual-btn"
                          style={{ display: "none" }}
                          onChange={this.companyImageUpload}
                          accept=".png,.jpeg,.jpg,.svg"
                        />
                        {this.state.companyImageSelected ? (
                          <label
                            htmlFor="actual-btn"
                            style={{
                              marginBottom: "0",
                              alignSelf: "flex-start",
                            }}
                          >
                            <img
                              src={this.state.companyImage}
                              width="25px"
                              height="25px"
                            />
                          </label>
                        ) : (
                          <label
                            style={{
                              fontSize: "0.7rem",
                              width: "25px",
                              height: "25px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              marginBottom: "0",
                              cursor: "pointer",
                              alignSelf: "flex-start",
                            }}
                            htmlFor="actual-btn"
                            // className="btn btn-primary boldText"
                          >
                            Logo
                          </label>
                        )}
                      </form>
                    </div>
                    <div style={{ marginLeft: "10px", width: "100%" }}>
                      <form action="#">
                        <input
                          placeholder={workExperienceObj.companyInfo}
                          className="userInput"
                          style={{
                            ...Styles.content,
                            marginTop: "0",
                            fontSize: "0.85rem",
                            width: "100%",
                          }}
                        ></input>
                        <input
                          placeholder="Timeline (From - To)"
                          className="userInput"
                          style={{
                            ...Styles.content,
                            marginTop: "0",
                            fontSize: "0.85rem",
                            width: "100%",
                          }}
                        ></input>
                      </form>
                    </div>
                  </div>
                  <form>
                    <textarea
                      style={{
                        ...Styles.content,
                        padding: "0",
                        margin: "10px 0",
                        width: "100%",
                        overflowY: "hidden",
                        overflow: "hidden",
                        border: "none",
                        border: "2px solid rgba(46, 204, 113, 0.3)",
                        borderRadius: "2px",
                      }}
                      rows={15}
                      draggable={false}
                      // onKeyUp={(e) => textAreaAdjust(e)}
                      id="desc"
                      // contentEditable="true"
                      // onChange={(e) => console.log(e)}
                      placeholder={workExperienceObj.desc}
                    ></textarea>
                  </form>
                  {/* <div
            style={{ ...Styles.content }}
            id="job"
            // contentEditable="true"
            className="new-line"
            onChange={(e) => console.log(e)}
          >
            {workExperienceObj.desc}
          </div> */
}
//           </div>
//         </div>
//       </div>
//     </Modal.Body>
//     <Modal.Footer>
//       <Button variant="secondary" onClick={handleClose}>
//         Close
//       </Button>
//       <Button
//         className="boldText"
//         variant="primary"
//         onClick={handleClose}
//       >
//         Save Changes
//       </Button>
//     </Modal.Footer>
//   </Modal>
// </> */}
