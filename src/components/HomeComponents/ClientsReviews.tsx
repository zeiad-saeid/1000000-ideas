import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import images from "../../images";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";

const ClientsReviews = () => {
  const [clients, setClients] = useState([]);
  const getClients = async () => {
    try {
      const result = await axios.get(
        "https://milionideas.com/dashboard/api/clients"
      );
      setClients(result.data.clients);
    } catch (error) {
      console.error("Error Ocurred when fetching data:", error);
    }
  };
  useEffect(() => {
    getClients();
  }, []);
  const { t, i18n } = useTranslation(["home", "translation"]);

  // const clients = [
  //   {
  //     name: "Khadeja",
  //     position: "CEO, AX Company",
  //     image: images.user1,
  //     review:
  //       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam",
  //   },
  //   {
  //     name: "Mohamed",
  //     position: "CEO, AX Company",
  //     image: images.user2,
  //     review:
  //       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam",
  //   },
  //   {
  //     name: "Omar",
  //     position: "CEO, AX Company",
  //     image: images.user3,
  //     review:
  //       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam",
  //   },
  //   {
  //     name: "Ahmed",
  //     position: "CEO, AX Company",
  //     image: images.user1,
  //     review:
  //       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam",
  //   },
  //   {
  //     name: "Ahmed",
  //     position: "CEO, AX Company",
  //     image: images.user1,
  //     review:
  //       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam",
  //   },
  // ];

  const pagination = {
    clickable: true,
    // renderBullet: function (index, className) {
    // return '<span class="' + className + '">' + (index + 1) + "</span>";
    // },
  };

  return (
    <>
      <div className="container mx-auto py-12 px-12">
        <h2 className="text-6xl mb-4 font-bold text-center text-pcolor md:text-4xl">
          {t("home_hero_section5.our_clients")}
        </h2>
        <p className="md:text-lg text-2xl mb-4 text-center">
          {t("home_hero_section5.our_clients_desc")}
        </p>

        {/* <h2 className="text-center text-3xl font-bold mb-6">
          {t("home_hero_section5.our_clients")}
        </h2>
        <h3 className="text-center text-3xl font-medium mb-12 text-gray-600">
          {t("home_hero_section5.our_clients_desc")}
        </h3> */}
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
          className="flex justify-center py-10"
        >
          {i18n.language === "en" &&
            clients.map((client, index) => (
              <SwiperSlide
                key={index}
                className="bg-gray-100 p-6 my-4 rounded-lg shadow-lg shadow-gray-500 text-center flex-col flex justify-center items-center"
              >
                <img
                  src={client.image}
                  alt={client.title_en}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <p className="mb-12 text-gray-600 px-4 text-center">
                  {client.text}
                </p>
                <h4 className="text-lg font-semibold">{client.title_en}</h4>
                <p className="text-gray-500">{client.sub_title_en}</p>
              </SwiperSlide>
            ))}
          {i18n.language === "ar" &&
            clients.map((client, index) => (
              <SwiperSlide
                key={index}
                className="bg-gray-100 p-6 my-4 rounded-lg shadow-lg shadow-gray-500 text-center flex-col flex justify-center items-center"
              >
                <img
                  src={client.image}
                  alt={client.title_ar}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <p className="mb-12 text-gray-600 px-4 text-center">
                  {client.text}
                </p>
                <h4 className="text-lg font-semibold">{client.title_ar}</h4>
                <p className="text-gray-500">{client.sub_title_ar}</p>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default ClientsReviews;
