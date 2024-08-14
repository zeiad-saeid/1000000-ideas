import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

import SectionTitle from "../../components/SectionTitle";
import images from "../../images";
import { Link, useParams } from "react-router-dom";
import "./Portfolio.scss";
const Portfolio = () => {
  const { t, i18n } = useTranslation(["portfolio", "translation"]);
  const params = useParams();
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { name: "All", label: t("all") },
    { name: "Mobile Application", label: t("mobileApplication") },
    { name: "Restaurant Website", label: t("restaurantWebsite") },
    { name: "School Website", label: t("schoolWebsite") },
    { name: "Construction Website", label: t("constructionWebsite") },
  ];

  const cards = [
    {
      title: t("gaykApp"),
      description: t("cardDescription"),
      icon: images.icon,
      category: "Mobile Application",
    },
    {
      title: t("constructionWebsiteCard"),
      description: t("cardDescription"),
      icon: images.icon,
      category: "Construction Website",
    },
    {
      title: t("schoolWebsiteCard"),
      description: t("cardDescription"),
      icon: images.icon,
      category: "School Website",
    },
    {
      title: t("carPartsApp"),
      description: t("cardDescription"),
      icon: images.icon,
      category: "Mobile Application",
    },
    {
      title: t("restaurantWebsiteCard"),
      description: t("cardDescription"),
      icon: images.icon,
      category: "Restaurant Website",
    },
    {
      title: t("gaykApp"),
      description: t("cardDescription"),
      icon: images.icon,
      category: "Mobile Application",
    },
    {
      title: t("constructionWebsiteCard"),
      description: t("cardDescription"),
      icon: images.icon,
      category: "Construction Website",
    },
    {
      title: t("carPartsApp"),
      description: t("cardDescription"),
      icon: images.icon,
      category: "Mobile Application",
    },
    {
      title: t("schoolWebsiteCard"),
      description: t("cardDescription"),
      icon: images.icon,
      category: "School Website",
    },
  ];

  const [portfolioData, setPortfolioData] = useState([]);
  const [allPortfolioData, setAllPortfolioData] = useState([]);
  const [portfolioCategory, setPortfolioCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const getPortfolioData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://milionideas.com/dashboard/api/projects"
      );
      const data = await response.json();
      setPortfolioData(data.projects);
      setAllPortfolioData(data.projects);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };
  const getPorftolioCategory = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://milionideas.com/dashboard/api/project-departments"
      );
      const data = await response.json();
      setPortfolioCategory(data.ProjectDepartments);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getPortfolioData();
    getPorftolioCategory();
  }, []);
  const handleTabClick = (tabName, id) => {
    setActiveTab(tabName);
    if (tabName !== "All") {
      let res = portfolioCategory
        .filter((projdep) => projdep.id === id)
        .map((projdep) => projdep.projects);
      setPortfolioData(res[0]);
    } else {
      setPortfolioData(allPortfolioData);
    }
  };
  useEffect(() => {
    if (params.tab && params.id) {
      setActiveTab(params.tab);
      handleTabClick(params.tab, params.id);
    } else {
      setActiveTab("All");
    }
  }, [params.tab, params.id]);
  if (isLoading) {
    return (
      <>
        <SectionTitle title={t("title")} />
        <p className="mb-16 mt-28 flex text-center justify-center items-center text-3xl font-bold text-pcolor md:px-6">
          {t("milionIdea")}
        </p>
        <div className="tabParent mt-10 flex justify-center items-center text-4xl font-bold text-pcolor">
          <h3>{t("ourWork")}</h3>
        </div>

        <div className="flex flex-wrap justify-center items-center mt-6 w-full h-screen">
          {i18n.language === "ar"
            ? "جاري تحميل فئات المشاريع"
            : "Loading Our Portfolio Categories..."}
        </div>
      </>
    );
  }

  return (
    <>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle title={t("title")} />
        <p className="mb-16 mt-28 flex text-center justify-center items-center text-3xl font-bold text-pcolor md:px-6">
          {t("milionIdea")}
        </p>
        <div className="tabParent mt-10 flex justify-center items-center text-4xl font-bold text-pcolor">
          <h3>{t("ourWork")}</h3>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-wrap justify-center items-center mt-6 w-full">
          {isLoading &&
            (i18n.language === "ar"
              ? "جاري تحميل فئات المشاريع"
              : "Loading Our Portfolio Categories...")}
          <button
            onClick={() => handleTabClick("All", 0)}
            className={`px-4 py-2 m-2 border rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:bg-scolor hover:text-white ${
              activeTab === "All"
                ? "bg-red-500 text-white"
                : "bg-white text-black border-gray-300"
            }`}
          >
            {t("all")}
          </button>
          {i18n.language === "ar" &&
            portfolioCategory?.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.name_ar, tab.id)}
                className={`px-4 py-2 m-2 border rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:bg-scolor hover:text-white ${
                  activeTab === tab.name_ar
                    ? "bg-red-500 text-white"
                    : "bg-white text-black border-gray-300"
                }`}
              >
                {tab.name_ar}
              </button>
            ))}
          {i18n.language === "en" &&
            portfolioCategory?.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.name_en, tab.id)}
                className={`px-4 py-2 m-2 border rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:bg-scolor hover:text-white ${
                  activeTab === tab.name_en
                    ? "bg-red-500 text-white"
                    : "bg-white text-black border-gray-300"
                }`}
              >
                {tab.name_en}
              </button>
            ))}
        </div>

        <div className="mt-[82px] w-full flex flex-wrap justify-center items-center mb-10 gap-x-[70px] px-4">
          <AnimatePresence>
            {i18n.language === "en" &&
              portfolioData?.map((card, index) => (
                <motion.div
                  key={index}
                  whileInView={{ y: [50, 0] }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="cardPortfolio bg-gray-100 p-6 w-[360px] h-[360px] rounded-lg shadow-lg shadow-gray-500 flex-col m-4"
                >
                  <Link
                    onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
                    to={`/portfolio/${card.id}`}
                    key={index}
                    className=""
                  >
                    <div className="cardIcon ml-4 w-[70px] h-[70px] bg-[#FFFFFF] mt-[30px] flex justify-center items-center rounded-lg">
                      <img
                        src={images.icon}
                        alt="card icon"
                        className="w-[40px] h-[40px]"
                      />
                    </div>
                    <div className="cardContent mt-4">
                      <h2 className="mt-[20px] font-bold text-pcolor ml-4 text-[20px]">
                        {card.name_en}
                      </h2>
                      <div className="about flex mt-4 gap-[10px] ml-4">
                        <div className="underline-1 w-[60px] h-[6px] bg-scolor rounded-full"></div>
                        <div className="underline-2 w-[20px] h-[6px] bg-scolor rounded-full"></div>
                      </div>
                      <p className="mt-4 px-4 text-gray-600 w-full break-words">
                        {card.short_description_en?.slice(0, 100)}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}

            {i18n.language === "ar" &&
              portfolioData?.map((card, index) => (
                <motion.div
                  key={index}
                  whileInView={{ y: [50, 0] }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="cardPortfolio bg-gray-100 p-6 w-[360px] h-[360px] rounded-lg shadow-lg shadow-gray-500 flex-col m-4"
                >
                  <Link
                    to={`/portfolio/${card.id}`}
                    key={index}
                    onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
                    className=""
                  >
                    <div className="cardIcon ml-4 w-[70px] h-[70px] bg-[#FFFFFF] mt-[30px] flex justify-center items-center rounded-lg">
                      <img
                        src={images.icon}
                        alt="card icon"
                        className="w-[40px] h-[40px]"
                      />
                    </div>
                    <div className="cardContent mt-4">
                      <h2 className="mt-[20px] font-bold text-pcolor ml-4 text-[20px]">
                        {card.name_ar}
                      </h2>
                      <div className="about flex mt-4 gap-[10px] ml-4">
                        <div className="underline-1 w-[60px] h-[6px] bg-scolor rounded-full"></div>
                        <div className="underline-2 w-[20px] h-[6px] bg-scolor rounded-full"></div>
                      </div>
                      <p className="mt-4 px-4 text-gray-600">
                        {card.short_description_ar?.slice(0, 100)}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full flex justify-center items-center my-10 ">
          <div className="relative w-[945px] h-[294px] flex justify-center items-center rounded-lg overflow-hidden mt-[102px] mb-[60px]">
            <img
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/7658355/pexels-photo-7658355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="video"
            />
            <div className="absolute inset-0 flex justify-center items-center ] bg-[#0E1F51] bg-opacity-70 rounded-lg">
              <div className="text-center text-white p-4">
                <p className="text-2xl font-semibold  text-center">
                  {t("historyQuote")}
                </p>

                <Link target="_blank" to="https://wa.me/00966565861697">
                  <button className="mt-4 px-6 py-2 bg-red-500 hover:bg-scolor hover:text-white text-white font-bold rounded">
                    {t("bookACall")}
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

export default Portfolio;
