// Importing necessary hooks from React
import { useState, useEffect } from "react";

// Creating a function to export
export default function WdsCRUD() {
    const WD_API_URL = "https://656fb4806529ec1c62382673.mockapi.io/wa/WD";
// State variables for managing weather data
    const [wds, setWds] = useState([]);
// State variables for capturing new weather data
    const [newWind, setNewWind] = useState("");
    const [newHumidity, setNewHumidity] = useState("");
    const [newPressure, setNewPressure] = useState("");
// State variables for capturing updated weather data
    const [updateWind, setUpdateWind] = useState("");
    const [updateHumidity, setUpdateHumidity] = useState("");
    const [updatePressure, setUpdatePressure] = useState("");
// Function to fetch weather data from the API
    function getWds() {
        fetch(WD_API_URL)
            .then((data) => data.json())
            .then((data) => setWds(data));
    }
// UseEffect hook to fetch weather data when the component loads
    useEffect(() => {
        getWds();
        console.log(wds)
    }, []);
// Function to delete weather data from the API
    function deleteWds(id) {
        fetch(`${WD_API_URL}/${id}`, {
            method: "DELETE",
        }).then(() => getWds());
    }
// Function to post new weather data to the API
    function postNewWd(e) {
        e.preventDefault();

        fetch(WD_API_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({
                wind: newWind,
                humidity: newHumidity,
                pressure: newPressure,
            }),
        }).then(() => getWds());
    }
// Function to update weather data in the API
    function updateWds(e, wdObject) {
        e.preventDefault();

        let updatedWdObject = {
            ...wdObject,
            wind: updateWind,
            humidity: updateHumidity,
            pressure: updatePressure,
        }

        fetch(`${WD_API_URL}/${wdObject.id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(updatedWdObject),
        }).then(() => getWds());
    }
// Return statement
    return (
        <div className="wd">
            {/** Form for posting new weather data */}
            <form className="new-post">
            <label>Wind</label>
            <input onChange={(e) => setNewWind(e.target.value)}></input>

            <label>Humidity</label>
            <input onChange={(e) => setNewHumidity(e.target.value)}></input>

            <label>Pressure</label>
            <input onChange={(e) => setNewPressure(e.target.value)}></input>
            <button onClick={(e) => postNewWd(e)}>Submit</button>

            </form>
            {/** Mapping over the weather data and displaying it */}
            {wds.map((wd, index) => (
                <div className="userContainer" key={index}>
                    <div className="new-post">
                        <h3>Weather Data:</h3>
                        Wind: {wd.wind}<br></br>
                        Humidity: {wd.humidity}<br></br>
                        Pressure: {wd.pressure}<br></br>
                        <button onClick={() => deleteWds(wd.id)}>Delete</button>
                    </div>
                    {/** Form for updating weather data */}
                    <form className="update">
                        <h3>Update Weather Data</h3>
                        <label>Update Wind</label>
                        <input onChange={(e) => setUpdateWind(e.target.value)}></input>

                        <label>Update Humidity</label>
                        <input onChange={(e) => setUpdateHumidity(e.target.value)}></input>

                        <label>Update Pressure</label>
                        <input onChange={(e) => setUpdatePressure(e.target.value)}></input>
                        <button onClick={(e) => updateWds(e, wd)}>Update</button>
                    </form>
                </div>
            ))}
        </div>
    )
}