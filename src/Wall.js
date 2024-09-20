import React from "react";

function Wall(props){


    const skills1 = ["Javascript", "Python", "HTML", "CSS", "SQL"];
    const skills2 = ["React", "Express", "Node", "Django", "Flask", "PostgreSQL", "SQLite", "SQLAlchemy", "Bootstrap", "MUI"];
    const skills3 = ["Jest", "Unittest", "React Testing Library", "Jasmine", "SuperTest",  "VSCode", "Git", "Github"];
    const combinedSkills = skills1.concat(skills2, skills3, skills1, skills2, skills3);


    return (
        <div className="wall">
            {Array.from({ length: 80 }).map((_, i) => (
                <div key={i} className="square four">
                    <p>{combinedSkills[i]}</p>
                </div>
        ))}
        </div>
    );


}

export default Wall;