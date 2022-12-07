import React from "react";
import logo from "./logo.svg";
import "./App.css";

function Heading() {
    let title = "This is some heading text";
    return <h1>{title}</h1>;
}

function App() {
    return (
        <div className="container">
            <Heading />
        </div>
    );
}

export default App;
