import React from "react";
import JobsPageLarge from "./JobsPageLarge";
import JobsPageSmall from "./JobsPageSmall";
import jobsBackground from './images/LicRedEdited.jpeg';

function Jobs(screenSize) {

    const position1 = "Fullstack Engineer (Contract)";
    const firm1 = "World Wizard";
    const city1 = "remote";
    const dates1 = "May 2023 - Present";
    const description1 = [` Worked collaboratively with a cross-functional team
                          – at early-stage startup focused on improving fantasy
                          gameplay w/ help of AI – to fix bugs blocking
                          production, particularly dealing with integration
                          issues re: PostgreSQL, SQLAlchemy, Docker, Redis
                          and AWS and engaging in frequent code reviews and
                          joint programming.`,
                        `Adapted user stories into new features by developing a
                        story and image generation system that integrates AI
                        (chatGPT,  Dall-E) into a character creation module,
                        improving user experience, and solving business problems
                        by creating a new revenue source.`,
                        `Developed and maintained scalable infrastructure —
                        using Python and Flask for API and Typescript and
                        Svelte on client-side — to keep track of in-app
                        currency that allows users to buy services. Added money
                        exchange and balance update to each premium service.`,
                        `Fixed bugs affecting persistence of data on form
                        submission by, inter alia, saving to local storage.`];

    const position2 = "Software Engineering Intern";
    const firm2 = "Evlos Technology";
    const city2 = "remote";
    const dates2 = "Dec 2023 - Present";
    const description2 = [`Designed and built a proof-of-concept, information
                          dashboard using a React frontend, an Express API,
                          and accessing an SQL database with nested model
                          data. Designed custom components — MUI, CSS — for
                          dashboard to create a uniform but adaptably styled
                          UI to improve user experience and assist with
                          comprehension of data.`,
                        `Developed and maintained a knowledge management app
                        with a RESTful API (built in Python and Django), an SQL
                        database (using Django’s ORM), and a frontend with a
                        keyboard-focused interface to increase speed and ease
                        of use (built using HTML with Django templates).`,
                        `Set up an AWS EC2 server running a Linux OS to allow
                        100% deployment of the app from the cloud allowing us
                        to offload the burden of local hosting.`];

    const position3 = "Software Engineer Intern";
    const firm3 = "Rithm School";
    const city3 = "remote";
    const dates3 = "July 2023";
    const description3 = [`Resolved complex bugs and tickets in a class-based
                          Django app; implemented logic in templates to create
                          a uniform visual ID across app to reduce
                          miscommunication re: task responsibility.`,
`                       Improved front-end templates by devising an automated
                        testing strategy including comprehensive processes for
                        prevention of issues, maintaining a 97% coverage in
                        Unittest in 2023.`];

    const position4 = "Associate Attorney (Litigation)";
    const firm4 = "Fleming Ruvoldt PLLC";
    const city4 = "New York, NY";
    const dates4 = "May 2016 - March 2020";
    const description4 = [`Identified risks in complex white-collar prosecutions
                          and advised clients on avoidance – including by
                          discovering exposure to obscure trafficking charges,
                          enabling us to prepare a defense; coordinated teams of
                          lawyers/paralegals to meet strict deadlines.`,
                        `Prepared manifold legal briefs, including on misuse of
                        evidence, leading to a mistrial in murder case NYPD
                        considered open-and-shut; served as client liaison,
                        including by preparing detained client to testify in
                        largest money laundering trial to date, helping reduce
                        requested 99 yrs. sentence to 2-3.`];

    const props = {position1, firm1, city1, dates1, description1,
                   position2, firm2, city2, dates2, description2,
                   position3, firm3, city3, dates3, description3,
                   position4, firm4, city4, dates4, description4}

    if (screenSize.screenSize >= 800){
        console.log("screen is large")
        return (
            <JobsPageLarge props={props}/>
        );
    } else{
        console.log("screen is small")
        return(
            <JobsPageSmall props={props}/>
        )
    }
}

export default Jobs;