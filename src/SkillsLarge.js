import React from "react"
import { v4 as getId } from 'uuid';
import SkillListItem from "./SkillListItem";

function skillFunc(x){
    return <SkillListItem skillItem={x} key={getId()}/>
}

function SkillsLarge({skillType, skills}) {
    // console.log("skills", skills);
    return (
      <div className="col-4 card-bg m-2 p-2 d-flex flex-column flex-fill skillType homeSpace">
        <h5 className="m-3">{skillType}</h5>
        <div className="SkillCard">
            <ul className="text-start">
                {skills && skills.map(skillFunc)}
            </ul>
        </div>

      </div>
    );
  }

export default SkillsLarge;