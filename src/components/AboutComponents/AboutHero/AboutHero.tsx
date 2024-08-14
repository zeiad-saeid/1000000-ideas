import { useState, useRef, useEffect } from "react";
import images from "../../../images";
import { useTranslation } from "react-i18next";
import axios from "axios";

function AboutHero() {
  const { t, i18n } = useTranslation(["about", "translation"]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const [aboutData, setAboutData] = useState([]);
  const ref = useRef(null);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  async function aboutusApi() {
    let { data } = await axios.get(
      `https://milionideas.com/dashboard/api/about-us`
    );
    setAboutData(data.abouts);
  }

  useEffect(() => {
    aboutusApi();
  }, []);

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
  }, [aboutData, t]);

  return (
    <div className="flex w-[100%] h-full mt-11 gap-10 justify-center items-start md:flex-col md:px-8 mb-[60px] md:w-full md:h-full relative">
      <div className="aboutright w-[45%] h-full md:w-full">
        <img
          className={`w-full h-full  object-cover mt-5
            ${
              i18n.language === "ar"
                ? "rounded-br-[150px] "
                : "rounded-bl-[150px]"
            }
            `}
          src={images.aboutusHeroSection}
          alt="aboutusHeroSection"
        />
      </div>
      <div className="aboutleft w-[45%] text-[14px] mb-8 mt-[10px] md:w-full relative">
        <div className="title absolute">
          <p className="font-bold text-[36px] mb-5 top-0 left-0 w-full">
            {t("about_hero.about_title_1")}
          </p>
          {aboutData.map((aboutTitle, index) => (
            <h2
              key={index}
              className="text-[32px] top-[40px] mb-5 left-0 w-full"
            >
              {i18n.language === "ar"
                ? aboutTitle.title_ar
                : aboutTitle.title_en}
            </h2>
          ))}
        </div>
        <div className="pt-[80px] mt-[30px]">
          {aboutData.map((aboutDesc, index) => (
            <p
              style={{ wordWrap: "break-word", whiteSpace: "normal" }}
              key={index}
              className={`text-[20px] ${
                isExpanded ? "" : "line-clamp-6"
              } w-[100%] mt-[23px]`}
              ref={index === 0 ? ref : null}
            >
              {i18n.language === "ar" ? aboutDesc.desc_ar : aboutDesc.desc_en}
            </p>
          ))}
          {showReadMore && (
            <button
              onClick={handleReadMore}
              className="mt-4 text-blue-500 hover:text-blue-700 focus:outline-none"
            >
              {isExpanded
                ? t("about_hero.read_less")
                : t("about_hero.read_more")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
