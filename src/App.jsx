import React from "react";
import { Component } from "react";
import { Navbar } from "./Navbar";
import Maincomponent from "./MainComponent";
import Logincomp from "./Logincomp";
import UserData from "./DataBank/UserData";

export default class App extends Component {
    render(){
        return <React.Fragment>
            <Navbar />
            <Logincomp />
        </React.Fragment>
    }
}