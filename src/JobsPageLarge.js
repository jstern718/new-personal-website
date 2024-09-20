import React from "react";
import Job from "./JobCard";

function JobsPageLarge(props){

    const {position1, firm1, city1, dates1, description1,
    position2, firm2, city2, dates2, description2,
    position3, firm3, city3, dates3, description3} = props.props;


    return (
        <div className="experience p-5">
            <h2>Experience</h2>
            <div className="card job-card-lg">
                <Job position={position1} firm={firm1} city={city1} dates={dates1} description={description1}/>
            </div>
            <br/>
            <div className="job-card-lg">
                <Job position={position2} firm={firm2} city={city2} dates={dates2} description={description2}/>
            </div>
            <br/>
            <h4 className="text-light">Prior Experience</h4>
            <div className="card job-card-lg">
                <Job position={position3} firm={firm3} city={city3} dates={dates3} description={description3}/>
            </div>
        </div>
    );

}



export default JobsPageLarge;