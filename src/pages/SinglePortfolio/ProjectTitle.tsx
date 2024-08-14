import { useTranslation } from "react-i18next";
const ProjectTitle = ({ projectData }) => {
  console.log(projectData);
  const { i18n } = useTranslation(["singleportfolio"]);
  return (
    <>
      <div className="proj-title text-center text-[48px] font-bold mb-[81px] mt-[114px]">
        <h3>
          {i18n.language === "ar" ? projectData?.name_ar : projectData?.name_en}
        </h3>
        <p className="mt-6 text-lg px-10 md:px-4">
          {i18n.language === "ar" ? projectData?.text_ar : projectData?.text_en}
        </p>
      </div>
    </>
  );
};

export default ProjectTitle;
