import React,{ Component } from "react"
import "./index.css"

export class Navbar extends Component {
    render(){
       return <div className="shadow">
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand padding monospace bold" href="#" >Instadel</a>
                <a className="nav-link textwhite" href="#">About us</a>
            </nav>
       </div>
    }
}