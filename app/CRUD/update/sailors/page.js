"use client";
import { useState, useEffect } from "react";

export default function SailorUpdate() {
  //* Variables to contain datas to be submitted to backend
  const [sid, setSid] = useState("");
  const [sName, setSName] = useState("");
  const [rating, setRating] = useState("");
  const [age, setAge] = useState("");

  //*Triggered when user inputs something
  const handleChange = (e, setStateFunc) => {
    setStateFunc(e.target.value);
  };

  //* Triggered when clicking submit button
  const handleSubmit = (e) => {
    e.preventDefault();

    //? Variables to be submitted as JSON object to backend
    const sailorData = {
      sid: sid,
      sname: sName,
      rating: rating,
      age: age,
    };

    // console.log(sailorData)

    fetch(`/api/update/updatesailors`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sailorData),
    });

    setSid("");
    setSName("");
    setRating("");
    setAge("");
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
        <label>Insert Sailor's new name</label>
        <input
          className="input"
          type="text"
          required
          value={sName}
          onChange={(e) => handleChange(e, setSName)}
        />
      </div>

      <div className="input-section">
        <label>Insert Sailor's new rating</label>
        <input
          className="input"
          type="number"
          required
          min="1"
          max="10"
          value={rating}
          onChange={(e) => handleChange(e, setRating)}
        />
      </div>

      <div className="input-section">
        <label>Insert Sailor's new age</label>
        <input
          className="input"
          type="number"
          min="20"
          max="80"
          required
          value={age}
          onChange={(e) => handleChange(e, setAge)}
        />
      </div>

      <button onClick={handleSubmit} type="submit" className="subm-btn">
        Submit
      </button>
    </form>
  );
}

//! Note: Don't forget to add handleSubmit function to the button
