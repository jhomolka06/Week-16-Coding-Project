import React from "react";
import RainForm from "./RainForm";
import background from "./images/rainpage.jpg";
import './rain.css';

export default function Rain() {
    return (
        <div
        style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            height: "100vh",
        }}
        >
        <RainForm />
        </div>
    );
}