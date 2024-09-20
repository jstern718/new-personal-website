import React from "react";
import School from "./School";
import SkillsLarge from "./SkillsLarge";

function HomePageLarge(props){

    let {school1, school2, school3,
    city1, city2, city3,
    degree1, degree2, degree3,
    date1, date2, date3,
    skillType1, skillType2, skillType3,
    skills1, skills2, skills3} = props.props;

    const bioDiv =
        <div className="homeNameDiv-lg">
            <div className="homeNameTextDiv">
                <h2>Jonathan Stern</h2>
                <p>Brooklyn, NY - 201.906.0125 -<span> </span>
                <a href="jstern.dev@gmail.com"
                    className="text-light">Email</a> -<span> </span>
                    <a href="https://www.linkedin.com/in/jstern-dev/"
                    className="text-light">LinkedIn</a> -<span> </span>
                    <a href="https://github.com/jstern718"
                    className="text-light">GitHub</a></p>
                <div className="text-start">
                    <p className="px-4">Software engineer seeking to put full stack skills to use in a
                challenging junior engineer role — and to leverage past
                experience with client communication, working under strict
                deadlines, in-depth research, attention to detail, public
                speaking and working with and managing teams.</p>
                </div>
            </div>
        </div>

    console.log("HomePageLarge");


    return(
        <div className="home p-3">
            <br/>
            {bioDiv}
            <br/>
            <div className="row homeSpace">
                <div className="col-7 my-3 mx-4 p-0">
                    <h4 className="text-light">Skills</h4>
                    <div className="row homeSpace">
                        <SkillsLarge skillType={skillType1} skills = {skills1} />
                        <SkillsLarge skillType={skillType2} skills = {skills2} />
                        <SkillsLarge skillType={skillType3} skills = {skills3} />
                    </div>
                </div>
                <div className="col-4 my-3 homeSpace">
                    <h4 className="text-light">Education</h4>
                    <div className="card-bg ">
                        <School school={school1} city={city1}
                            degree={degree1} date={date1} />
                        <School school={school2} city={city2}
                            degree={degree2} date={date2} />
                        <School school={school3} city={city3}
                            degree={degree3} date={date3} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePageLarge;
