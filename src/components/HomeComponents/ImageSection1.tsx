import { useTranslation } from "react-i18next";

const ImageSection1 = () => {
  const { t } = useTranslation(["home", "translation"]);

  return (
    <>
      <div className={`w-full h-32 bg-fixed bg-hero-image1 relative my-10`}>
        <div className="absolute w-full h-full bg-blue-400 opacity-50"></div>
        <div className="w-full h-full flex justify-center items-center">
          <h2 className="text-center text-4xl z-10 text-white md:text-xl">
            {t("home_hero_section4.quote")}
          </h2>
        </div>
      </div>
    </>
  );
};

export default ImageSection1;
