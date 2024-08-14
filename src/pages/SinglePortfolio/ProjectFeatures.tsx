import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ProjectFeatures = ({ projectData }) => {
  const { t, i18n } = useTranslation(["singleportfolio"]);

  return (
    <div className="section5 md:flex-col-reverse md:justify-center md:items-center flex w-full justify-center gap-[40px] mt-[100px] px-[50px]">
      <div className="right-challeng w-[40%] md:w-full md:mr-[-10px]">
        <div className="image-left w-full mt-[140px] md:mt-[50px] ">
          {projectData?.images?.length > 0 &&(
            <img 
              src={projectData?.images[0]?.image}
              alt="project-image" 
              className=" shadow-lg ] w-[376px] h-[606px] object-cover rounded-[30px] sm:ml-[20px] " 
            />
          )}
        </div>
      </div>
      <div className="left-challeng w-[40%] md:w-full">
        <h3 className='text-[36px] mb-20 md:mb-10 font-semibold mt-[150px]'>
          <span style={{ fontFamily: 'sans-serif' }} className={i18n.language === 'ar' ? 'text-[#11A4EA] ml-5' : 'text-[#11A4EA] mr-5' }>03</span> 
          {t('hero.features')}
        </h3>
        {projectData?.features?.map((feature, index) => (
          <React.Fragment key={index}>
            <div className="info1 flex items-center gap-4 mb-[100px] mt-5">
              <div className="icon-1 w-8 h-8 md:w-10 md:h-10 bg-[#11A4EA] flex items-center justify-center rounded-lg">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-white flex items-center justify-center border-white border-2 rounded-full">
                  <FaArrowRight className={i18n.language === 'ar' ? 'text-[#11A4EA] md:text-sm -rotate-180' : 'text-[#11A4EA] md:text-sm'}/>
                </div>
              </div>
              <div className="content">
                <p style={{wordWrap:"break-word",whiteSpace:"normal"}} className="text-[24px] font-semibold md:text-[16px]">
                  {feature[`title_${i18n.language}`]}
                </p>
              </div>
            </div>
            <p style={{wordWrap:"break-word",whiteSpace:"normal"}} className='text-[16px] leading-7 md:text-[18px] mb-[10px]'>
              {feature[`text_${i18n.language}`]}
            </p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default ProjectFeatures;
