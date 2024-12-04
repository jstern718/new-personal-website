import React from "react";
import School from "./School";
import SkillsLarge from "./SkillsLarge";
import anime from 'animejs/lib/anime.es.js';
import { useEffect } from "react";



function HomePageLarge(props){

    useEffect(() => {

        // let imgClass = document.querySelector(".img-class");
        // imgClass.style.opacity = 0;
        // let imgWidth = imgClass ? imgClass.offsetWidth : 0;
        // let imgHeight = imgClass ? imgClass.offsetHeight : 0;
        // let imgLeft = imgClass ? imgClass.offsetLeft : 0;
        // let imgTop = imgClass ? imgClass.offsetTop : 0;
        // let imgCover = document.createElement("div");
        // imgCover.className = "img-cover";
        // imgCover.style.width = `${imgWidth}px`;
        // imgCover.style.height = `${imgHeight}px`;
        // imgCover.style.left = `${imgLeft}px`;
        // imgCover.style.top = `${imgTop}px`;


        let tl1 = anime.timeline({});
        let tl2 = anime.timeline({});

        tl2.add({
            targets: '.subSkillSpace',
            delay: anime.stagger(1000,  {start: 500}),
            easing:'spring(1, 80, 20, 0)',
            duration: 200,
            translateY: [-3000, 0]
        });
        tl2.add({
            targets: '.square2',
            delay: anime.stagger(
                    200, {direction:'reverse'},
                ),
            easing:'spring(1, 80, 20, 0)',
            duration: 12000,
            translateY: [-3000, 0]
            });

        tl1.add({
            targets: '.snow',
            delay: anime.stagger(
                10, {direction:'alternate', start: 0}),
            easing: 'spring(1, 80, 20, 0)',
            duration: 13000,
            translateY: [-3000, 0]
        });
        tl1.add({
            targets: '.card-bg',
            backgroundColor: 'white',
        });
        tl1.add({
            targets: '.bio-paragraph',
            color: "#000000",
        });
        tl1.add({
            targets: '.snow',
            opacity: 0,
        });


    }, []);




    let snowArr = Array.from({ length: 2000 }, (_, i) => i);
    let vh = 2 * window.innerHeight;
    let vw = window.innerWidth;

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
            <div className="img-super-div row col-12">
                {snowArr.map((snow, index) => (
                    <div key={index} className="snow" style={{ backgroundColor: 'white',
                                                               height: '7px',
                                                               width: '7px',
                                                               margin: '0px',
                                                               padding: '0px',
                                                               borderRadius: '50%',
                                                               top: `${80 + vh * Math.random()}px`,
                                                               left: `${vw * Math.random()}px`, }}></div>
                ))}
                <img src="/LicEdited.jpeg" alt="dockImg" className="img-class col-8" />
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

export default HomePageLarge
