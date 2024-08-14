import { Link } from "react-router-dom";
import images from "../../images";
import { useTranslation } from "react-i18next";

const HeroSection1 = () => {
  const { t, i18n } = useTranslation(["home", "translation"]);

  return (
    <>
      <div className="flex justify-between items-center w-full px-14 gap-5 md:flex-col py-5 md:px-6">
        <div className="flex justify-center items-center w-1/2 md:w-full ">
          <img
            className={`object-cover w-full h-full ${
              i18n.language === "ar"
                ? "rounded-tl-[140px]"
                : "rounded-tr-[140px]"
            } `}
            src={images.heroSection1}
            alt="hero section1 image"
          />
        </div>
        <div
          className={` flex justify-start items-start flex-col w-1/2 gap-14 shadow-2xl bg-white ${
            i18n.language === "ar" ? "rounded-tl-[140px]" : "rounded-tr-[140px]"
          }  p-10 md:w-full`}
        >
          <h2 className="text-3xl font-bold">
            {t("home_hero_section1.section_title")}
          </h2>
          <p className="text-lg">{t("home_hero_section1.section_desc")}</p>
          <Link
            className="transition duration-300  flex justify-center items-center gap-2 px-8 py-3 rounded-md bg-gradient-to-b from-customBlueColor-400 to-customBlueColor-300 text-white hover:scale-105"
            to={"/contact"}
          >
            {t("home_hero_section1.button")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection1;
