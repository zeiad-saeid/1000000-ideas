import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useEffect, useState } from "react";

const CompaniesReviews = () => {
  const [companies, setCompanies] = useState([]);
  const { i18n } = useTranslation();
  const getCompaniesLogo = async () => {
    try {
      const result = await axios.get(
        "https://milionideas.com/dashboard/api/partners"
      );
      setCompanies(result.data.partners);
    } catch (error) {
      console.error("Error Ocurred when fetching data:", error);
    }
  };
  useEffect(() => {
    getCompaniesLogo();
  }, []);

  // const companies = [
  //   {
  //     name: "Apple",
  //     image:
  //       "https://banner2.cleanpng.com/20190504/cos/kisspng-apple-logo-design-new-york-vector-graphics-tecnologie-utilizzate-alcuni-software-utilizzati-5ccdbaa498fc56.1275154215569865326266.jpg",
  //   },
  //   {
  //     name: "Google",
  //     image:
  //       "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png",
  //   },
  //   {
  //     name: "Microsoft",
  //     image:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png",
  //   },
  //   {
  //     name: "Microsoft",
  //     image:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png",
  //   },
  //   {
  //     name: "Microsoft",
  //     image:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png",
  //   },
  //   {
  //     name: "Microsoft",
  //     image:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png",
  //   },
  //   {
  //     name: "Microsoft",
  //     image:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png",
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
      <div className="container mx-auto py-12">
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
          {companies.map((company, index) => (
            <SwiperSlide
              key={index}
              className=" p-6 rounded-lg text-center flex-col flex justify-center items-center"
            >
              <div className="w-48 h-14">
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-full mx-auto mb-4 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default CompaniesReviews;
