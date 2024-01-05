'use client'
import { useState, useEffect } from 'react'

export default function Insert({ searchParams }) {
  const [sailorName, setSailorName] = useState("");
  const [sailorRating, setSailorRating] = useState("");
  const [sailorAge, setSailorAge] = useState("");
  
  const handleChange = (e, setStateFunc) => {
    setStateFunc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const sailorData = {
      sname: sailorName,
      rating: sailorRating,
      age: sailorAge,
    };

    console.log(sailorData)

    fetch(`/api/insert/insert${searchParams.value}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sailorData)
    })

    setSailorName("");
    setSailorRating("");
    setSailorAge("");
  }

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
    case 'sailors':
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
              min="1" max="10"
              value={sailorRating}
              onChange={(e) => handleChange(e, setSailorRating)}
            />
          </div>

          <div className="input-section">
            <label>Insert Sailor's age</label>
            <input 
              className="input"
              type="number" min="20" max="80"
              required
              value={sailorAge}
              onChange={(e) => handleChange(e, setSailorAge)}
            />
          </div>

          <button onClick={handleSubmit} type="submit" className="subm-btn">Submit</button>
        </form>
      )

    case 'boats':
      return (
        <form className="form">
          <div className="input-section">
            <label>Insert Boat name</label>
            <input 
              className="input"
              type="text"
              required
              
            />
          </div>

          <div className="input-section">
            <label>Insert Boat color</label>
            <input 
              className="input"
              type="text"
              required
            />
          </div>

          <button onCLick={handleSubmit} type="submit" className="subm-btn">Submit</button>
        </form>
      )

    case 'reserves':
      return (
        <form className="form">
          <div className="input-section">
            <label>Insert Sailor's id</label>
            <input 
              className="input"
              type="number"
              required
            
            />
          </div>

          <div className="input-section">
            <label>Insert Boat's id</label>
            <input 
              className="input"
              type="number"
              required
            
            />
          </div>

          <div className="input-section">
            <label>Insert Reserve date</label>
            <input 
              className="input"
              type="date"
              required
            
            />
          </div>

          <button onCLick={handleSubmit} type="submit" className="subm-btn">Submit</button>
        </form>
      )
  
    default:
      return(
        <p>Value error: {searchParams.value}</p>
      )
  }

}

//* Note:
//* - break not needed for the switch case because each cases already has a return value, meaning the break statements is not reachable