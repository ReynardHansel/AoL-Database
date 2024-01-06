"use client";
import { useState, useEffect } from "react";

export default function ReserveUpdate() {
  //* Variables to contain datas to be submitted to backend
  const [sid, setSid] = useState("");
  const [bid, setBid] = useState("");
  const [days, setDays] = useState("");

  //*Triggered when user inputs something
  const handleChange = (e, setStateFunc) => {
    setStateFunc(e.target.value);
  };

  //* Triggered when clicking submit button
  const handleSubmit = (e) => {
    e.preventDefault();

    //? Variables to be submitted as JSON object to backend
    const reserveData = {
      sid: sid,
      bid: bid,
      days: days,
    };

    // console.log(reserveData)

    fetch(`/api/update/updatereserves`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reserveData),
    });

    setSid("");
    setBid("");
    setDays("");
  };

  return (
    <form className="form">
      <div className="input-section">
        <label>Insert Sailor's ID to be replaced</label>
        <input
          className="input"
          type="number"
          required
          value={sid}
          onChange={(e) => handleChange(e, setSid)}
        />
      </div>

      <div className="input-section">
        <label>Insert Boat's ID to be replaced</label>
        <input
          className="input"
          type="number"
          required
          value={bid}
          onChange={(e) => handleChange(e, setBid)}
        />
      </div>

      <div className="input-section">
        <label>Insert Boat's new reservation date</label>
        <input
          className="input"
          type="date"
          required
          value={days}
          onChange={(e) => handleChange(e, setDays)}
        />
      </div>

      <button onClick={handleSubmit} type="submit" className="subm-btn">
        Submit
      </button>
    </form>
  );
}
