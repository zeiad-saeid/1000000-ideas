import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaPython,
  FaReact,
  FaTwitter,
  FaWordpress,
} from "react-icons/fa";
import "./Footer.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Footer = () => {
  const { t, i18n } = useTranslation();
  const [settings, setSettings] = useState(null);
  const [allServices, setAllServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    getSettings();
    getServices();
  }, []);

  // const socials = [
  //   { icon: <FaLinkedinIn />, link: settings?.setting?.linkedin },
  //   { icon: <FaInstagram />, link: settings?.setting?.instgram },
  //   { icon: <FaFacebook />, link: settings?.setting?.facebook },
  //   { icon: <FaTwitter />, link: settings?.setting?.twitter },
  // ];

  const footerItems = {
    aboutus: {
      description: `${t("footer.about_us.description")}`,

      socials: [
        { icon: <FaLinkedinIn />, link: settings?.setting?.linkedin },
        { icon: <FaInstagram />, link: settings?.setting?.instgram },
        { icon: <FaFacebook />, link: settings?.setting?.facebook },
        { icon: <FaTwitter />, link: settings?.setting?.twitter },
      ],
    },
    services: [
      { title: `${t("footer.services.items.0")}`, link: "#" },
      { title: `${t("footer.services.items.1")}`, link: "#" },
      { title: `${t("footer.services.items.2")}`, link: "#" },
      { title: `${t("footer.services.items.3")}`, link: "#" },
      { title: `${t("footer.services.items.4")}`, link: "#" },
      { title: `${t("footer.services.items.5")}`, link: "#" },
    ],
    career: [
      {
        icon: <FaReact />,
        jobTitle: `${t("footer.career.positions.0.title")}`,
        jobDescription: `${t("footer.career.positions.0.experience")}`,
      },
      {
        icon: <FaWordpress />,
        jobTitle: `${t("footer.career.positions.1.title")}`,
        jobDescription: `${t("footer.career.positions.0.experience")}`,
      },
      {
        icon: <FaPython />,
        jobTitle: `${t("footer.career.positions.2.title")}`,
        jobDescription: `${t("footer.career.positions.0.experience")}`,
      },
    ],
    subscribeus: [
      {
        description: `${t("footer.subscribe_us.description")}`,
      },
    ],
  };
  return (
    <>
      <div className="millionideas__footer">
        <div className="flex justify-center items-center py-20 px-20 bg-pcolor text-white gap-5 md:flex-col">
          <div className="p-2 md:w-full w-1/4 w- flex justify-start items-start flex-col space-y-9 h-[350px]">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">
                {t("footer.about_us.title")}
              </h2>
              <div className="w-12 h-1 bg-scolor rounded-full"></div>
            </div>
            <p className="text-base leading-8">
              {footerItems.aboutus.description}
            </p>
            <div className="flex pt-20 gap-7">
              {footerItems.aboutus.socials.map((item, index) => (
                <a
                  className="flex text-3xl p-2 justify-between rounded-xl bg-white text-scolor"
                  key={index}
                  href={item.link}
                  target="_blank"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="p-2 md:w-full w-1/4 flex justify-start items-start flex-col space-y-9 h-[350px]">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">
                {t("footer.services.title")}
              </h2>
              <div className="w-12 h-1 bg-scolor rounded-full"></div>
            </div>
            <div className="space-y-5">
              {/* {footerItems.services.map((item, index) => (
                <a
                  className="flex justify-start items-start"
                  key={index}
                  href={item.link}
                >
                  {item.title}
                </a>
              ))} */}
              {allServices?.slice(0,7).map((category, index) => (
                <Link
                  key={index}
                  className="flex justify-start items-start"
                  to={`/services/${category.id}`}
                  onClick={() => {
                    scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  {i18n.language === "en" ? category.name_en : category.name_ar}
                </Link>
              ))}
            </div>
          </div>
          <div className="p-2 md:w-full w-1/4 flex justify-start items-start flex-col space-y-9 h-[350px]">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">{t("footer.career.title")}</h2>
              <div className="w-12 h-1 bg-scolor rounded-full"></div>
            </div>
            <div className="space-y-5">
              {footerItems.career.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-start items-start gap-4"
                >
                  <div className="text-5xl p-2 rounded-xl bg-white text-scolor">
                    {item.icon}
                  </div>
                  <div className="">
                    <h4 className="text-scolor">{item.jobTitle}</h4>
                    <p className="pt-2">{item.jobDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-2 md:w-full w-1/4 flex justify-start items-start flex-col space-y-9 h-[350px]">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">
                {t("footer.subscribe_us.title")}
              </h2>
              <div className="w-12 h-1 bg-scolor rounded-full"></div>
            </div>
            <p className="text-lg leading-8	">
              {footerItems.subscribeus[0].description}
            </p>
            <form className="w-full flex flex-col gap-5 pt-6 space-x-7">
              <input
                className=" p-3 rounded text-black outline-none align"
                type="email"
                placeholder={t("footer.subscribe_us.email_placeholder")}
              />
              <button
                type="submit"
                className="hover:bg-transparent hover:text-scolor border-2 border-transparent hover:border-scolor transition self-end w-1/2 bg-scolor text-white font-bold py-2 px-4 rounded-lg"
              >
                {t("footer.subscribe_us.button_text")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
