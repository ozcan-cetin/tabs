import React from 'react'

const Company = ({list, setValue}) => {

  return (
    <div>
        {list.map((item, i)=>{
            return(
                <button key={item.id} onClick={()=>setValue(i)}>{item.company}</button>
            )
        })}
    </div>
  )
}

export default Company