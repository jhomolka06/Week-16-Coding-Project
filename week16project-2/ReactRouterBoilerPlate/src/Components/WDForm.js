// Importing React and the Weather Data CRUD component 
import React from "react";
import WdsCRUD from './WdsCRUD';

// Creating a function to export
export default function WDForm() {
    return (
        <div>
            <h2>Enter Weather Data</h2>

            {/* Importing the Weather Data CRUD component */}
            <WdsCRUD />
        </div>
    )
}