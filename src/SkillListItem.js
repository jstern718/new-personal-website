import React from "react"
import { v4 as getId } from 'uuid';

function SkillListItem({skillItem}) {

    // console.log("skillItem", skillItem)

    return (
                <li className="m-0 p-0 align-start" key={getId()}>{skillItem}</li>
    );
  }

export default SkillListItem;