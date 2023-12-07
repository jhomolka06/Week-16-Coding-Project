import { useState, useEffect } from "react";


export default function WdsCRUD() {
    const WD_API_URL = "https://656fb4806529ec1c62382673.mockapi.io/wa/WD";

    const [wds, setWds] = useState([]);

    const [newWind, setNewWind] = useState("");
    const [newHumidity, setNewHumidity] = useState("");
    const [newPressure, setNewPressure] = useState("");

    const [updateWind, setUpdateWind] = useState("");
    const [updateHumidity, setUpdateHumidity] = useState("");
    const [updatePressure, setUpdatePressure] = useState("");

    function getWds() {
        fetch(WD_API_URL)
            .then((data) => data.json())
            .then((data) => setWds(data));
    }

    useEffect(() => {
        getWds();
        console.log(wds)
    }, []);

    function deleteWds(id) {
        fetch(`${WD_API_URL}/${id}`, {
            method: "DELETE",
        }).then(() => getWds());
    }

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
            body: JSON.stringify(updatedWDObject),
        }).then(() => getWD());
    }

    return (
        <div className="wds">
            <form className="new-post">
            <label>Wind</label>
            <input onChange={(e) => setNewWind(e.target.value)}></input>

            <label>Humidity</label>
            <input onChange={(e) => setNewHumidity(e.target.value)}></input>

            <label>Pressure</label>
            <input onChange={(e) => setNewPressure(e.target.value)}></input>
            <button onClick={(e) => postNewWd(e)}>Submit</button>
            
            </form>

            {wds.map((wd, index) => (
                <div className="userContainer" key={index}>
                    <div className="new-post">
                        <h3>Weather Data:</h3>
                        Wind: {wd.wind}<br></br>
                        Humidity: {wd.humidity}<br></br>
                        Pressure: {wd.pressure}<br></br>
                        <button onClick={() => deleteWds(wd._id)}>Delete</button>
                    </div>
                    <form className="update">
                        <h3>Update Weather Data</h3>
                        <label>Update Wind</label>
                        <input onChange={(e) => setUpdateWind(e.target.value)}></input>

                        <label>Update Humidity</label>
                        <input onChange={(e) => setUpdateHumidity(e.target.value)}></input>

                        <label>Update Pressure</label>
                        <input onChange={(e) => setUpdatePressure(e.target.value)}></input>
                        <button onClick={(e) => updateWD(e, wd)}>Update</button>
                    </form>
                </div>
            ))}
        </div>
    )
}