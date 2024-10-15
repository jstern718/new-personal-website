import React from "react";
import Job from "./JobCard";

function JobsPageSmall(props){

    const {position1, firm1, city1, dates1, description1,
    position2, firm2, city2, dates2, description2,
    position3, firm3, city3, dates3, description3,
    position4, firm4, city4, dates4, description4} = props.props;

    return (
        <div className="experience experience-sm p-3">
            <div>
                <hr />
                <h2>Experience</h2>
                <hr/>
            </div>

            <div className="m-2">
                <Job position={position1} firm={firm1} city={city1} dates={dates1} description={description1}/>
            </div>
            <div className="m-2">
                <Job position={position2} firm={firm2} city={city2} dates={dates2} description={description2}/>
            </div>
            <div className="m-2">
                <Job position={position3} firm={firm3} city={city3} dates={dates3} description={description3}/>
            </div>
            <div>
                <hr/>
                <h4 className="text-light">Prior Experience</h4>
                <hr/>
            </div>
            <div className="m-2">
                <Job position={position4} firm={firm4} city={city4} dates={dates4} description={description4}/>
            </div>
        </div>
    );

}

export default JobsPageSmall;