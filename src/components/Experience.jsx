import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Experience = ({ info, value }) => {
  const { title, company, dates, duties } = info[value];
  // if(info){
  //     return(
  // const {id, title} = info
  //     )
  // }
  return (
    <div>
      <h2>{title}</h2>
      <h5 className="company p-1 rounded-1">{company}</h5>
      <p className="fw-bold">{dates}</p>

      <ul className="p-0">
        {duties.map((duty) => (
          <li className="duty mb-2">
            <span className="me-1 text-primary">
              <FaAngleDoubleRight />
            </span>
            {duty}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
