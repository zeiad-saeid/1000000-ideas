import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ProjectTech = ({projectData}) => {
  const { t, i18n } = useTranslation(["singleportfolio"]);

  return (
    <div className="tech-used md:items-center md:justify-center sm:ml-[20px] ">
      <h3 className={i18n.language === 'ar' ? 'text-[32px] mr-[146px] font-semibold mt-[188px] md:flex-col ' : 'text-[32px] ml-[146px] font-semibold mt-[188px] md:flex-col'}>
        {t('hero.tech_title')}
      </h3>
      <div className={i18n.language === 'ar' ? 'programlangparent flex gap-[41px] mr-[146px] mt-[58px] md:flex-col' : 'programlangparent flex gap-[41px] ml-[146px] mt-[58px] md:flex-col'}>
        {projectData?.technologies?.map((technology, index) => (
          <div key={index} className="programlang w-[148px] mt-[55px] h-[56px] gap-[15px] bg-[#F6F7F9] flex items-center justify-center border rounded-[10px] pr-[30px]">
            <img className='w-[30%]' src={technology.icon} alt={technology[`name_${i18n.language}`]} />
            <p className='text-[14px] font-semibold'>{technology[`name_${i18n.language}`]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectTech;
