import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import images from "../../images";
import { useTranslation } from "react-i18next";

const DetailedDeliverables = ({ deliverables }) => {
  const { t, i18n } = useTranslation(["singleservicepage", "translation"]);
  console.log(deliverables);

  // const deliverables = [
  //   {
  //     name: "Ui Mockups",
  //     image:
  //       "https://s3-alpha-sig.figma.com/img/2752/45b8/92e367d4cbfb7b9dcb7c4f8873faeff5?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JwEAy4OBhPQZ4jvysOMZJMzi3H6LDmQsrYApD3i3YSE5s4gse1BYzf8oX9oWUCEG7C0zf0jVPx5M0IluODnz01VfCZRmrzNE2AGjPt1Wcxzjoml9l1i5-YEa0XKpdKof5C5sx2VvErZa4yRONmDRGvDjfoe1NH~wCcddDAaXzlU3a47C30EmcWj42N-a1i2z3UlbTPY5Z5F9EULm6TLz5CPzk1N3cfRJPEceYj2XgaeBNz8Bs5~czPHTrYZZ3QuOWxmNF~xD5p-3xhUadH0UTY8R3o2uZKCY5lAV2xjUc8BLCy00iT5~U9lkVR9JNAEQA8wALQuUUwEbfW6QL3dZ3A__",
  //     review:
  //       "eye destructive cough replace ice congratulate welcome darken cook different to strap anger trade confidential taxi drag engine destruction breathe mechanic exist answer satisfactory extent report something inn imitation board encourage motor value measure steady neck handshake surround council still say lie",
  //   },
  //   {
  //     name: "Ui Mockups",
  //     image:
  //       "https://s3-alpha-sig.figma.com/img/2752/45b8/92e367d4cbfb7b9dcb7c4f8873faeff5?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JwEAy4OBhPQZ4jvysOMZJMzi3H6LDmQsrYApD3i3YSE5s4gse1BYzf8oX9oWUCEG7C0zf0jVPx5M0IluODnz01VfCZRmrzNE2AGjPt1Wcxzjoml9l1i5-YEa0XKpdKof5C5sx2VvErZa4yRONmDRGvDjfoe1NH~wCcddDAaXzlU3a47C30EmcWj42N-a1i2z3UlbTPY5Z5F9EULm6TLz5CPzk1N3cfRJPEceYj2XgaeBNz8Bs5~czPHTrYZZ3QuOWxmNF~xD5p-3xhUadH0UTY8R3o2uZKCY5lAV2xjUc8BLCy00iT5~U9lkVR9JNAEQA8wALQuUUwEbfW6QL3dZ3A__",

  //     review:
  //       "eye destructive cough replace ice congratulate welcome darken cook different to strap anger trade confidential taxi drag engine destruction breathe mechanic exist answer satisfactory extent report something inn imitation board encourage motor value measure steady neck handshake surround council still say lie",
  //   },
  //   {
  //     name: "Ui Mockups",
  //     image:
  //       "https://s3-alpha-sig.figma.com/img/2752/45b8/92e367d4cbfb7b9dcb7c4f8873faeff5?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JwEAy4OBhPQZ4jvysOMZJMzi3H6LDmQsrYApD3i3YSE5s4gse1BYzf8oX9oWUCEG7C0zf0jVPx5M0IluODnz01VfCZRmrzNE2AGjPt1Wcxzjoml9l1i5-YEa0XKpdKof5C5sx2VvErZa4yRONmDRGvDjfoe1NH~wCcddDAaXzlU3a47C30EmcWj42N-a1i2z3UlbTPY5Z5F9EULm6TLz5CPzk1N3cfRJPEceYj2XgaeBNz8Bs5~czPHTrYZZ3QuOWxmNF~xD5p-3xhUadH0UTY8R3o2uZKCY5lAV2xjUc8BLCy00iT5~U9lkVR9JNAEQA8wALQuUUwEbfW6QL3dZ3A__",

  //     review:
  //       "eye destructive cough replace ice congratulate welcome darken cook different to strap anger trade confidential taxi drag engine destruction breathe mechanic exist answer satisfactory extent report something inn imitation board encourage motor value measure steady neck handshake surround council still say lie",
  //   },
  //   {
  //     name: "Ui Mockups",
  //     image:
  //       "https://s3-alpha-sig.figma.com/img/2752/45b8/92e367d4cbfb7b9dcb7c4f8873faeff5?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JwEAy4OBhPQZ4jvysOMZJMzi3H6LDmQsrYApD3i3YSE5s4gse1BYzf8oX9oWUCEG7C0zf0jVPx5M0IluODnz01VfCZRmrzNE2AGjPt1Wcxzjoml9l1i5-YEa0XKpdKof5C5sx2VvErZa4yRONmDRGvDjfoe1NH~wCcddDAaXzlU3a47C30EmcWj42N-a1i2z3UlbTPY5Z5F9EULm6TLz5CPzk1N3cfRJPEceYj2XgaeBNz8Bs5~czPHTrYZZ3QuOWxmNF~xD5p-3xhUadH0UTY8R3o2uZKCY5lAV2xjUc8BLCy00iT5~U9lkVR9JNAEQA8wALQuUUwEbfW6QL3dZ3A__",

  //     review:
  //       "eye destructive cough replace ice congratulate welcome darken cook different to strap anger trade confidential taxi drag engine destruction breathe mechanic exist answer satisfactory extent report something inn imitation board encourage motor value measure steady neck handshake surround council still say lie",
  //   },
  //   {
  //     name: "Ui Mockups",
  //     image:
  //       "https://s3-alpha-sig.figma.com/img/2752/45b8/92e367d4cbfb7b9dcb7c4f8873faeff5?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JwEAy4OBhPQZ4jvysOMZJMzi3H6LDmQsrYApD3i3YSE5s4gse1BYzf8oX9oWUCEG7C0zf0jVPx5M0IluODnz01VfCZRmrzNE2AGjPt1Wcxzjoml9l1i5-YEa0XKpdKof5C5sx2VvErZa4yRONmDRGvDjfoe1NH~wCcddDAaXzlU3a47C30EmcWj42N-a1i2z3UlbTPY5Z5F9EULm6TLz5CPzk1N3cfRJPEceYj2XgaeBNz8Bs5~czPHTrYZZ3QuOWxmNF~xD5p-3xhUadH0UTY8R3o2uZKCY5lAV2xjUc8BLCy00iT5~U9lkVR9JNAEQA8wALQuUUwEbfW6QL3dZ3A__",

  //     review:
  //       "eye destructive cough replace ice congratulate welcome darken cook different to strap anger trade confidential taxi drag engine destruction breathe mechanic exist answer satisfactory extent report something inn imitation board encourage motor value measure steady neck handshake surround council still say lie",
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
        <h2 className="flex items-start justify-start text-3xl font-bold mb-6">
          {t("singleservicepage.detailed_deliverables")}
        </h2>
        <Swiper
          pagination={pagination}
          spaceBetween={30}
          slidesPerView={1}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          loop={true}
          cssMode={i18n.language === "ar"}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1224: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="flex justify-center py-20"
          modules={[Autoplay, Pagination, Navigation]}
        >
          {deliverables.map((deliverable, index) => (
            <SwiperSlide
              key={index}
              className="rounded-t-xl bg-pcolor pb-12 rounded-lg shadow-lg shadow-gray-500 text-center flex-col flex justify-start items-start"
            >
              <img
                src={deliverable.image}
                alt={deliverable.name}
                className="w-full h-72 mx-auto mb-4 rounded-t-xl object-cover"
              />
              <h4 className=" px-4 text-white text-xl font-semibold mb-2">
                {deliverable.name}
              </h4>
              <p className="mb-4 text-white px-4 text-left">
                {deliverable.review}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default DetailedDeliverables;
