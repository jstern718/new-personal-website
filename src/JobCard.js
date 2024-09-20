import React from "react"

function Job({position, firm, city, dates, description}) {

    console.log("description", description);
    console.log("position", position);

    return (
            <div className="job-card-bg">
                <h3 className="card-title mt-3">{position}</h3>
                <p className="card-text job-text-color m-2 text-start mt-4 mb-4"><span className="fw-bold">{firm}</span> -- <span className="fst-italic">{city}</span> -- {dates}</p>
                <ul className="card-text jptext-color m-2 text-start card-txt">
                    {description && description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}


                </ul>
            </div>
    );
  }

export default Job;