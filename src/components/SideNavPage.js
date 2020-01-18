import React, { Component } from "react";
import { FaUserAlt, FaSuperscript } from "react-icons/fa";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
class SideNavPage extends Component {

  render() {
    return (

      <ul className="driwer contentDsplay bckground">
        <li style={{ marginTop: "35px" }}>Logo
        </li>
        <hr></hr>
        <li><FaUserAlt /> &nbsp;
            <Link to="./" className="sideLink">Reports</Link>
        </li>
        <li><FaUserAlt /> &nbsp;
            <Link to="./EditReports" className="sideLink">Edit Reports</Link>
        </li>
      </ul>

    );
  }
}

export default SideNavPage;