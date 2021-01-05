import React from "react";

const Schedule = () => {
  return (
    <div className="Schedule-container row" id="schedule">
      <div className="check col-md-3">
        <label for="checkin">Check in</label>
        <input type="datetime-local" name="checkin"></input>
      </div>
      <div className="check col-md-3">
        <label for="checkout">Check out</label>
        <input type="datetime-local" name="checkout"></input>
      </div>
      <div className="check col-md-2">
        <label for="checkout">Check out</label>
        <input type="number" name="adult" value="2"></input>
      </div>
      <div className="check col-md-2">
        <label for="checkout">Check out</label>
        <input type="number" name="kid" value="4"></input>
      </div>
      <button className="my-btn-search col-md-2">Search</button>
    </div>
  );
};

export default Schedule;
