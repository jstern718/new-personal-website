import React from "react";

function Wall(props){


    const skills1 = ["Javascript", "Python", "HTML", "CSS", "SQL"];
    const skills2 = ["React", "Express", "Node", "Django", "Flask", "PostgreSQL", "SQLite", "SQLAlchemy", "Bootstrap", "MUI"];
    const skills3 = ["Jest", "Unittest", "React Testing Library", "Jasmine", "SuperTest",  "VSCode", "Git", "Github"];
    const combinedSkills = skills1.concat(skills2, skills3, skills1, skills2, skills3);


    return (
        <div className="wall">
            <a href="https://www.amazon.com/ONIVA-Picnic-Brand-Portable-Reclining/dp/B0012RI37C?ref_=orc_rcmdn_wdgt_prep_d_3_image&th=1"></a>
        </div>
    );


}

export default Wall;