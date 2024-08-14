import React, { useEffect, useState } from 'react';
import { MdOutlineLightbulb } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

const ProjectProcess = ({ projectData }) => {
  const { t, i18n } = useTranslation(["singleportfolio"]);
 



  return (
    <>
      <div className={i18n.language === 'ar' ? 'section4 md:flex-col  md:justify-center md:items-center flex w-full justify-center gap-[181px] mt-[100px] pr-[170px] md:pr-[50px]' : 'section4 md:flex-col  md:justify-center md:items-center flex w-full justify-center gap-[181px] mt-[100px] pl-[170px] md:pl-[50px]'}>
        <div className="right-challeng w-[40%] md:w-full">
          <h3 className='text-[36px] font-semibold mb-20 md:mb-10 mt-[150px]'>
            <span style={{ fontFamily: 'sans-serif' }} className='text-[#FF3E54] mr-5'>02</span>
            {t('hero.process_title')}
          </h3>
          {projectData?.process?.map((process, index) => (
            <div key={index}>
              <div className="info1 flex items-center gap-4 mb-4">
                <div className="icon-1 w-8 h-8 md:w-10 md:h-10 bg-[#FF3E54] flex items-center justify-center rounded-lg">
                  <MdOutlineLightbulb className='text-[white] md:text-sm' />
                </div>
                <div className="content">
                  <p style={{ wordWrap: "break-word", whiteSpace: "normal" }} className={i18n.language === 'ar' ? 'text-[24px] font-semibold md:text-[16px]' : 'text-[24px] font-semibold md:text-[16px]'}>{process[`title_${i18n.language}`]}</p>
                </div>
              </div>
              <p style={{ wordWrap: "break-word", whiteSpace: "normal" }} className={i18n.language === 'ar' ? 'text-[16px] leading-7 md:text-[18px] mb-[15px]' : 'text-[16px] leading-7 md:text-[18px] mb-[15px]'}>
                {process[`text_${i18n.language}`]}
              </p>
            </div>
          ))}
        </div>
        <div className={i18n.language === 'ar' ? 'left-challeng w-[50%] md:w-[80%]' : 'left-challeng w-[50%] md:w-[80%]'}>
          <div className="image-left w-full mt-[140px] md:mt-[50px] md:flex md:justify-center items-center" >
            {projectData?.images?.length > 0 &&  (
              <img 
                src={projectData?.images[2]?.image} 
                alt="project-image" 
                
                className={i18n.language === 'ar' ?"rounded-[30px] shadow-lg md:flex-row w-[376px] h-[606px] object-cover md:ml-[50px]" : "rounded-[30px] shadow-lg md:flex-row w-[376px] h-[606px] object-cover md:mr-[50px]"  }
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectProcess;
