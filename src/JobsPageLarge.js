import React from "react";
import Job from "./JobCard";

function JobsPageLarge(props){

    const {position1, firm1, city1, dates1, description1,
    position2, firm2, city2, dates2, description2,
    position3, firm3, city3, dates3, description3,
    position4, firm4, city4, dates4, description4} = props.props;


    return (
        <div className="experience p-5">

            <div className="jobs-flex">
                <div className="job-card-lg mt-5">
                    <hr />
                    <h2>Experience</h2>
                    <hr />
                    <div className="mt-5 mb-3">
                        <Job position={position2} firm={firm2} city={city2} dates={dates2} description={description2}/>
                    </div>
                </div>
                <div className="job-card-lg2">
                    <div className="job-card-lg3">
                        <Job position={position1} firm={firm1} city={city1} dates={dates1} description={description1}/>
                    </div>
                </div>

            </div>
            <div>
                <div className="">
                    <Job position={position3} firm={firm3} city={city3} dates={dates3} description={description3}/>
                </div>
            </div>
            <div>
                <div>
                    <hr />
                    <h4 className="text-light">Prior Experience</h4>
                    <hr />
                </div>

                <div className="job-card-lg">
                    <Job position={position4} firm={firm4} city={city4} dates={dates4} description={description4}/>
                </div>
            </div>

        </div>
    );

}



export default JobsPageLarge;