import { useTranslation } from "react-i18next";

import { IoIosStar } from "react-icons/io";

const ProjectDesc = ({ projectData }) => {
  const { i18n, t } = useTranslation(["singleportfolio"]);
  
  return (
    <div className="section2 flex md:items-center md:justify-center md:flex-col w-full justify-center mt-[180px] gap-[181px] px-10 pb-10">
      <div className="section-right w-[20%] md:w-[70%] bg-[#F8F9FC] rounded-lg shadow-lg px-10 mb-5 h-auto">
        <h4 className="text-[#94A3B8] font-semibold mt-10">{t("hero.ind")}</h4>
          <p >{i18n.language === 'ar' ? projectData?.department?.name_ar : projectData?.department?.name_en}</p>
        <h4 className="text-[#94A3B8] font-semibold mt-8 mb-2">
          {t("hero.loc")}
        </h4>

        <p>{i18n.language === 'ar' ? projectData?.location : projectData?.location}</p>

        <h4 className="text-[#94A3B8] font-semibold mt-8 mb-2">
          {t("hero.review")}
        </h4>
        <div className="rating flex gap-2 mb-10 md:mb-10 md:flex-col">
            <p >{projectData?.rate}</p>

          <div className="stars flex justify-center items-center ">
            <IoIosStar className="text-[#FFD233]" />
            <IoIosStar className="text-[#FFD233]" />
            <IoIosStar className="text-[#FFD233]" />
            <IoIosStar className="text-[#FFD233]" />
            <IoIosStar className="text-[#FFD233]" />
          </div>
        </div>
      </div>
      <div className="section-left w-[60%] md:w-[60%] mb-10">
        <h4 className="text-[#94A3B8] font-semibold mb-2">
          {t("hero.problem")}
        </h4>

          <p>
            {i18n.language === "ar" ? projectData?.problem_ar : projectData?.problem_en}
          </p>

        <h4 className="text-[#94A3B8] font-semibold mt-8 mb-2">
          {t("hero.solution")}
        </h4>
        <div className="mt-4">
        
           <p>
              {i18n.language === "ar"? projectData?.solution_ar:projectData?.solution_en}
            </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDesc;
