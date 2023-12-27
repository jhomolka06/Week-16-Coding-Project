// Importing React, the WDForm component, background image, and styles
import React from "react";
import WDForm from "./WDForm";
import background from "./images/WDpage.jpg";
import "./Wd.css";
// Functional component for the precipitation page
export default function precip() {
    return (
        // Setting the background image and styling
        <div
        style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            height: "100vh",
        }}
        >
            {/* Importing the WDForm component */}
        <WDForm />
        </div>
    );
}