import React from "react"
import { v4 as getId } from 'uuid';
import SkillListItem from "./SkillListItem";

function skillFunc(x){
    return <SkillListItem skillItem={x} key={getId()}/>
}

function SkillsSmall({skillType, skills}) {

    let skillsLength = skills.length;

    return (
        <div>
            <div className="card-bg mx-2 mt-0 px-2 py-0 d-flex flex-column flex-fill skillType homeSpace subSkillSpace">
                <h5 className="skillTypeTitles">{skillType}</h5>
                <div className="SkillCard">
                    <div className="wall2">
                            {Array.from({ length: skillsLength }).map((_, i) => (
                                <div key={i} className="square2">
                                    <p className={`len${skills[i].length}`}>{skills[i]}</p>
                                </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>


    );
  }

export default SkillsSmall;


{/* <div className="card-bg">
        <h5 className="">{skillType}</h5>
        <ul className="text-start">
            {skills && skills.map(skillFunc)}
        </ul>

      </div> */}