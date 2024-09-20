import React from "react"
import HomePageLarge from "./HomePageLarge";
import HomePageSmall from "./HomePageSmall";


function Home(screenSize) {

    const homeScreenSize = screenSize.screenSize;

    const school1 = "Rithm School";
    const city1 = "remote";
    const degree1 = "Fullstack Web Development Bootcamp";
    const date1 = "July 2023";

    const school2 = "Boston Univ. School of Law";
    const city2 = "Boston, MA";
    const degree2 = "Juris Doctor (J.D)";
    const date2 = "May 2014";

    const school3 = "Columbia University";
    const city3 = "New York, NY";
    const degree3 = "Bachelor of Arts (B.A.)";
    const date3 = "May 2007";

    const skillType1 = "Languages";
    const skills1 = ["Javascript", "Python", "HTML", "CSS", "SQL"];

    const skillType2 = "Libraries & Frameworks";
    const skills2 = ["React", "Express", "Node", "Django", "Flask", "PostgreSQL", "SQLite", "SQLAlchemy", "Bootstrap", "MUI"];

    const skillType3 = "Testing & Tools";
    const skills3 = ["Jest", "Unittest", "React Testing Library", "Jasmine", "SuperTest",  "VSCode", "Git", "Github"];

        const props = {school1, school2, school3,
                       city1, city2, city3,
                       degree1, degree2, degree3,
                       date1, date2, date3,
                       skillType1, skillType2, skillType3,
                       skills1, skills2, skills3};

        console.log("props", props);
        console.log("homeScreenSize");

    if (homeScreenSize === 'large'){
        console.log("large screen return");
        return (
            <HomePageLarge props={props}/>
        );
    } else{
        console.log("small screen return");
        return(
            <HomePageSmall props={props}/>
        )
    }

}



export default Home;