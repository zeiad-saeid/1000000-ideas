import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <div>
       <h3 className='text-center flex items-center justify-center  text-fColor mb-[30px] mt-[73px] text-[96px]'>{title}</h3>
    <div className="about flex items-center justify-center gap-[21px]">
  <div className="w-[141px] h-[18px] bg-scolor  rounded-full"></div>
  <div className="w-[75px] h-[18px] bg-[#929292] rounded-full"></div>
  <div className="w-[32px] h-[18px] bg-[#929292]  rounded-full"></div>
    </div>
    </div>
  )
}

export default SectionTitle
