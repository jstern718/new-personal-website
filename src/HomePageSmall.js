import React from "react";
import School from "./School";
import SkillsSmall from "./SkillsSmall";

function HomePageSmall(props){

    console.log("props", props);

    let pageWidth = document.getElementById("root").clientWidth;

    function sizeChange() {
        pageWidth = document.getElementById("root").clientWidth;
        if (pageWidth >= 800){
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
        <div className="">
            <div className="homeNameTextDiv-sm p-1">
                <h2 className="m-4">Jonathan Stern</h2>
                <p>Brooklyn, NY - 201.906.0125 -<span> </span>
                <a href="jstern.dev@gmail.com"
                    className="text-black">Email</a> -<span> </span>
                    <a href="https://www.linkedin.com/in/jstern-dev/"
                    className="text-black">LinkedIn</a> -<span> </span>
                    <a href="https://github.com/jstern718"
                    className="text-black">GitHub</a></p>
                <div className="personal-summary">
                    <p className="px-4 py-3"> Software engineer with experience
                    and grit looking for an opportunity to make an impact;
                    eager to take on ownership over projects and to put skills
                    to use at a challenging junior engineer position – and to
                    leverage past experience working in fast-paced environments
                    and with client communication, in-depth research, attention
                    to detail, and analytical problem-solving skills.
                    </p>
                </div>
            </div>
        </div>

    console.log("HomePageSmall");

    return(
        <div className="home p-3">
            <img src="/LicEdited.jpeg" alt="dockImg" className="col-12" />
            <br/>
            {bioDiv}
            <br/>
            <div>
                <hr />
                <h3 className="text-secondary fw-bolder py-4">- Skills -</h3>
            </div>

            <SkillsSmall skillType={skillType1} skills = {skills1} />
            <SkillsSmall skillType={skillType2} skills = {skills2} />
            <SkillsSmall skillType={skillType3} skills = {skills3} />
            <SkillsSmall skillType={skillType4} skills = {skills4} />
            <br />
            <div>
                <hr />
                <h3 className="text-secondary fw-bolder pt-4 align-items-center">- Education -</h3>
            </div>
            <div className="card-bg ">
                <School school={school1} city={city1}
                    degree={degree1} date={date1} />
                <School school={school2} city={city2}
                    degree={degree2} date={date2} />
                <School school={school3} city={city3}
                    degree={degree3} date={date3} />
            </div>
        </div>
    );
}

export default HomePageSmall;