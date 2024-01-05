"use client";
import { useState, useEffect } from "react";

export default function Insert({ searchParams }) {
  //* UseState variables for storing user inputs
  const [sailorName, setSailorName] = useState("");
  const [sailorRating, setSailorRating] = useState("");
  const [sailorAge, setSailorAge] = useState("");

  const [boatName, setBoatName] = useState("");
  const [boatColor, setBoatColor] = useState("");

  const [reserveSailor, setReserveSailor] = useState("")
  const [reserveBoat, setReserveBoat] = useState("")
  const [reserveDate, setReserveDate] = useState("")


  //*Triggered when user inputs something
  const handleChange = (e, setStateFunc) => {
    setStateFunc(e.target.value);
  };

  //* Triggered when clicking submit button
  const handleSubmit = (e) => {
    e.preventDefault();

    //? Variables to be submitted as JSON object to backend
    const sailorData = {
      sname: sailorName,
      rating: sailorRating,
      age: sailorAge,
    };
    const boatData = {
      bname: boatName,
      color: boatColor,
    };
    const reserveData = {
      sid: reserveSailor,
      bid: reserveBoat,
      days: reserveDate
    }

    //? Packaging data to be sent to backend based on searchParams.value
    let body_value;
    switch (searchParams.value) {
      case "sailors":
        body_value = JSON.stringify(sailorData);
        break;
      case "boats":
        body_value = JSON.stringify(boatData);
        break;
      case "reserves":
        body_value = JSON.stringify(reserveData);
        break;

      default:
        console.log("Error in building body_value data!");
    }

    // console.log(sailorData)

    fetch(`/api/insert/insert${searchParams.value}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body_value,
    });

    setSailorName("");
    setSailorRating("");
    setSailorAge("");
    setBoatName("")
    setBoatColor("")
    setReserveSailor("")
    setReserveBoat("")
    setReserveDate("")
  };

  //* Console log to test inserting values in input
  // useEffect(() => {
  //   console.log(sailorName)
  // },[sailorName])
  // useEffect(() => {
  //   console.log(sailorRating)
  // },[sailorRating])
  // useEffect(() => {
  //   console.log(sailorAge)
  // },[sailorAge])

  switch (searchParams.value) {
    case "sailors":
      return (
        <form className="form">
          <div className="input-section">
            <label>Insert Sailor's name</label>
            <input
              className="input"
              type="text"
              required
              value={sailorName}
              onChange={(e) => handleChange(e, setSailorName)}
            />
          </div>

          <div className="input-section">
            <label>Insert Sailor's rating</label>
            <input
              className="input"
              type="number"
              required
              min="1"
              max="10"
              value={sailorRating}
              onChange={(e) => handleChange(e, setSailorRating)}
            />
          </div>

          <div className="input-section">
            <label>Insert Sailor's age</label>
            <input
              className="input"
              type="number"
              min="20"
              max="80"
              required
              value={sailorAge}
              onChange={(e) => handleChange(e, setSailorAge)}
            />
          </div>

          <button onClick={handleSubmit} type="submit" className="subm-btn">
            Submit
          </button>
        </form>
      );

    case "boats":
      return (
        <form className="form">
          <div className="input-section">
            <label>Insert Boat name</label>
            <input
              className="input"
              type="text"
              required
              value={boatName}
              onChange={(e) => handleChange(e, setBoatName)}
            />
          </div>

          <div className="input-section">
            <label>Insert Boat color</label>
            <input
              className="input"
              type="text"
              required
              value={boatColor}
              onChange={(e) => handleChange(e, setBoatColor)}
            />
          </div>

          <button onClick={handleSubmit} type="submit" className="subm-btn">
            Submit
          </button>
        </form>
      );

    case "reserves":
      return (
        <form className="form">
          <div className="input-section">
            <label>Insert Sailor's id</label>
            <input
              className="input" 
              type="number"
              required
              value={reserveSailor}
              onChange={(e) => handleChange(e, setReserveSailor)}
            />
          </div>

          <div className="input-section">
            <label>Insert Boat's id</label>
            <input
              className="input" 
              type="number"
              required
              value={reserveBoat}
              onChange={(e) => handleChange(e, setReserveBoat)}
            />
          </div>

          <div className="input-section">
            <label>Insert Reserve date</label>
            <input
              className="input" 
              type="date"
              required
              value={reserveDate}
              onChange={(e) => handleChange(e, setReserveDate)}
            />
          </div>

          <button onClick={handleSubmit} type="submit" className="subm-btn">
            Submit
          </button>
        </form>
      );

    default:
      return <p>Value error: {searchParams.value}</p>;
  }
}

//* Note:
//* - break not needed for the switch case because each cases already has a return value, meaning the break statements is not reachable
