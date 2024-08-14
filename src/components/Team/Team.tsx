import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import images from "../../images";
import "./Team.scss";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

// const members = [
//   {
//     name: "Sattam maghrabi",
//     job: "CEO",
//     image: images.member1,
//     socialMedia: [
//       { icon: <FaFacebook />, link: "#" },
//       { icon: <FaTwitter />, link: "#" },
//     ],
//   },
//   {
//     name: "Sattam maghrabi",
//     job: "CEO",
//     image: images.member1,
//     socialMedia: [
//       { icon: <FaFacebook />, link: "#" },
//       { icon: <FaTwitter />, link: "#" },
//     ],
//   },
//   {
//     name: "Sattam maghrabi",
//     job: "CEO",
//     image: images.member1,
//     socialMedia: [
//       { icon: <FaFacebook />, link: "#" },
//       { icon: <FaTwitter />, link: "#" },
//     ],
//   },
//   {
//     name: "Sattam maghrabi",
//     job: "CEO",
//     image: images.member1,
//     socialMedia: [
//       { icon: <FaFacebook />, link: "#" },
//       { icon: <FaTwitter />, link: "#" },
//     ],
//   },
// ];

const cardParentStyle = {
  borderRadius: "8px", // Optional: adjust the border radius as needed
};

export default function Team() {
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { t, i18n } = useTranslation(["home", "translation"]);

  const getTeamMembers = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get(
        "https://milionideas.com/dashboard/api/teams"
      );
      setMembers(result.data.teams);
      setIsLoading(false);
    } catch (error) {
      console.error("Error Ocurred when fetching data:", error);
    }
  };
  useEffect(() => {
    getTeamMembers();
  }, []);
  if (isLoading) {
    return (
      <>
        <h1>Loading....</h1>
      </>
    );
  }
  return (
    <>
      <div className="container mx-auto py-12 px-12">
        <h2 className="text-6xl mb-4 font-bold text-center text-pcolor md:text-4xl">
          {t("home_hero_section6.who_we_are")}
        </h2>
        <p className="md:text-lg text-2xl mb-4 text-center">
          {t("home_hero_section6.meet_our_team_desc")}
        </p>

        {/* <p className="text-center text-lg">
          {t("home_hero_section6.who_we_are")}
        </p>
        <h2 className="text-center text-[40px] font-bold">
          {t("home_hero_section6.meet_our_team")}
        </h2>
        <p className="text-gray-500 text-center">
          {t("home_hero_section6.meet_our_team_desc")}
        </p> */}
        <Swiper
          slidesPerView={1}
          spaceBetween={35}
          freeMode={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            reverseDirection: i18n.language === "ar" ? " ltr" : "rtl",
            // reverseDirection: true,
          }}
          loop={true}
          cssMode={i18n.language === "ar"}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 2, spaceBetween: 30 },
            890: { slidesPerView: 3, spaceBetween: 30 },
            1169: { slidesPerView: 4, spaceBetween: 40 },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="flex justify-center py-20"
        >
          {i18n.language === "en" &&
            members.map((member, index) => (
              <SwiperSlide
                key={index}
                className="p-6 h-80 border-[1px] border-gray-400 shadow-gray-500 text-center flex-col flex justify-center items-center"
              >
                <img
                  src={member?.image}
                  alt={member.name_en}
                  className="w-48 h-48 mx-auto mb-5 mask-image"
                />
                <h4 className="text-base font-semibold mb-2">
                  {member.name_en}
                </h4>
                <p className="text-gray-500 text-sm mb-3">
                  {member.sub_title_en}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href={member?.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white p-2 rounded-full bg-scolor"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href={member?.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white p-2 rounded-full bg-scolor"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href={`${member?.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white p-2 rounded-full bg-scolor"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          {i18n.language === "ar" &&
            members.map((member, index) => (
              <SwiperSlide
                key={index}
                className="p-6 h-80 border-[1px] border-gray-400 shadow-gray-500 text-center flex-col flex justify-center items-center"
              >
                <img
                  src={member?.image}
                  alt={member.name_en}
                  className="w-48 h-48 mx-auto mb-5 mask-image"
                />
                <h4 className="text-base font-semibold mb-2">
                  {member.name_en}
                </h4>
                <p className="text-gray-500 text-sm mb-3">
                  {member.sub_title_en}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href={member.facebook}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-white p-2 rounded-full bg-scolor"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href={member.twitter}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-white p-2 rounded-full bg-scolor"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href={member.linkedin}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-white p-2 rounded-full bg-scolor"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
}
