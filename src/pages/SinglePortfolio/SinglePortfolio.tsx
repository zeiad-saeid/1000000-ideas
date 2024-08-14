import images from "../../images";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProjectTitle from "../SinglePortfolio/ProjectTitle";
import ProjectImage from "./ProjectImage";
import ProjectDesc from "./ProjectDesc";
import ProjectTech from "./ProjectTech";
import ProjectChalleng from "./ProjectChalleng";
import ProjectProcess from "./ProjectProcess";
import ProjectFeatures from "./ProjectFeatures";
import Client from "./Client";
import ProjectForm from "./ProjectForm";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePortfolio = () => {
  const { t, i18n } = useTranslation(["singleportfolio"]);
  const [projectsData, setProjectsData] = useState([]);
  const [singleProjectData, setSingleProjectData] = useState([]);
  const { id } = useParams();
  const projectId = Number(id);

  async function dataApi() {
    try {
      const { data } = await axios.get(
        `https://milionideas.com/dashboard/api/projects`
      );

      setProjectsData(data.projects);
      const project = data.projects.filter(
        (project) => project.id == projectId
      )[0];
      setSingleProjectData(project);
    } catch (error) {
      console.log("Error Message : ", error);
    }
  }

  useEffect(() => {
    dataApi();
  }, [projectId]);

  return (
    <>
      <motion.div
        whileInView={{
          y: [100, 50, 0],
          opacity: [0, 0, 1],
        }}
        transition={{ duration: 0.5 }}
      >
        <ProjectTitle projectData={singleProjectData} />
      </motion.div>
      <motion.div
        whileInView={{
          y: [100, 50, 0],
          opacity: [0, 0, 1],
        }}
        transition={{ duration: 0.5 }}
      >
        <ProjectImage projectData={singleProjectData} />
      </motion.div>
      <motion.div
        whileInView={{
          y: [100, 50, 0],
          opacity: [0, 0, 1],
        }}
        transition={{ duration: 0.5 }}
      >
        <ProjectDesc projectData={singleProjectData} />
      </motion.div>
      <motion.div
        whileInView={{
          y: [100, 50, 0],
          opacity: [0, 0, 1],
        }}
        transition={{ duration: 0.5 }}
      >
        <ProjectTech projectData={singleProjectData} />
      </motion.div>
      <div className="background-image mt-[55px]">
        <img
          src={images.background}
          className={i18n.language === "ar" ? "" : "rotate-180"}
          alt="background"
        />
      </div>
      <motion.div
        whileInView={{
          y: [100, 50, 0],
          opacity: [0, 0, 1],
        }}
        transition={{ duration: 0.5 }}
      >
        <ProjectChalleng projectData={singleProjectData} />
      </motion.div>

      <motion.div
        whileInView={{
          y: [100, 50, 0],
          opacity: [0, 0, 1],
        }}
        transition={{ duration: 0.5 }}
      >
        <ProjectProcess projectData={singleProjectData} />
      </motion.div>
      <motion.div
        whileInView={{
          y: [100, 50, 0],
          opacity: [0, 0, 1],
        }}
        transition={{ duration: 0.5 }}
      >
        <ProjectFeatures projectData={singleProjectData} />
      </motion.div>
      <motion.div
        whileInView={{
          y: [100, 50, 0],
          opacity: [0, 0, 1],
        }}
        transition={{ duration: 0.5 }}
      >
        <Client projectData={singleProjectData} />
      </motion.div>
      <motion.div
        whileInView={{
          y: [100, 50, 0],
          opacity: [0, 0, 1],
        }}
        transition={{ duration: 0.5 }}
      >
        <ProjectForm />
      </motion.div>
      {/* whatssapp button */}
      <motion.div className="text-center mt-12">
        <a
          href={singleProjectData?.project_link}
          target="_blank"
          className="inline-block py-4 px-6 bg-scolor rounded-lg text-white transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300"
        >
          {t("hero.project_link_button")}
        </a>
      </motion.div>

      <motion.div
        whileInView={{
          y: [100, 50, 0],
          opacity: [0, 0, 1],
        }}
        transition={{ duration: 0.5 }}
        className="contact-button"
      >
        <div className="w-full flex justify-center items-center my-10 ">
          <div className="relative w-[945px] h-[294px] max-h-full max-w-full flex justify-center items-center rounded-lg overflow-hidden mt-[102px] mb-[60px]">
            <img
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/7658355/pexels-photo-7658355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="video"
            />
            <div className="absolute inset-0 flex justify-center items-center ] bg-[#0E1F51] bg-opacity-70 rounded-lg">
              <div className="text-center text-white p-4">
                <p className="text-2xl font-semibold  text-center w-1/2 md:w-full flex items-center justify-center m-auto">
                  {" "}
                  {t("hero.contact")}
                </p>

                <Link target="_blank" to="https://wa.me/00966565861697">
                  <button className="mt-4 px-6 py-2 bg-red-500 hover:bg-scolor hover:text-white text-white font-bold rounded">
                    {t("hero.contact_button")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SinglePortfolio;
