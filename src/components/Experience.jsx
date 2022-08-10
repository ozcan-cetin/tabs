import React from 'react'

const Experience = ({info, value}) => {
    const{title, company, dates, duties} = info[value]
    // if(info){
    //     return(
            // const {id, title} = info
    //     )
    // }
  return (
    <div>
       <h1>{title}</h1>
       <h1>{company}</h1>
       <h1>{dates}</h1>
       <p>{duties}</p>
    </div>
  )
}

export default Experience