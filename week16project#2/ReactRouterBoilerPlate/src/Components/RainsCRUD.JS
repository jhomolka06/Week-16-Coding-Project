import { useEffect, useState } from "react";

export default function RainsCRUD( {
    const RAIN_API_URL = 'https://656fb4806529ec1c62382673.mockapi.io/wa/rain'

    const [rains, setRains] = useState([{}]);

    const [newDate, setNewDate] = useState("");
    const [newDay, setNewDay] = useState("");
    const [newTime, setNewTime] = useState("");
    const [newAmount, setNewAmount] = useState("");

    const [updateDate, setUpdateDate] = useState("");
    const [updateDay, setUpdateDay] = useState("");
    const [updateTime, setUpdateTime] = useState("");
    const [updateAmount, setUpdateAmount] = useState("");

    function getRains() {
        fetch(RAIN_API_URL)
            .then(data => data.json())
            .then(data => setRains(data))
    }

    useEffect(() => {
        getRains();
        console.log(rains)
    }, []);
    
    function deleteRains(id) {
        fetch(`${RAIN_API_URL}/${id}`, {
            method: "DELETE",
        }).then(() => getRains())
    }

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
    }

    function updateRains(e, rainObject) {
        e.preventDefault();

        let updatedRainObject = {
            ...rainObject,
            date: updateDate,
            day: updateDay,
            time: updateTime,
            amount: updateAmount,
        }

        fetch(`${RAIN_API_URL}/${rainObject._id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedRainObject)
        }).then(() => getRains());
    }

    return(
        <div className="rains">
            <form className="post">
                <label>Date</label>
                <input onChange={(e) => setNewDate(e.target.value)}></input>

                <label>Day</label>
                <input onChange={(e) => setNewDay(e.target.value)}></input>

                <label>Time</label>
                <input onChange={(e) => setNewTime(e.target.value)}></input>

                <label>Amount</label>
                <input onChange={(e) => setNewAmount(e.target.value)}></input>
                <button onClick={(e) => postNewRain(e)}>Submit</button>
            </form>

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
                        <input onChange={(e) => setUpdatedDate(e.target.value)}></input><br></br>

                        <label>Update Day</label>
                        <input onChange={(e) => setUpdatedDay(e.target.value)}></input><br></br>

                        <label>Update Time</label>
                        <input onChange={(e) => setUpdatedTime(e.target.value)}></input><br></br>

                        <label>Update Amount</label>
                        <input onChange={(e) => setUpdatedAmount(e.target.value)}></input><br></br>
                        <button onClick={(e) => updateRain(e, rain)}>Update</button>
                    </form>
                </div>
            ))}
        </div>
    )
}
