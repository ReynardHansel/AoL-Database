export default function SailorUpdate() {
  return (
    <form className="form">
      <div className="input-section">
        <label>Insert Sailor's ID to be replaced</label>
        <input
          className="input"
          type="number"
          required
          //   value={sailorName}
          //   onChange={(e) => handleChange(e, setSailorName)}
        />
      </div>

      <div className="input-section">
        <label>Insert Sailor's new name</label>
        <input
          className="input"
          type="text"
          required
          //   value={sailorName}
          //   onChange={(e) => handleChange(e, setSailorName)}
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
          //   value={sailorRating}
          //   onChange={(e) => handleChange(e, setSailorRating)}
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
          //   value={sailorAge}
          //   onChange={(e) => handleChange(e, setSailorAge)}
        />
      </div>

      <button type="submit" className="subm-btn">
        Submit
      </button>
    </form>
  );
}

//! Note: Don't forget to add handleSubmit function to the button
