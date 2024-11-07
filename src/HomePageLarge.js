import React from "react";
import School from "./School";
import SkillsLarge from "./SkillsLarge";

function HomePageLarge(props){

    let pageWidth = document.getElementById("root").clientWidth;

    function sizeChange() {
        pageWidth = document.getElementById("root").clientWidth;
        if (pageWidth < 800){
            return document.location.reload();
        }
    }

    window.addEventListener("resize", sizeChange);

    let {school1, school2, school3,
    city1, city2, city3,
    degree1, degree2, degree3,
    date1, date2, date3,
    skillType1, skillType2, skillType3, skillType4,
    skills1, skills2, skills3, skills4} = props.props;

    const bioDiv =
        <div className="homeNameDiv-lg">
            <div className="homeNameTextDiv border border-secondary">
                <h3 className="text-black my-4">Jonathan Stern</h3>
                <p className="small">Brooklyn, NY - 201.906.0125 -<span> </span>
                <br />
                <a href="mailto:jstern.dev@gmail.com"
                    className="text-black small">Email</a> -<span> </span>
                    <a href="https://www.linkedin.com/in/jstern-dev/"
                    className="text-black small">LinkedIn</a> -<span> </span>
                    <a href="https://github.com/jstern718"
                    className="text-black small">GitHub</a></p>
                <div className="text-start p-3 m-n1">
                    <p className="bio-paragraph">Software engineer with experience
                    and grit looking for an opportunity to make an impact;
                    eager to take on ownership over projects and to put skills
                    to use at a challenging junior engineer position – and to
                    leverage past experience working in fast-paced environments
                    and with client communication, in-depth research, attention
                    to detail, and analytical problem-solving skills.</p>
                </div>
            </div>
        </div>

    console.log("HomePageLarge");


    return(
        <div className="home p-3">
            <div className="row col-12">
                <img src="/LicEdited.jpeg" alt="dockImg" className="col-8" />
                <div className="home-name-space col-4 bg-white">
                    {bioDiv}
                </div>
            </div>
            <div className="row homeSpace">
                <div className="col-4 my-3 homeSpace">
                    <h4 className="text-light education-title">Education</h4>
                    <div className="card-bg education-card">
                        <School className="school1" school={school1} city={city1}
                            degree={degree1} date={date1} />
                        <School className="school2" school={school2} city={city2}
                            degree={degree2} date={date2} />
                        <School className="school3" school={school3} city={city3}
                            degree={degree3} date={date3} />
                    </div>
                </div>
                <div className="col-7 my-3 mx-4 p-0">
                    <h4 className="text-light skill-title">Skills</h4>
                    <div className="row homeSpace skillSpace">
                        <SkillsLarge skillType={skillType1} skills = {skills1} />
                        <SkillsLarge skillType={skillType2} skills = {skills2} />
                        <SkillsLarge skillType={skillType3} skills = {skills3} />
                        <SkillsLarge skillType={skillType4} skills = {skills4} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HomePageLarge;
