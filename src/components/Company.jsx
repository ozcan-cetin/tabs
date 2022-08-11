import React, { useState } from 'react'

const Company = ({list, setValue, value}) => {
// const [active, setActive] = useState(false)


  return (
    <div className='btnDiv me-5 d-lg-flex flex-lg-column text-center'>
        {list.map((item, index)=>{
            return(
                <button key={item.id} onClick={()=>setValue(index)}  className={`mx-2 px-2  ${value === index && "brd"}`}>{item.company}</button>
            )
        })}
    </div>
  )
}

export default Company