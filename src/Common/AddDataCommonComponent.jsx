import React from "react";
import commonStyle from "./Styles";
export default class AddDataCommonComponent extends React.Component {
  render() {
    return (
      <div
        onClick={() => this.props.click()}
        style={{
          ...commonStyle.tag,
          color: "rgb(39, 174, 96)",
          backgroundColor: "rgba(46, 204, 113 , 0.2)",
          fontSize: "0.7rem",
          marginTop: "8px",
          cursor: "pointer",
          marginBottom: "30px",
        }}
      >
        Add Data
      </div>
    );
  }
}
