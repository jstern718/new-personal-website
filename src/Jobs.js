import React from "react";
import JobsPageLarge from "./JobsPageLarge";
import JobsPageSmall from "./JobsPageSmall";

function Jobs(screenSize) {

    const position1 = "Software Engineering Intern";
    const firm1 = "Evlos Technology";
    const city1 = "remote";
    const dates1 = "Dec 2023 - Present";
    const description1 = [`Designed and built an SQL database with model data
                        accessible via an API implemented in Express and a
                        frontend built in React.`,
                        `Used MUI to design model components with a uniform
                        style that can nonetheless be easily adapted to display
                        information in an easily intelligible manner.`
                       ];

    const position2 = "Software Engineer Intern";
    const firm2 = "Rithm School";
    const city2 = "remote";
    const dates2 = "July 2023";
    const description2 = [`Resolved complex bugs in Learning Information System,
                        an adaptable, class-based Django application serving
                        thousands of students and teachers across schools and
                        companies.`,
                        `Implemented logic in templates to increase visibility
                        of event responsibilities across the application,
                        creating uniform visual i.d. for event “ownership” and
                        reducing possibility of miscommunication.`,
                        `Employed model factories to devise a comprehensive
                        testing strategy for front-end template additions,
                        maintaining 97% coverage using unittest library.`,
                        `Developed a new feature using cron file and Slack API
                        integration to notify users of overdue assignments.`
                       ];

    const position3 = "Associate Attorney (Litigation)";
    const firm3 = "Fleming Ruvoldt PLLC";
    const city3 = "New York, NY";
    const dates3 = "May 2016 - March 2020";
    const description3 = [`Identified unexpected risks in complex white-collar
                        prosecutions and advised clients on how to avoid them,
                        including by discovering exposure to obscure trafficking
                        charges, enabling clients to prepare a defense.`,
                        `Prepared countless legal briefs, including on misuse of
                        evidence rules and fingerprint evidence, leading to a
                        mistrial in what prosecutors incorrectly saw as an
                        open-and-shut murder case.`,
                        `Served as liaison to clients, including by preparing an
                        incarcerated client to testify in the largest money
                        laundering trial to date, testimony that helped get a
                        2-3 year sentence vs. requested 99 yrs.`,
                        `Coordinated teams of lawyers and paralegals to meet
                        strict deadlines, often managing databases to facilitate
                        document review, gaining experience of client-side needs
                        and working w/ IT teams and programmers to fix bugs.`
                       ];

    const props = {position1, firm1, city1, dates1, description1,
                   position2, firm2, city2, dates2, description2,
                   position3, firm3, city3, dates3, description3}

    if (screenSize === 'large'){
        return (
            <JobsPageLarge props={props}/>
        );
    } else{
        return(
            <JobsPageSmall props={props}/>
        )
    }
}

export default Jobs;