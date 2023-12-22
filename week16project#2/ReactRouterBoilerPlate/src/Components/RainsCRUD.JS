import { useEffect, useState } from "react";

export default function RainsCRUD() {
    // Define the API URL for rain data
    const RAIN_API_URL = 'https://656fb4806529ec1c62382673.mockapi.io/wa/rain'

    // State variables for managing rain data
    const [rains, setRains] = useState([{}]);

// State variables for capturing new rain data
    const [newDate, setNewDate] = useState("");
    const [newDay, setNewDay] = useState("");
    const [newTime, setNewTime] = useState("");
    const [newAmount, setNewAmount] = useState("");

// State variables for capturing updated rain data
    const [updateDate, setUpdateDate] = useState("");
    const [updateDay, setUpdateDay] = useState("");
    const [updateTime, setUpdateTime] = useState("");
    const [updateAmount, setUpdateAmount] = useState("");

    // Function to fetch rain data from the API
    function getRains() {
        fetch(RAIN_API_URL)
            .then(data => data.json())
            .then(data => setRains(data))
    }

    // UseEffect hook to fetch rain data when the component loads
    useEffect(() => {
        getRains();
        console.log(rains)
    }, []);
    
    // Function to delete rain data from the API
    function deleteRains(id) {
        fetch(`${RAIN_API_URL}/${id}`, {
            method: "DELETE",
        }).then(() => getRains())
    }

    // Function to post new rain data to the API
    function postNewRain(e) {
        e.preventDefault();

        fetch(RAIN_API_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                date: newDate,
                day: newDay,
                time: newTime,
                amount: newAmount,
            }),
        }).then(() => getRains());
        // clear out the from data
        setNewDate("");
        setNewDay("");
        setNewTime("");
        setNewAmount("");
    }

    // Function to update rain data in the API
    function updateRains(e, rainObject) {
        e.preventDefault();

        let updatedRainObject = {
            ...rainObject,
            // date: updateDate,
            // day: updateDay,
            // time: updateTime,
            // amount: updateAmount,
        }

        fetch(`${RAIN_API_URL}/${rainObject.id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedRainObject)
        }).then(() => getRains());

       setNewDate("");
        setNewDay("");
        setNewTime("");
        setNewAmount("");
    }

    function updateRainObject(field, value, rainObject) {
        // let updatedRainObject = {
        //     ...rainObject,
        //     [field]: value,
        // }
        // return updatedRainObject;
        rainObject[field] = value;

        
    }

    // Return the JSX to render
    return(
        <div className="rains">
        {/* Form to capture new rain data */}
            <form className="post">
                <label>Date</label>
                <input value={newDate} onChange={(e) => setNewDate(e.target.value)}></input>

                <label>Day</label>
                <input  value={newDay} onChange={(e) => setNewDay(e.target.value)}></input>

                <label>Time</label>
                <input  value={newTime} onChange={(e) => setNewTime(e.target.value)}></input>

                <label>Amount</label>
                <input value={newAmount}  onChange={(e) => setNewAmount(e.target.value)}></input>
                <button onClick={(e) => postNewRain(e)}>Submit</button>
            </form>

            {/* Map over the rain data and display it */}
            {rains.map((rain, index) => (
                <div className="userContainer" key={index}>
                    <div className="new-post">
                        <h3>Weather Data</h3>
                        Date: {rain.date}<br></br>
                        Day: {rain.day}<br></br>
                        Time: {rain.time}<br></br>
                        Amount: {rain.amount}<br></br>
                        <button onClick={() => deleteRains(rain.id)}>Delete</button>
                    </div>
                    <form className="update">
                        <h3>Update Rain Data</h3>
                        <label>Update Date</label>
                        <input value={newDate} onChange={(e) => updateRainObject('date', e.target.value, rain)}></input><br></br>

                        <label>Update Day</label>
                        <input value={newDay} onChange={(e) => updateRainObject('day', e.target.value, rain)}></input><br></br>

                        <label>Update Time</label>
                        <input value={newTime} onChange={(e) => updateRainObject('time', e.target.value, rain)}></input><br></br>

                        <label>Update Amount</label>
                        <input value={newAmount} onChange={(e) => updateRainObject('amount', e.target.value, rain)}></input><br></br>

                        <button onClick={(e) => updateRains(e, rain)}>Update</button>
                    </form>
                </div>
            ))}
        </div>
    )
}
