import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import images from "../../images";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const { t, i18n } = useTranslation(["home", "translation"]);
  // {t("home_hero.hero_title_1")}
  return (
    <>
      <div className="flex justify-start items-center w-full relative px-10 md:px-1 my-10 md:h-auto md:flex-col-reverse md:gap-10">
        <div className="w-1/3 md:hidden"></div>
        <div
          className={`w-[50%] xl:w-[70%] bg-white absolute ${
            i18n.language === "ar" ? "rounded-tl-[100px]" : "rounded-tr-[100px]"
          } top-[10%] py-4 px-12 flex justify-start items-start flex-col gap-8 md:block md:top-0 md:relative md:w-full`}
        >
          <h2 className="text-6xl font-semibold md:text-4xl lg:text-4xl mb-4">
            {t("home_hero.hero_title_1")}
          </h2>
          <p className="text-xl md:text-md lg:text-lg mb-4">
            {t("home_hero.hero_desc_1")}
          </p>
          <Link
            className="transition duration-300  flex justify-center items-center gap-2 px-10 py-4 rounded-md bg-gradient-to-r from-customBlueColor-400 to-customBlueColor-300 text-white hover:scale-105"
            to={"/portfolio"}
          >
            {t("home_hero.hero_button")}
            <FaArrowRight
              className={i18n.language === "ar" ? "rotate-180" : ""}
            />
          </Link>
        </div>
        <div className="w-3/4">
          <img
            className={`w-full h-full ${
              i18n.language === "ar"
                ? "rounded-tl-xl rounded-br-[100px]"
                : "rounded-tr-xl rounded-bl-[100px]"
            } object-cover`}
            src={images.heroImage}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
