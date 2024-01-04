export default function Delete({ searchParams }) {
  switch (searchParams.value) {
    case 'sailors':
      return (
        <form className="form">
          <div className="input-section">
            <label>Enter Sailor's id to be deleted</label>
            <input className="input" type="number" required />
          </div>

          <button type="submit" className="subm-btn">Delete</button>
        </form>
      )      

    case 'boats':
      return (
        <form className="form">
          <div className="input-section">
            <label>Enter Boat's id to be deleted</label>
            <input className="input" type="number" required />
          </div>

          <button type="submit" className="subm-btn">Delete</button>
        </form>
      )      

    case 'reserves':
      return (
        <form className="form">
          <div className="flex gap-5">
            <div className="input-section items-end">
              <label>Enter Sailor id</label>
              <input className="input w-1/2" type="number" required />
            </div>            

            <div className="input-section items-start">
              <label>Enter Boat id</label>
              <input className="input w-1/2" type="number" required />
            </div>            
          </div>

          <div className="input-section">
            <label>Enter the specific date to be deleted</label>
            <input className="input" type="date" required />
          </div>

          <button type="submit" className="subm-btn">Delete</button>
        </form>
      )      
  
    default:
      return (
        <p>Value error: {searchParams.value}</p>
      )
      break;
  }
}

//* Note:
//? Kenapa hrs enter sid, bid, sama date nya? Karena problemnya adalah bisa jadi 1 orang mesen 1 boat yg sama untuk beberapa wktu yg berbeda, dan kita gada reserves_id, jd gbs delete specific. Kl di kasus gtu satu"nya yg bikin unik ya cmn si date nya. Kl ga brti nnti smua reserve si orang itu bakal ke-delete (takutnya)