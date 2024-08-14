import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ServicesContext } from "../../context/ServesContext/ServesContext";
import { Link } from "react-router-dom";

// const services = [
//   { name: "Frontend Engineers", icon: <FaCode /> },
//   { name: "Angular Developers", icon: <FaAngular /> },
//   {
//     name: "AI and ML Engineers Deep Learning/Machine Vision/NLP",
//     icon: <FaRobot />,
//   },
//   { name: "Application Security Engineers", icon: <FaLock /> },
//   { name: "Fullstack Engineers", icon: <FaCog /> },
//   { name: "DevOps + DevSecOps Engineers", icon: <MdOutlineSecurity /> },
//   { name: "Data Scientist / Data Engineers", icon: <FaDatabase /> },
//   { name: "iOS and Android Developers", icon: <FaMobileAlt /> },
//   { name: "UI/UX Engineers", icon: <IoIosBrowsers /> },
//   { name: "PHP Developers", icon: <DiPhp /> },
//   { name: "Project Managers", icon: <FaProjectDiagram /> },
//   { name: "Solution Architects", icon: <FaUserShield /> },
//   { name: "QA Engineers", icon: <IoIosAnalytics /> },
//   { name: "WordPress CMS Developers", icon: <FaWordpress /> },
//   { name: "Business Analyst", icon: <FiUserCheck /> },
//   { name: "Tech Leads / Team Leads", icon: <RiTeamFill /> },
//   { name: "Product Designer", icon: <MdOutlineDesignServices /> },
//   { name: "Mobile App Developers", icon: <FaMobileAlt /> },
//   { name: "Information Security Engineers", icon: <FaLock /> },
//   { name: "Golang Developers", icon: <SiGoland /> },
//   { name: "Database Admin", icon: <FaDatabase /> },
//   7,
// ];

const ServicesSection = () => {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { t, i18n } = useTranslation(["home", "translation"]);
  const { services } = useContext(ServicesContext);

  const getSkills = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get(
        "https://milionideas.com/dashboard/api/skills"
      );
      setSkills(result.data.skills);
      setIsLoading(false);
    } catch (error) {
      console.error("Error Ocurred when fetching data:", error);
    }
  };
  useEffect(() => {
    // getSkills();
  }, []);
  if (isLoading) {
    return (
      <>
        <h1>Loading....</h1>
      </>
    );
  }
  return (
    <>
      <div className="container mx-auto p-4 my-12">
        <h2 className="text-6xl mb-4 font-bold text-center text-pcolor md:text-4xl">
          {t("home_hero_section2.section_title")}
        </h2>
        <p className="md:text-lg text-2xl mb-4 text-center">
          {t("home_hero_section2.section_desc")}
        </p>
        <div className="CARDPARENT mt-[82px] w-full flex flex-wrap justify-center items-center mb-10 gap-x-[70px] px-4">
          <AnimatePresence>
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileInView={{ y: [50, 0] }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="card bg-gray-100 p-6 w-[360px] max-w-[auto] h-auto rounded-lg shadow-lg shadow-gray-500 flex-col m-4"
              >
                <Link
                  onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
                  to={`/services/${service.id}`}
                  key={index}
                  className=""
                >
                  <div className="cardIcon ml-4 w-[70px] h-[70px] bg-[#FFFFFF] mt-[30px] flex justify-center items-center rounded-lg">
                    <img
                      src={service.image}
                      alt="card icon "
                      className="w-[40px] h-[40px] object-cover"
                    />
                  </div>
                  <div className="cardContent mt-4 flex flex-col">
                    <h2 className="mt-[20px] font-bold text-pcolor ml-4 text-[20px]">
                      {i18n.language === "ar"
                        ? service.name_ar
                        : service.name_en}
                    </h2>
                    <div className="service flex mt-4 gap-[10px] ml-4">
                      <div className="underline-1 w-[60px] h-[6px] bg-scolor rounded-full"></div>
                      <div className="underline-2 w-[20px] h-[6px] bg-scolor rounded-full"></div>
                    </div>
                    <p
                      style={{ wordWrap: "break-word", whiteSpace: "normal" }}
                      className="mt-4 px-4 text-gray-600 text-wrap"
                    >
                      {i18n.language === "ar"
                        ? service.short_description_ar?.slice(0, 100)
                        : service.short_description_en?.slice(0, 100)}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {/* <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center bg-white border border-gray-300 p-5 rounded-lg shadow-md border-l-scolor border-l-8"
            >
              <div className="text-2xl text-gray-700 mx-4 w-8 h-8">
                <img
                  src={skill.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-gray-700 font-semibold">
                {i18n.language === "en" ? skill.title_en : skill.title_ar}
              </span>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default ServicesSection;
