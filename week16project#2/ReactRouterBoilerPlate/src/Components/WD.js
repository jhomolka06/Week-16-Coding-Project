import React from "react";
import WDForm from "./WDForm";
import background from "./images/WDpage.jpg";
import "./Wd.css";

export default function precip() {
    return (
        <div
        style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            height: "100vh",
        }}
        >
        <WDForm />
        </div>
    );
}