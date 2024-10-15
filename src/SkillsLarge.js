import React from "react"
import { v4 as getId } from 'uuid';
import SkillListItem from "./SkillListItem";

function skillFunc(x){
    return <SkillListItem skillItem={x} key={getId()}/>
}

function SkillsLarge({skillType, skills}) {
    // console.log("skills", skills);
    let skillsLength = skills.length;

    return (
      <div className="col-4 card-bg m-2 p-2 d-flex flex-column flex-fill skillType homeSpace subSkillSpace">
        <h5 className="skillTypeTitles">{skillType}</h5>
        <div className="SkillCard">
            <div className="wall2">
                {Array.from({ length: skillsLength }).map((_, i) => (
                    <div key={i} className="square2">
                        <p className={`len${skills[i].length}`}>{skills[i]}</p>
                    </div>
            ))}
            </div>
            {/* <ul className="text-start"> */}
                {/* {skills && skills.map(skillFunc)} */}
            {/* </ul> */}
        </div>

      </div>
    );
  }

export default SkillsLarge;