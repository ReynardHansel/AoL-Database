"use client";
import { useState, useEffect } from "react";

export default function Delete({ searchParams }) {
  const [sailorID, setSailorID] = useState("");
  const [boatID, setBoatID] = useState("");

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
      sid: sailorID
    };
    const boatData = {
      bid: boatID
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

    fetch(`/api/delete/delete${searchParams.value}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: body_value,
    });

    setSailorID("");
  };

  switch (searchParams.value) {
    case "sailors":
      return (
        <form className="form">
          <div className="input-section">
            <label>Enter Sailor's id to be deleted</label>
            <input
              className="input"
              type="number"
              required
              value={sailorID}
              onChange={(e) => handleChange(e, setSailorID)}
            />
          </div>

          <button type="submit" className="subm-btn" onClick={handleSubmit}>
            Delete
          </button>
        </form>
      );

    case "boats":
      return (
        <form className="form">
          <div className="input-section">
            <label>Enter Boat's id to be deleted</label>
            <input 
              className="input" 
              type="number" 
              required 
              value={boatID}
              onChange={(e) => handleChange(e, setBoatID)}
            />
          </div>

          <button type="submit" className="subm-btn" onClick={handleSubmit}>
            Delete
          </button>
        </form>
      );

    case "reserves":
      return (
        <form className="form">
          <div className="flex gap-5">
            <div className="input-section items-end">
              <label>Enter Sailor id</label>
              <input 
                className="input w-1/2" 
                type="number" 
                required 
                value={reserveSailor}
                onChange={(e) => handleChange(e, setReserveSailor)}  
              />
            </div>

            <div className="input-section items-start">
              <label>Enter Boat id</label>
              <input 
                className="input w-1/2" 
                type="number" 
                required 
                value={reserveBoat}
                onChange={(e) => handleChange(e, setReserveBoat)}  
              />
            </div>
          </div>

          <div className="input-section">
            <label>Enter the specific date to be deleted</label>
            <input 
              className="input" 
              type="date" 
              required 
              value={reserveDate}
              onChange={(e) => handleChange(e, setReserveDate)}
            />
          </div>

          <button type="submit" className="subm-btn" onClick={handleSubmit}>
            Delete
          </button>
        </form>
      );

    default:
      return <p>Value error: {searchParams.value}</p>;
  }
}

//* Note:
//? Kenapa hrs enter sid, bid, sama date nya? Karena problemnya adalah bisa jadi 1 orang mesen 1 boat yg sama untuk beberapa wktu yg berbeda, dan kita gada reserves_id, jd gbs delete specific. Kl di kasus gtu satu"nya yg bikin unik ya cmn si date nya. Kl ga brti nnti smua reserve si orang itu bakal ke-delete (takutnya)

//* Even though you're only sending 1 data like sid only, you still have to make:
//*   const sailorData = {
//*       sid: sailorID
//*     };
//* Because:
//! 1. JSON.stringify() is stringifying an object
//! 2. The backend is expecting an sid, so if you don't package it in an object, you're sending only a number value (Ex: 0), but it's not expecting a number, it's expecting an sid with a value of a number instead