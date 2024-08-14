import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaRobot } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import { CiClock2, CiGlobe } from "react-icons/ci";
import { TiArrowSortedDown } from "react-icons/ti";
import {
  MdComputer,
  MdEmail,
  MdOutlineDraw,
  MdOutlineMail,
  MdOutlinePhoneInTalk,
  MdOutlineShowChart,
} from "react-icons/md";
import { SlScreenSmartphone } from "react-icons/sl";
import { IoAnalyticsSharp } from "react-icons/io5";
import { PortfolioContext } from "../../context/PortfolioContext";
import images from "../../images";
import { BsMenuButtonWideFill } from "react-icons/bs";
import axios from "axios";
const languages = [
  { code: "en", language: "English" },
  { code: "ar", language: "العربية" },
];
const icons = [
  { icon: <MdComputer className="mt-0.5 text-xl text-scolor" /> },
  { icon: <MdOutlineDraw className="mt-0.5 text-xl text-scolor" /> },
  { icon: <MdOutlineShowChart className="mt-0.5 text-xl text-scolor" /> },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [allServices, setAllServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [showPortfolioMenu, setShowPortfolioMenu] = useState(false);
  const [toggleShowList, setToggleShowList] = useState(false);
  const [settings, setSettings] = useState(null);

  const serviceMenu = useRef(null);
  const portfolioMenu = useRef(null);

  const closeOpenMenus = (e) => {
    if (showServicesMenu && !serviceMenu.current?.contains(e.target)) {
      setShowServicesMenu(false);
    }
    if (showPortfolioMenu && !portfolioMenu.current?.contains(e.target)) {
      setShowPortfolioMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus);

    return () => {
      document.removeEventListener("mousedown", closeOpenMenus);
    };
  });

  const { t, i18n } = useTranslation(["translation"]);

  const navbarItems = [
    { name: `${t("navbar.homepage")}`, link: "/" },
    { name: `${t("navbar.about")}`, link: "/about" },
    { name: `${t("navbar.our_services")}`, link: "/services" },
    { name: `${t("navbar.portfolio")}`, link: "/portfolio" },
    { name: `${t("navbar.blog")}`, link: "/blog" },
    { name: `${t("navbar.contact")}`, link: "/contact" },
  ];
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const getSettings = async () => {
    try {
      const result = await axios.get(
        "https://milionideas.com/dashboard/api/settings"
      );
      setSettings(result.data);
    } catch (error) {
      console.error("Error occurred when fetching data:", error);
    }
  };

  const getServices = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get(
        "https://milionideas.com/dashboard/api/services"
      );
      setAllServices(result.data.services);
    } catch (error) {
      console.error("Error Ocurred when fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getServices();
    getSettings();
    if (localStorage.getItem("i18nextLng") === "ar") {
      changeLanguage("ar");
      document.body.dir = i18n.dir();
    } else {
      document.body.dir = i18n.dir();
    }
  }, [i18n, i18n.language]);
  const { portfolioCategory } = useContext(PortfolioContext);

  return (
    <>
      <header className="millionideas__navbar">
        {/* <div className="millionideas__navbar--top"></div>
        <div className="millionideas__navbar--bottom"></div> */}
        <div className="bg-white w-full flex justify-between items-center h-10 border-b-[1px] border-gray-400 px-14 lg:hidden">
          <div className="w-1/3">
            <a href={`tel:${settings?.setting?.phone1}`}>
              <MdOutlinePhoneInTalk className="text-3xl" />
            </a>
          </div>
          <div className="w-1/3 flex justify-start items-start">
            <a href={`mailto:${settings?.setting?.email}`}>
              <MdOutlineMail className="text-3xl" />
            </a>
            {/* {t("navbar.email")}: {settings?.setting?.email} */}
          </div>
          <div className="w-1/3 flex justify-end items-center gap-8">
            <div
              className="drop-down"
              onClick={() => setToggleShowList(!toggleShowList)}
            >
              <div className="wrapper-navbar">
                <CiGlobe />
                {/* {i18n.language === "en" ? (
                  <>
                    <img src={images.us_flag} alt="" />
                    <div className="text">English</div>
                  </>
                ) : (
                  <>
                    {" "}
                    <img src={images.saudi_flag} alt="" />
                    <div className="text">العربية</div>
                  </>
                )} */}
              </div>
              {/* <IoMdArrowDropdown
                className={
                  toggleShowList ? "transition rotate-180" : "rotate-0"
                }
              /> */}
              <motion.div
                whileInView={{ scale: [0.5, 1] }}
                transition={{ duration: 0.5 }}
                className={toggleShowList ? "list show" : "list"}
              >
                <div className="item" onClick={() => changeLanguage("ar")}>
                  {" "}
                  <img src={images.saudi_flag} alt="" />
                  <div className="text">العربية</div>
                </div>
                <div className="item" onClick={() => changeLanguage("en")}>
                  <img src={images.us_flag} alt="" />
                  <div className="text">English</div>
                </div>
                {/* {i18n.language === "en" ? (
                  <div className="item" onClick={() => changeLanguage("ar")}>
                    {" "}
                    <img src={images.saudi_flag} alt="" />
                    <div className="text">العربية</div>
                  </div>
                ) : (
                  <div className="item" onClick={() => changeLanguage("en")}>
                    <img src={images.us_flag} alt="" />
                    <div className="text">English</div>
                  </div>
                )} */}
              </motion.div>
            </div>
            {/* <div className="text-3xl relative">
              <CiGlobe
                onClick={() =>
                  showLanguage ? setShowLanguage(false) : setShowLanguage(true)
                }
              />
              {showLanguage && (
                <div className="absolute">
                  <button
                    className="p-1 rounded-t-md bg-gray-50 border-gray-300 border-2 w-40 border-b-0"
                    onClick={() => {
                      setShowLanguage(false);
                      changeLanguage("en");
                    }}
                  >
                    English
                  </button>
                  <button
                    className="p-1 rounded-b-md bg-gray-50 border-gray-300 border-2 w-40"
                    onClick={() => {
                      setShowLanguage(false);
                      changeLanguage("ar");
                    }}
                  >
                    العربية
                  </button>
                </div>
              )}
            </div> */}
            {/* <div className="">
              {languages.map((lng) => (
                <button
                  key={lng.code}
                  className={
                    lng.code === i18n.language
                      ? "bg-red-500 m-2 p-2"
                      : "bg-red-100 m-2 p-2"
                  }
                  onClick={() => changeLanguage(lng.code)}
                >
                  {lng.language}
                </button>
              ))}
            </div> */}
            <div className="flex justify-center items-center gap-5 text-xl">
              <a href={settings?.setting?.linkedin} target="_blank">
                <FaLinkedinIn />
              </a>
              <a href={settings?.setting?.facebook} target="_blank">
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="bg-white w-full flex justify-between items-center h-14 px-14 shadow-lg shadow-gray-400 lg:h-16">
          <div className="w-1/4 lg:w-auto">
            <h2 className="text-3xl font-bold">
              <Link
                onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
                to={"/"}
                className="h-12 flex items-center justify-center gap-2"
              >
                <div className="w-12 h-12">
                  <img
                    src="/siteicon.png"
                    className="w-full h-full object-contain"
                    alt=""
                  />
                </div>
                {t("navbar.page_title")}
              </Link>
            </h2>
          </div>
          <div
            onClick={() => setShowMenu(true)}
            className="cursor-pointer hidden lg:block text-3xl"
          >
            <GiHamburgerMenu />
          </div>
          <div
            className={
              showMenu
                ? `absolute w-3/4 h-screen bg-white top-0 ${
                    i18n.language === "ar" ? "right-0" : "left-0"
                  }  z-50 transition ease-in-out delay-150`
                : `absolute w-3/4 h-screen bg-white top-0 ${
                    i18n.language === "ar" ? "-right-full" : "-left-full"
                  } -left-full z-50 transition ease-in-out delay-150`
            }
          >
            <div className="flex flex-col justify-between items-center p-6 w-full h-full ">
              <div className="flex justify-between items-center w-full mb-3">
                <div
                  className="drop-down"
                  onClick={() => setToggleShowList(!toggleShowList)}
                >
                  <div className="wrapper-navbar">
                    <CiGlobe />
                    {/* {i18n.language === "en" ? (
                  <>
                    <img src={images.us_flag} alt="" />
                    <div className="text">English</div>
                  </>
                ) : (
                  <>
                    {" "}
                    <img src={images.saudi_flag} alt="" />
                    <div className="text">العربية</div>
                  </>
                )} */}
                  </div>
                  {/* <IoMdArrowDropdown
                className={
                  toggleShowList ? "transition rotate-180" : "rotate-0"
                }
              /> */}
                  <motion.div
                    whileInView={{ scale: [0.5, 1] }}
                    transition={{ duration: 0.5 }}
                    className={toggleShowList ? "list show" : "list"}
                  >
                    <div className="item" onClick={() => changeLanguage("ar")}>
                      {" "}
                      <img src={images.saudi_flag} alt="" />
                      <div className="text">العربية</div>
                    </div>
                    <div className="item" onClick={() => changeLanguage("en")}>
                      <img src={images.us_flag} alt="" />
                      <div className="text">English</div>
                    </div>
                    {/* {i18n.language === "en" ? (
                  <div className="item" onClick={() => changeLanguage("ar")}>
                    {" "}
                    <img src={images.saudi_flag} alt="" />
                    <div className="text">العربية</div>
                  </div>
                ) : (
                  <div className="item" onClick={() => changeLanguage("en")}>
                    <imga src={images.us_flag} alt="" />
                    <div className="text">English</div>
                  </div>
                )} */}
                  </motion.div>
                </div>
                <div
                  onClick={() => setShowMenu(false)}
                  className="cursor-pointer text-3xl"
                >
                  <IoMdClose />
                </div>
              </div>
              <div className="w-10/12 flex flex-col justify-start items-start space-y-14 ">
                {navbarItems.map((item, index) => (
                  <NavLink
                    className="hover:bg-pcolor hover:text-white px-5 rounded-full text-3xl font-medium"
                    key={index}
                    to={item.link}
                    onClick={() => {
                      setShowMenu(false);
                      scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    {item.name}
                  </NavLink>
                ))}
                <div className="w-full flex justify-end items-end">
                  <Link
                    className="hover:bg-transparent hover:text-scolor border-2 border-transparent hover:border-scolor transition bg-scolor text-white font-bold py-3 px-5 rounded w-full"
                    to="https://wa.me/00966565861697"
                  >
                    {t("navbar.button")}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-3/4 xl:gap-0 lg:gap-2 flex justify-center items-center lg:hidden gap-8">
            {/* {navbarItems.map((item, index) => ( */}
            <NavLink
              className="hover:bg-pcolor hover:text-white px-3 lg:px-2 rounded-full font-semibold"
              // key={index}
              to={"/"}
              onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
            >
              {t("navbar.homepage")}
            </NavLink>
            <NavLink
              className="hover:bg-pcolor hover:text-white px-3 lg:px-2 rounded-full font-semibold"
              // key={index}
              to={"/about"}
              onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
            >
              {t("navbar.about")}
            </NavLink>
            <NavLink
              className="hover:bg-pcolor hover:text-white px-3 lg:px-2 rounded-full font-semibold flex relative"
              // key={index}
              to={"/services"}
              onClick={() => {
                scrollTo({ top: 0, behavior: "smooth" });
                setShowServicesMenu(false);
              }}
              onMouseEnter={() => {
                setShowPortfolioMenu(false);
                setShowServicesMenu(true);
              }}
            >
              {t("navbar.our_services")}
              <TiArrowSortedDown className="mt-0.5 text-xl" />
            </NavLink>
            {showServicesMenu && (
              <motion.div
                whileInView={{ scale: [0.5, 1] }}
                transition={{ duration: 0.5 }}
                ref={serviceMenu}
                onMouseLeave={() => setShowServicesMenu(false)}
                className="z-10 absolute top-[96px] bg-white flex justify-center items-center flex-col gap-6 px-1 py-4 rounded-lg"
              >
                {allServices ? (
                  allServices?.map((category, index) => (
                    <Link
                      key={index}
                      className=" px-4 rounded-full font-semibold flex justify-start items-start gap-3 w-full"
                      to={`/services/${category.id}`}
                      onClick={() => {
                        scrollTo({ top: 0, behavior: "smooth" });
                        setShowServicesMenu(false);
                      }}
                    >
                      <BsMenuButtonWideFill className="mt-0.5 text-xl text-scolor" />
                      <p>
                        {i18n.language === "en"
                          ? category.name_en
                          : category.name_ar}
                      </p>
                    </Link>
                  ))
                ) : (
                  <a className=" px-4 rounded-full font-semibold flex justify-start items-start gap-3 w-full">
                    <BsMenuButtonWideFill className="mt-0.5 text-xl text-scolor" />
                    <p>
                      {i18n.language === "en"
                        ? "Data is Loading..."
                        : "جاري تحميل البيانات"}
                    </p>
                  </a>
                )}

                {/* <NavLink
                  className=" px-4 rounded-full font-semibold flex justify-start items-start gap-3 w-full"
                  // key={index}
                  to={"/services/1"}
                  onClick={() => {
                    scrollTo({ top: 0, behavior: "smooth" });
                    setShowServicesMenu(false);
                  }}
                >
                  <MdOutlineDraw className="mt-0.5 text-xl text-scolor" />
                  <p> UI/UX</p>
                </NavLink>
                <NavLink
                  className=" px-4 rounded-full font-semibold flex justify-start items-start gap-3 w-full"
                  // key={index}
                  to={"/services/2"}
                  onClick={() => {
                    scrollTo({ top: 0, behavior: "smooth" });
                    setShowServicesMenu(false);
                  }}
                >
                  <MdComputer className="mt-0.5 text-xl text-scolor" />
                  <p>Production of computer graphics and animation</p>
                </NavLink>
                <NavLink
                  className="px-4 rounded-full font-semibold flex justify-start items-start gap-3 w-full"
                  // key={index}
                  to={"/services/3"}
                  onClick={() => {
                    scrollTo({ top: 0, behavior: "smooth" });
                    setShowServicesMenu(false);
                  }}
                >
                  <SlScreenSmartphone className="mt-0.5 text-xl text-scolor" />
                  <p>Application development</p>
                </NavLink>
                <NavLink
                  className="px-4 rounded-full font-semibold flex justify-start items-start gap-3 w-full"
                  // key={index}
                  to={"/services/4"}
                  onClick={() => {
                    scrollTo({ top: 0, behavior: "smooth" });
                    setShowServicesMenu(false);
                  }}
                >
                  <FaRobot className="mt-0.5 text-xl text-scolor" />
                  <p>Robot technologies</p>
                </NavLink>
                <NavLink
                  className="px-4 rounded-full font-semibold flex justify-start items-start gap-3 w-full"
                  // key={index}
                  to={"/services/5"}
                  onClick={() => {
                    scrollTo({ top: 0, behavior: "smooth" });
                    setShowServicesMenu(false);
                  }}
                >
                  <CiClock2 className="mt-0.5 text-xl text-scolor" />
                  <p>3D printing technology</p>
                </NavLink>
                <NavLink
                  className="px-4 rounded-full font-semibold flex justify-start items-start gap-3 w-full"
                  // key={index}
                  to={"/services/6"}
                  onClick={() => {
                    scrollTo({ top: 0, behavior: "smooth" });
                    setShowServicesMenu(false);
                  }}
                >
                  <IoAnalyticsSharp className="mt-0.5 text-xl text-scolor" />
                  <p>Systems analysis</p>
                </NavLink> */}
              </motion.div>
            )}
            <NavLink
              className="hover:bg-pcolor hover:text-white px-3 lg:px-2 rounded-full font-semibold flex relative"
              // key={index}
              to={"/portfolio"}
              onClick={() => {
                setShowPortfolioMenu(false);
                scrollTo({ top: 0, behavior: "smooth" });
              }}
              onMouseEnter={() => {
                setShowPortfolioMenu(true);
                setShowServicesMenu(false);
              }}
            >
              {t("navbar.portfolio")}
              <TiArrowSortedDown className="mt-0.5 text-xl" />
            </NavLink>
            {showPortfolioMenu && (
              <motion.div
                whileInView={{ scale: [0.5, 1] }}
                transition={{ duration: 0.5 }}
                ref={portfolioMenu}
                onMouseLeave={() => setShowPortfolioMenu(false)}
                className={
                  i18n.language === "ar"
                    ? "z-10 absolute right-[50%] top-[96px] bg-white flex justify-center items-center flex-col gap-6 px-1 py-4 rounded-lg"
                    : "z-10 absolute left-[50%] top-[96px] bg-white flex justify-center items-center flex-col gap-6 px-1 py-4 rounded-lg"
                }
              >
                {portfolioCategory ? (
                  portfolioCategory.map((category, index) => (
                    <NavLink
                      key={index}
                      className=" px-4 rounded-full font-semibold flex justify-start items-start gap-3 w-full"
                      // key={index}
                      to={
                        i18n.language === "en"
                          ? `/portfolio/${category.name_en}/${category.id}`
                          : `/portfolio/${category.name_ar}/${category.id}`
                      }
                      onClick={() => {
                        scrollTo({ top: 0, behavior: "smooth" });
                        setShowPortfolioMenu(false);
                      }}
                    >
                      <BsMenuButtonWideFill className="mt-0.5 text-xl text-scolor" />
                      <p>
                        {i18n.language === "en"
                          ? category.name_en
                          : category.name_ar}
                      </p>
                    </NavLink>
                  ))
                ) : (
                  <a className=" px-4 rounded-full font-semibold flex justify-start items-start gap-3 w-full">
                    <BsMenuButtonWideFill className="mt-0.5 text-xl text-scolor" />
                    <p>
                      {i18n.language === "en"
                        ? "Data is Loading..."
                        : "جاري تحميل البيانات"}
                    </p>
                  </a>
                )}
              </motion.div>
            )}
            <NavLink
              className="hover:bg-pcolor hover:text-white px-3 lg:px-2 rounded-full font-semibold"
              // key={index}
              to={"/blog"}
              onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
            >
              {t("navbar.blog")}
            </NavLink>
            <NavLink
              className="hover:bg-pcolor hover:text-white px-3 lg:px-2 rounded-full font-semibold"
              // key={index}
              to={"/contact"}
              onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
            >
              {t("navbar.contact")}
            </NavLink>
            {/*  ))} */}
          </div>
          <div className="w-1/4 flex justify-end items-end gap-8 lg:hidden">
            <Link
              className="text-sm hover:bg-transparent hover:text-scolor border-2 border-transparent hover:border-scolor transition bg-scolor text-white font-bold py-2 px-4 rounded"
              to="https://wa.me/00966565861697"
            >
              {t("navbar.button")}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
