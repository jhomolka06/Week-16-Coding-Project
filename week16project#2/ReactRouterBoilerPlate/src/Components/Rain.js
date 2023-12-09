// Importing React, the RainForm component, background image, and styles
import React from "react";
import RainForm from "./RainForm";
import background from "./images/rainpage.jpg";
import './Rain.css';
// Functional component for the Rain page
export default function Rain() {
    return (
        // Setting the background image and styling
        <div
        style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            height: "100vh",
        }}
        >
            {/* Importing the RainForm component */}
        <RainForm />
        </div>
    );
}