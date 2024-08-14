import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const ProjectImage = ({ projectData }) => {
  const { i18n } = useTranslation(["singleportfolio"]);

  return (
    <>
      <div className="section1">
        {projectData?.images?.length > 0 && (
          <div className="proj-image flex  items-center justify-center mt-[151px] gap-[149px] md:flex-col ">
            <div className="image-left">
              <img
                src={projectData?.images[0]?.image}
                alt="project-image"
                className="w-[376px] rounded-[30px] shadow-lg h-[606px] object-cover "
              />
            </div>
            <div className="image-right">
              <img
                src={projectData?.images[1]?.image}
                alt="project-image"
                className="w-[376px] rounded-[30px] shadow-lg h-[606px] object-cover "
              />
            </div>
          </div>
        )}

        <p
          className="w-full text-[32px] font-bold px-20 mt-[110px] mb-[117px]"
          style={{ wordWrap: "break-word", whiteSpace: "normal" }}
        >
          {i18n.language === "ar"
            ? projectData?.short_description_ar
            : projectData?.short_description_en}
        </p>
      </div>
    </>
  );
};

export default ProjectImage;
