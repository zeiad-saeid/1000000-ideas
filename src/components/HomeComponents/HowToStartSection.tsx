import { useTranslation } from "react-i18next";
import images from "../../images";

const HowToStartSection = () => {
  const { t } = useTranslation(["home", "translation"]);

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 px-8 py-14 bg-gradient-to-r from-customBlueColor-400 to-customBlueColor-300 text-white">
        <p className="text-lg">{t("home_hero_section3.how_to_start")}</p>
        <h2 className="font-semibold text-5xl">
          {t("home_hero_section3.easy_process")}
        </h2>
        <p className="text-lg w-1/3 text-center md:w-full">
          {t("home_hero_section3.we_are_specialized_in")}{" "}
        </p>
        <div className="flex justify-center items-center w-full md:flex-col flex-wrap">
          <div className="flex flex-col gap-6 justify-center items-center w-1/4 md:w-full h-[250px]">
            <div className="w-24 h-24">
              <img
                className="object-cover w-full h-full"
                src={images.youask}
                alt="youask"
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <p style={{fontFamily:'sans-serif'}} className="font-semibold text-2xl">01</p>
              <h4 className="font-semibold text-2xl">{t("home_hero_section3.you_ask")}</h4>
            </div>
          </div>
          <div className="flex flex-col gap-6 justify-center items-center w-1/4 md:w-full h-[250px]">
            <div className="w-24 h-24">
              <img
                className="object-cover w-full h-full"
                src={images.weproceedIcon}
                alt="youask"
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <p style={{fontFamily:'sans-serif'}} className="font-semibold text-2xl">02</p>
              <h4 className="font-semibold text-2xl">{t("home_hero_section3.we_proceed")}</h4>
            </div>
          </div>
          <div className="flex flex-col gap-6 justify-center items-center w-1/4 md:w-full h-[250px]">
            <div className="w-24 h-24">
              <img
                className="object-cover w-full h-full"
                src={images.negotiateIcon}
                alt="youask"
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <p style={{fontFamily:'sans-serif'}} className="font-semibold text-2xl">03</p>
              <h4 className="font-semibold text-2xl">{t("home_hero_section3.negotiate")}</h4>
            </div>
          </div>
          <div className="flex flex-col gap-6 justify-center items-center w-1/4 md:w-full h-[250px]">
            <div className="w-24 h-24">
              <img
                className="object-cover w-full h-full"
                src={images.youget}
                alt="youask"
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <p style={{fontFamily:'sans-serif'}} className="font-semibold text-2xl font-sans">04</p>
              <h4 className="font-semibold text-2xl">{t("home_hero_section3.you_get")}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToStartSection;
