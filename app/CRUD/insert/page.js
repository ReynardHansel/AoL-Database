export default function Insert({ searchParams }) {

  switch (searchParams.value) {
    case 'sailors':
      return (
        <form className="form">
          <div className="input-section">
            <label>Insert Sailor's name</label>
            <input className="input" type="text" required />
          </div>

          <div className="input-section">
            <label>Insert Sailor's rating</label>
            <input className="input" type="number" required min="1" max="10" />
          </div>

          <div className="input-section">
            <label>Insert Sailor's age</label>
            <input className="input" type="number" min="20" max="80" required />
          </div>

          <button type="submit" className="subm-btn">Submit</button>
        </form>
      )

    case 'boats':
      return (
        <form className="form">
          <div className="input-section">
            <label>Insert Boat name</label>
            <input className="input" type="text" required />
          </div>

          <div className="input-section">
            <label>Insert Boat color</label>
            <input className="input" type="text" required />
          </div>

          <button type="submit" className="subm-btn">Submit</button>
        </form>
      )

    case 'reserves':
      return (
        <form className="form">
          <div className="input-section">
            <label>Insert Sailor's id</label>
            <input className="input" type="number" required />
          </div>

          <div className="input-section">
            <label>Insert Boat's id</label>
            <input className="input" type="number" required />
          </div>

          <div className="input-section">
            <label>Insert Reserve date</label>
            <input className="input" type="date" required />
          </div>

          <button type="submit" className="subm-btn">Submit</button>
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