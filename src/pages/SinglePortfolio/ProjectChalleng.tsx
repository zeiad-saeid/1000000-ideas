
import { FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ProjectChalleng = ({ projectData }) => {
  const { t, i18n } = useTranslation(["singleportfolio"]);
 

  return (
    <div className="section3 md:flex-col-reverse md:justify-center md:items-center flex w-full justify-center gap-[40px] mt-[100px] px-[50px]">
      <div className="right-challeng w-[40%] md:w-full">
        <div className="image-left w-full mt-[140px] md:mt-[50px] md:flex md:justify-center items-center">
          {projectData?.images?.length > 0 &&  (
            <img 
              src={projectData?.images[0]?.image} 
              
              alt="project-image" 
              className="rounded-[30px] shadow-lg sm:ml-[20px] w-[376px] h-[606px] object-cover" 
            />
          )}
        </div>
      </div>
      <div className="left-challeng w-[40%] md:w-full">
        <h3 className='text-[36px] mb-20 md:mb-10 font-semibold mt-[150px]'>
          <span style={{ fontFamily: 'sans-serif' }} className={i18n.language === 'ar' ? 'text-[#11A4EA] ml-5' : 'text-[#11A4EA] mr-5' }>01</span>
          {t('hero.challenges')}
        </h3>
        {projectData?.challenges?.map((challenge, index) => (
          <div key={index}>
            <div className="info1 flex items-center gap-4 mb-4 mt-5">
              <div className="icon-1 w-8 h-8 md:w-10 md:h-10 bg-[#11A4EA] flex items-center justify-center rounded-lg">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-white flex items-center justify-center border-white border-2 rounded-full">
                  <FaArrowRight className={i18n.language === 'ar' ? 'text-[#11A4EA] md:text-sm -rotate-180' : 'text-[#11A4EA] md:text-sm'} />
                </div>
              </div>
              <div className="content">
                <p style={{wordWrap:"break-word",whiteSpace:"normal"}} className="text-[24px] font-semibold md:text-[16px]">{challenge[`title_${i18n.language}`]}</p>
              </div>
            </div>
            <p style={{wordWrap:"break-word",whiteSpace:"normal"}} className='text-[16px] leading-7 md:text-[18px] mb-[10px]'>
              {challenge[`text_${i18n.language}`]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectChalleng;
