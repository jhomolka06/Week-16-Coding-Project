// Importing React and the Rain Data CRUD component
import React from "react";
import RainsCRUD from './RainsCRUD';
// import RainsCRUD from "./RainsCRUD.js";


// Functional component for the Rain Data Form
export default function RainForm() {
    return (
        <div>
            {/* Title for the Rain Data Form */}
            <h2>Enter Rain Data</h2>
                
                {/* Importing the Rain Data CRUD component */}
            <RainsCRUD />
        </div>
    )
}