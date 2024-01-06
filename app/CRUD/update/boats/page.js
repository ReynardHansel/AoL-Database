"use client";
import { useState, useEffect } from "react";

export default function SailorUpdate() {
  //* Variables to contain datas to be submitted to backend
  const [bid, setBid] = useState("");
  const [bname, setBName] = useState("");
  const [color, setColor] = useState("");

  //*Triggered when user inputs something
  const handleChange = (e, setStateFunc) => {
    setStateFunc(e.target.value);
  };

  //* Triggered when clicking submit button
  const handleSubmit = (e) => {
    e.preventDefault();

    //? Variables to be submitted as JSON object to backend
    const boatData = {
      bid: bid,
      bname: bname,
      color: color,
    };

    // console.log(boatData)

    fetch(`/api/update/updateboats`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(boatData),
    });

    setBid("");
    setBName("");
    setColor("");
  };

  return (
    <form className="form">
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
        <label>Insert Boat's new name</label>
        <input
          className="input"
          type="text"
          required
          value={bname}
          onChange={(e) => handleChange(e, setBName)}
        />
      </div>

      <div className="input-section">
        <label>Insert Boat's new color</label>
        <input
          className="input"
          type="text"
          required
          value={color}
          onChange={(e) => handleChange(e, setColor)}
        />
      </div>

      <button onClick={handleSubmit} type="submit" className="subm-btn">
        Submit
      </button>
    </form>
  );
}
