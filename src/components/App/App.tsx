import React from "react"
import {Header} from "../Header/Header"
import "bootstrap/dist/css/bootstrap.css"
import "./App.scss";

export default function App(props: { children: unknown }): JSX.Element {
    return (
        <div className="app d-flex flex-column h-100">
            <Header/>
            {props.children}
        </div>
    )
}
