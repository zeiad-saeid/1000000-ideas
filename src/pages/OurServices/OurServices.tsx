import { useRef, useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import images from "../../images";
import { ServicesContext } from "../../context/ServesContext/ServesContext";
import "./OurServices.scss";
import { AnimatePresence, motion } from "framer-motion";

const OurServices = () => {
  const { t, i18n } = useTranslation("ourservices");
  const { services, serviceDetails, loading, error } =
    useContext(ServicesContext);
  const ref = useRef(null);

  const [isExpanded, setIsExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const lineHeight = parseInt(
        window.getComputedStyle(ref.current).lineHeight,
        10
      );
      const maxLines = 6;
      const maxHeight = lineHeight * maxLines;
      setShowReadMore(ref.current.scrollHeight > maxHeight);
    }
  }, [services, serviceDetails, t]);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  if (loading) return <p>{t("loading")}</p>;
  if (error)
    return (
      <p>
        {t("error")}: {error}
      </p>
    );

  const textControl = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  return (
    <>
      <motion.div whileInView={{ y: [50, 0] }} transition={{ duration: 0.3 }}>
        <SectionTitle title={t("title")} />
        <p className="mb-16 mt-28 flex justify-center items-center text-center text-3xl font-bold text-pcolor">
          {t("description")}
        </p>
      </motion.div>
      <motion.div
        whileInView={{ y: [50, 0] }}
        transition={{ duration: 0.3 }}
        className="flex w-full h-full gap-10 justify-center items-start md:flex-col md:px-8 mb-16 md:w-full md:h-full relative"
      >
        <div className="serviceright w-[45%] h-full md:w-full">
          <img
            className={`w-full h-full object-cover mt-5 ${
              i18n.language === "ar"
                ? "rounded-br-[150px] "
                : "rounded-bl-[150px] "
            }`}
            src={serviceDetails.service_image}
            alt="serviceusHeroSection"
          />
        </div>
        <div className="serviceleft w-[45%] text-[14px] mb-8 mt-[10px] md:w-full relative">
          <div className="title absolute">
            <p className="font-bold text-[36px] mb-5 top-0 left-0 w-full md:text-[28px] md:mb-3">
              {t("visionTitle")}
            </p>
            <h2 className="text-[32px] top-[40px] mb-7 left-0 w-full md:text-[24px] md:top-[70px] md:mb-10 flex flex-col">
              <span>{t("visionTitle3")}</span>
            </h2>
          </div>
          <div
            style={{ wordWrap: "break-word", whiteSpace: "normal" }}
            className="mt-[100px] md:pt-[70px] md:mt-[60px]"
          >
            <p
              className={`text-[20px] w-full pt-[50px] mt-[23px] ${
                isExpanded ? "" : "line-clamp-6"
              }`}
            ></p>
            <p
              ref={ref}
              className={`text-[20px] w-full mt-[23px] ${
                isExpanded ? "" : "line-clamp-6"
              }`}
            >
              {i18n.language === "ar"
                ? serviceDetails.service_text_ar
                : serviceDetails.service_text}
            </p>
          </div>
          {showReadMore && (
            <button
              onClick={handleReadMore}
              className="mt-4 text-blue-500 hover:text-blue-700 focus:outline-none"
            >
              {isExpanded ? t("readLess") : t("readMore")}
            </button>
          )}
          <div className="icons flex mt-[63px] gap-[30px]">
            <div className="icon-1 flex w-[263px] h-auto pb-5">
              <div
                className={
                  i18n.language === "ar"
                    ? "icon-left flex justify-center items-center w-[70px] rounded-lg h-[70px]  ml-4"
                    : "icon-left flex justify-center items-center w-[70px] rounded-lg h-[70px]   mr-4"
                }
              >
                <img src={images.lighticon} alt="" />
              </div>
              <div className="icon-right">
                <h4 className="text-scolor text-[16px] font-bold ">
                  {t("visionTitle2")}
                </h4>
                <p>{t("visionDescription")}</p>
              </div>
            </div>
            <div className="icon-2 flex w-[263px] h-auto pb-5">
              <div
                className={
                  i18n.language === "ar"
                    ? "icon-left flex justify-center items-center w-[70px] rounded-lg h-[70px]  ml-4"
                    : "icon-left flex justify-center items-center w-[70px] rounded-lg h-[70px]   mr-4"
                }
              >
                <img src={images.staricon} alt="star" />
              </div>
              <div className="icon-right">
                <h4 className="text-scolor text-[16px] font-bold ">
                  {t("goalTitle")}
                </h4>
                <p>{t("goalDescription")}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <h3 className="text-center text-[40px] mt-[121px] font-extrabold">
        {t("title")}
      </h3>

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
                    {i18n.language === "ar" ? service.name_ar : service.name_en}
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
                      ? service.short_description_ar
                      : service.short_description_en}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default OurServices;
