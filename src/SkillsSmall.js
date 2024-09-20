import React from "react"
import { v4 as getId } from 'uuid';
import SkillListItem from "./SkillListItem";

function skillFunc(x){
    return <SkillListItem skillItem={x} key={getId()}/>
}

function SkillsSmall({skillType, skills}) {
    // console.log("skills", skills);
    return (
      <div className="card-bg">
        <h5 className="">{skillType}</h5>
        <ul className="text-start">
            {skills && skills.map(skillFunc)}
        </ul>

      </div>
    );
  }

export default SkillsSmall;