import React from "react";

function School({school, city, degree, date}) {

    return (
      <div className="card SchoolCard mt-3 mb-4 mx-2 d-flex flex-column flex-fill">
            <div className="card-body">
                <h6 className="card-title mt-2 mb-0"><span className="fw-bold">{school}</span></h6>
                <p className="card-text m-0">{city}</p>
                <p className="card-text schoolText mb-0 mt-2">{degree} <br/> {date}</p>
            </div>
      </div>
    );
  }

export default School;