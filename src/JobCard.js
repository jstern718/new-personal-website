import React from "react"

function Job({position, firm, city, dates, description}) {

    console.log("description", description);
    console.log("position", position);

    return (
        <div>
            <div className="job-card-bg">
                <h5 className="card-title mt-3">{position}</h5>
                <p className="card-text job-text-color m-2 text-start mt-4 mb-2">
                    <span className="fw-bold">{firm}</span> --
                    <span className="fst-italic">{city}</span> --
                    <span>{dates}</span>
                </p>
                <ul className="card-text jptext-color m-2 text-start card-txt">
                    {description && description.map((item, index) => (
                        <div className="job-bullet">
                            <li key={index}>{item}</li>
                        </div>

                    ))}
                </ul>
            </div>
        </div>
    );
  }

export default Job;