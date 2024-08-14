import { FaCircle, FaRegClock } from "react-icons/fa";
import images from "../../images";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

import "./SingleServicePage.scss";
import { Link, useParams } from "react-router-dom";
import DetailedDeliverables from "./DetailedDeliverables";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const SingleServicePage = () => {
  const { id } = useParams();
  const serviceId = Number(id);

  const [allServices, setAllServices] = useState([]);
  const [singleService, setSingleService] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { t, i18n } = useTranslation(["singleservicepage", "translation"]);

  const getServices = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get(
        "https://milionideas.com/dashboard/api/services"
      );
      setAllServices(result.data.services);
      setSingleService(
        result.data.services.filter((service) => service.id == serviceId)
      );
    } catch (error) {
      console.error("Error Ocurred when fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getServices();
  }, [serviceId]);

  const steps = [
    t("singleservicepage.step_one"),
    t("singleservicepage.step_two"),
    t("singleservicepage.step_three"),
    t("singleservicepage.step_four"),
    t("singleservicepage.step_five"),
    t("singleservicepage.step_six"),
  ];

  // const main = sectionRef.current;
  // const scrollProgress = document.getElementById('scroll-progress')

  // const onScroll = () => {
  //   const scroll = main.scrollTop;
  //   const height = main.scrollHeight - main.clientHeight;
  //   const percent = (scroll / height) * 100;
  //   console.log(percent);
  //   setHeight(percent);

  // scrollProgress.style.width = percent + "%";

  // function getVerticalScrollPercentage(elm) {
  //   let p = elm.parentNode;
  //   return (
  //     ((elm.scrollTop || p.scrollTop) / 2100) * 100
  //   );
  // }

  // function getVerticalScrollPercentage(elm) {
  //   let p = elm.parentNode;
  //   return (
  //     ((elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight)) * 100
  //   );
  // }

  // const onScroll = () => {
  //   const loadingBarHeight = loadingBarRef.current.clientHeight;
  //   console.log(loadingBarRef.current.parentNode);
  //   console.log(loadingBarRef.current);

  //   console.log(Math.round(getVerticalScrollPercentage(loadingBarRef.current)));
  //   setHeight(Math.round(getVerticalScrollPercentage(loadingBarRef.current)));
  //   // if (singleService[0]?.works?.length !== 0) {
  //   //   let windowHeight = window.innerHeight;
  //   //   let windowScrollTop = window.scrollY;

  //   //   if (
  //   //     windowScrollTop >
  //   //     sectionRef.current.offsetTop +
  //   //       sectionRef.current.offsetHeight -
  //   //       windowHeight
  //   //   ) {
  //   //     const height =
  //   //       document.documentElement.scrollHeight -
  //   //       document.documentElement.clientHeight;
  //   //     const scrolled =
  //   //       (sectionRef.current.offsetTop / sectionRef.current.offsetHeight) *
  //   //       100;
  //   //     setScrollTop(scrolled);
  //   //   }

  //   //   // const winScroll = document.documentElement.scrollTop;
  //   //   // const height =
  //   //   //   document.documentElement.scrollHeight -
  //   //   //   document.documentElement.clientHeight;
  //   //   // const scrolled = (winScroll / height) * 100;
  //   //   // setScrollTop(scrolled);
  //   // }
  // };

  // useEffect(() => {
  //   if (singleService[0]?.works?.length !== 0 && sectionRef.current) {
  //     sectionRef.current.addEventListener("scroll", onScroll);
  //   }

  //   return () => {
  //     if (singleService[0]?.works?.length !== 0 && sectionRef.current) {
  //       sectionRef.current.removeEventListener("scroll", onScroll);
  //     }
  //   };
  // }, [singleService]);

  // const [height, setHeight] = useState(0);
  // const centerLineRef = useRef(null);
  // const loadingBarRef = useRef(null);

  // const getVerticalScrollPercentage = (elm) => {
  //   const scrollTop = elm.scrollTop;
  //   const scrollHeight = elm.scrollHeight;
  //   const clientHeight = elm.clientHeight;
  //   return (scrollTop / (scrollHeight - clientHeight)) * 100;
  // };

  // const onScroll = () => {
  //   if (centerLineRef.current) {
  //     const scrollPercentage = Math.round(
  //       getVerticalScrollPercentage(centerLineRef.current)
  //     );
  //     console.log(scrollPercentage);

  //     setHeight(scrollPercentage);
  //   }
  // };

  // useEffect(() => {
  //   const centerLineElement = centerLineRef.current;
  //   if (singleService[0]?.works?.length !== 0 && centerLineElement) {
  //     window.addEventListener("scroll", onScroll);
  //   }

  //   return () => {
  //     if (singleService[0]?.works?.length !== 0 && centerLineElement) {
  //       window.removeEventListener("scroll", onScroll);
  //     }
  //   };
  // }, [singleService]);

  const pagination = {
    clickable: true,
    // renderBullet: function (index, className) {
    // return '<span class="' + className + '">' + (index + 1) + "</span>";
    // },
  };

  const worksRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: worksRef,
    offset: ["start end", "end start"],
  });
  const heightMove = useTransform(scrollYProgress, [0, 1], ["-20%", "100%"]);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(Math.round(latest * 100));
  });

  return (
    <>
      <div className="my-20">
        <motion.div
          whileInView={{
            y: [100, 50, 0],
            // x: [300, 100, 0],
            opacity: [0, 0, 1],
          }}
          transition={{ duration: 0.5 }}
          className={
            i18n.language === "ar"
              ? "flex justify-between items-center mr-12 mb-20 md:flex-col md:mx-12 "
              : "flex justify-between items-center ml-12 mb-20 md:flex-col md:mx-12 "
          }
        >
          <div className="w-[55%] md:w-full">
            <h2 className="text-6xl font-bold mb-24 md:text-4xl">
              {i18n.language === "en"
                ? singleService[0]?.name_en
                : singleService[0]?.name_ar}
            </h2>
            <p className="text-4xl text-gray-500 md:text-3xl w-full break-words">
              {i18n.language === "en"
                ? singleService[0]?.text_en
                : singleService[0]?.text_ar}
            </p>
          </div>
          <div
            className={
              i18n.language === "ar"
                ? "w-[10%] md:hidden rotate-180"
                : "w-[10%] md:hidden"
            }
          >
            <img className="w-full h-full " src={images.square_shape1} alt="" />
          </div>
          <div className="w-[100%] hidden md:block">
            <img className="w-full h-full" src={images.square_shape2} alt="" />
          </div>
        </motion.div>
        {singleService[0]?.key_benefits?.length !== 0 && (
          <motion.div
            whileInView={{
              y: [100, 50, 0],
              // x: [-300, -100, 0],
              opacity: [0, 0, 1],
            }}
            transition={{ duration: 0.5 }}
            className="bg-slate-100 py-20"
          >
            <h2 className="text-4xl font-bold text-center mb-10">
              {t("singleservicepage.key_benefits")}
            </h2>
            <div className="flex gap-4 px-10 md:flex-col">
              {singleService[0]?.key_benefits?.map((benefit, index) => (
                <div
                  key={index}
                  className=" bg-white shadow-md p-10 rounded-lg shadow-gray-500 space-y-7 w-[50%] md:w-full"
                >
                  <div className="bg-slate-100 text-purple-500 inline-block p-3 text-3xl rounded-md">
                    <AiOutlineSafetyCertificate />
                  </div>
                  <h3 className="text-xl font-bold">
                    {i18n.language === "en"
                      ? benefit.title_en
                      : benefit.title_ar}
                  </h3>
                  <p className="font-bold text-gray-500">
                    {i18n.language === "en" ? benefit.text_en : benefit.text_ar}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* {console.log(singleService[0]?.works.length !== 0)} */}
        {singleService[0]?.works?.length === 999 && (
          <motion.div
            whileInView={{
              y: [100, 50, 0],
              // x: [300, 100, 0],
              opacity: [0, 0, 1],
            }}
            transition={{ duration: 0.5 }}
            className="bg-slate-100 py-20"
          >
            <h2 className="text-4xl font-bold text-center mb-10">
              {t("singleservicepage.how_it_works")}
            </h2>
            {/* Dots */}
            {/* <div className="">
            <div className=""></div>
            <div className="">
              <div className="fixed top-1/2 left-1/2 -translate-y-1/2">
                <ul className="list-none h-[400px] w-16 flex items-center justify-around flow flex-col">
                  <span
                    style={{ height: `${scrollTop}%` }}
                    className="absolute top-10 left-6 h-10 w-3 bg-red-500 rounded-lg"
                  ></span>
                  <li className="z-10 block h-10 w-10 bg-gray-400 text-white rounded-full text-center leading-10 font-extrabold cursor-pointer">
                    1
                  </li>
                  <li className="z-10 block h-10 w-10 bg-gray-400 text-white rounded-full text-center leading-10 font-extrabold cursor-pointer">
                    2
                  </li>
                  <li className="z-10 block h-10 w-10 bg-gray-400 text-white rounded-full text-center leading-10 font-extrabold cursor-pointer">
                    3
                  </li>
                  <li className="z-10 block h-10 w-10 bg-gray-400 text-white rounded-full text-center leading-10 font-extrabold cursor-pointer">
                    4
                  </li>
                  <li className="z-10 block h-10 w-10 bg-gray-400 text-white rounded-full text-center leading-10 font-extrabold cursor-pointer">
                    5
                  </li>
                </ul>
              </div>
            </div>
            <div className=""></div>
          </div> */}
            <div className="milionideas__services2">
              <div className="left">
                <div className="left-content bg-white space-y-4 shadow-md shadow-gray-500 rounded-md p-6 h-auto">
                  <h3 className="text-scolor font-bold">STEP ONE</h3>
                  <h2 className="font-bold text-2xl">
                    {i18n.language === "en"
                      ? singleService[0]?.works[0]?.title_en
                      : singleService[0]?.works[0]?.title_ar}
                  </h2>
                  <p className="text-gray-600">
                    {i18n.language === "en"
                      ? singleService[0]?.works[0]?.short_desc_en
                      : singleService[0]?.works[0]?.short_desc_ar}
                  </p>
                  {singleService[0]?.works[0]?.scope === 1 && (
                    <Link
                      className="hover:bg-white hover:text-scolor transition p-2 text-scolor font-bold rounded-lg border-2 bg-transparent border-scolor "
                      to={`/services/${serviceId}/productscoop/${singleService[0]?.works[0]?.id}`}
                      onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
                    >
                      See Product Scoop
                    </Link>
                  )}
                </div>
                <div className="w-1/2">
                  <img
                    className="w-full h-full"
                    src={images.square_shape2}
                    alt=""
                  />
                </div>
                <div className="left-content bg-white space-y-4 shadow-md shadow-gray-500 rounded-md p-6">
                  <h3 className="text-scolor font-bold">STEP THREE</h3>
                  <h2 className="font-bold text-2xl">
                    {i18n.language === "en"
                      ? singleService[0]?.works[2]?.title_en
                      : singleService[0]?.works[2]?.title_ar}
                  </h2>
                  <p className="text-gray-600">
                    {i18n.language === "en"
                      ? singleService[0]?.works[2]?.short_desc_en
                      : singleService[0]?.works[2]?.short_desc_ar}
                  </p>
                  {singleService[0]?.works[2]?.scope === 1 && (
                    <Link
                      className="hover:bg-white hover:text-scolor transition p-2 text-scolor font-bold rounded-lg border-2 bg-transparent border-scolor "
                      to={`/services/${serviceId}/productscoop/${singleService[0]?.works[2]?.id}`}
                      onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
                    >
                      See Product Scoop
                    </Link>
                  )}
                </div>
              </div>

              <div className="middle">
                {/* <div className="middle-line first"></div> */}
                <div className="middle-line second"></div>
                <div className="middle-line third"></div>
                <div className="middle-line last"></div>
              </div>
              <div className="right">
                <div className="right-content bg-white space-y-4 shadow-md shadow-gray-500 rounded-md p-6">
                  <h3 className="text-scolor font-bold">STEP TWO</h3>
                  <h2 className="font-bold text-2xl">
                    {i18n.language === "en"
                      ? singleService[0]?.works[1]?.title_en
                      : singleService[0]?.works[1]?.title_ar}
                  </h2>
                  <p className="text-gray-600">
                    {i18n.language === "en"
                      ? singleService[0]?.works[1]?.short_desc_en
                      : singleService[0]?.works[1]?.short_desc_ar}
                  </p>
                  {singleService[0]?.works[1]?.scope === 1 && (
                    <Link
                      className="hover:bg-white hover:text-scolor transition p-2 text-scolor font-bold rounded-lg border-2 bg-transparent border-scolor "
                      to={`/services/${serviceId}/productscoop/${singleService[0]?.works[1]?.id}`}
                      onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
                    >
                      See Product Scoop
                    </Link>
                  )}
                </div>
                <div className="w-1/2">
                  <img
                    className="w-full h-full"
                    src={images.square_shape2}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="milionideas__services2-m hidden md:block">
              <div className="left">
                <div className="left-content bg-white space-y-4 shadow-md shadow-gray-500 rounded-md p-6 h-auto">
                  <h3 className="text-scolor font-bold">STEP ONE</h3>
                  <h2 className="font-bold text-2xl">Design Brief</h2>
                  <p className="text-gray-600">
                    The design brief starts with a product scope – either
                    created by us or provided by you – with all the user
                    stories, UX personas or list of features and stakeholder
                    analysis.
                  </p>
                  <Link
                    className="hover:bg-white hover:text-scolor transition p-2 text-scolor font-bold rounded-lg border-2 bg-transparent border-scolor "
                    to={"/services/${1}/productscoop/${1}"}
                  >
                    See Product Scoop
                  </Link>
                </div>
                <div className=""></div>
                <div className="left-content bg-white space-y-4 shadow-md shadow-gray-500 rounded-md p-6">
                  <h3 className="text-scolor font-bold">STEP THREE</h3>
                  <h2 className="font-bold text-2xl">Design Brief</h2>
                  <p className="text-gray-600">
                    The design brief starts with a product scope – either
                    created by us or provided by you – with all the user
                    stories, UX personas or list of features and stakeholder
                    analysis.
                  </p>
                </div>
              </div>

              <div className="middle">
                <div className="middle-line first"></div>
                <div className="middle-line second"></div>
                <div className="middle-line third"></div>
                <div className="middle-line last"></div>
              </div>
              <div className="right">
                <div className="right-content bg-white space-y-4 shadow-md shadow-gray-500 rounded-md p-6">
                  <h3 className="text-scolor font-bold">STEP TWO</h3>
                  <h2 className="font-bold text-2xl">Design Brief</h2>
                  <p className="text-gray-600">
                    The design brief starts with a product scope – either
                    created by us or provided by you – with all the user
                    stories, UX personas or list of features and stakeholder
                    analysis.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {singleService[0]?.works?.length !== 0 && (
          <motion.div
            ref={worksRef}
            // whileInView={{
            //   y: [100, 50, 0],
            //   // x: [300, 100, 0],
            //   opacity: [0, 0, 1],
            // }}
            // transition={{ duration: 0.5 }}
            className="bg-slate-100 py-20"
          >
            <h2 className="text-4xl font-bold text-center mb-10">
              {t("singleservicepage.how_it_works")}
            </h2>
            <div className="wrapper-service">
              <div
                className={`center-line ${
                  i18n.language === "en" ? "en" : "ar"
                }`}
              >
                <motion.span
                  // style={{ pathLength: scrollYProgress }}
                  // height={1}
                  // style={{height: '100%'}}
                  style={{
                    height: heightMove,
                  }}
                  // style={{ height: `${height}%` }}
                  className="loading-bar"
                ></motion.span>
                {/* {console.log(scrollYProgress.current)} */}
              </div>
              {i18n.language === "en" &&
                singleService[0]?.works?.map((work, index) => (
                  <div key={index} className={` row row-${index + 1}`}>
                    <section className="shadow-gray-500 shadow-md en">
                      <div
                        className="number"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        <FaCircle />
                      </div>
                      {/* >{`0${`${index + 1}`}`} */}
                      <div className="text-scolor font-bold">
                        {steps[index]}
                      </div>
                      <div className="details">
                        <span className="title text-2xl font-bold">
                          {work.title_en}
                        </span>
                      </div>
                      <p className="break-words">
                        {work.short_desc_en?.slice(0, 100)}
                      </p>
                      <div className="bottom">
                        {work.scope === 1 && (
                          <Link
                            className="hover:bg-white hover:text-scolor transition p-2 text-scolor font-bold rounded-lg border-2 bg-transparent border-scolor inline-block"
                            to={`/services/${serviceId}/productscoop/${work.id}`}
                            onClick={() =>
                              scrollTo({ top: 0, behavior: "smooth" })
                            }
                          >
                            {t("singleservicepage.see_product_scoop")}
                          </Link>
                        )}
                      </div>
                    </section>
                  </div>
                ))}
              {i18n.language === "ar" &&
                singleService[0]?.works?.map((work, index) => (
                  <div key={index} className={` row row-${index + 1} ar`}>
                    <section className="shadow-gray-500 shadow-md  ar">
                      <div
                        className="number ar"
                        style={{ fontFamily: "sans-serif" }}
                      >
                        <FaCircle />
                      </div>
                      {/* >{`0${`${index + 1}`}`} */}
                      <div className="text-scolor font-bold">
                        {steps[index]}
                      </div>
                      <div className="details">
                        <span className="title text-2xl font-bold">
                          {work.title_ar}
                        </span>
                      </div>
                      <p className="break-words">
                        {work.short_desc_ar?.slice(0, 100)}
                      </p>
                      <div className="bottom">
                        {work.scope === 1 && (
                          <Link
                            className="hover:bg-white hover:text-scolor transition p-2 text-scolor font-bold rounded-lg border-2 bg-transparent border-scolor inline-block"
                            to={`/services/${serviceId}/productscoop/${work.id}`}
                            onClick={() =>
                              scrollTo({ top: 0, behavior: "smooth" })
                            }
                          >
                            {t("singleservicepage.see_product_scoop")}
                          </Link>
                        )}
                      </div>
                    </section>
                  </div>
                ))}
            </div>
          </motion.div>
        )}

        {singleService[0]?.detailed_deliverables?.length !== 0 && (
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
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1224: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              className="flex justify-center py-20"
              modules={[Autoplay, Pagination, Navigation]}
            >
              {singleService[0]?.detailed_deliverables.map(
                (deliverable, index) => (
                  <SwiperSlide
                    key={index}
                    className="rounded-t-xl bg-pcolor pb-12 rounded-lg shadow-lg shadow-gray-500 text-center flex-col flex justify-start items-start"
                  >
                    <img
                      src={deliverable.image}
                      alt={deliverable.name}
                      className="w-full h-60 mx-auto mb-4 rounded-t-xl object-cover"
                    />
                    <h4 className=" px-4 text-white text-xl font-semibold mb-2">
                      {i18n.language === "en"
                        ? deliverable.title_en
                        : deliverable.title_ar}
                    </h4>
                    <p className="mb-4 text-white px-4 text-left">
                      {i18n.language === "en"
                        ? deliverable.text_en
                        : deliverable.text_ar}
                    </p>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
        )}
        <div className="p-20 md:p-4">
          <div className="bg-[#29293E] w-full flex justify-between items-center md:flex-col">
            <div className="text-white w-1/2 space-y-20 p-10 md:w-full">
              <h2 className="text-3xl font-semibold">
                {t("singleservicepage.start_build_title")}
              </h2>
              <p className="w-3/4 text-xl md:w-full">
                {t("singleservicepage.start_build_desc")}
              </p>
              <a
                className="inline-block py-3 px-9 border-2 border-scolor rounded-full transition duration-300 hover:scale-110 hover:translate-y-1 hover:bg-scolor text-lg"
                href={"https://wa.me/00966565861697"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("singleservicepage.see_our_price")}
              </a>
            </div>
            <div className="text-white w-1/2 space-y-20 p-10 md:w-full">
              <h2 className="text-3xl font-semibold">
                {t("singleservicepage.start_build_title2")}
              </h2>
              <p className="w-3/4 text-xl md:w-full">
                {t("singleservicepage.start_build_desc2")}
              </p>
              <a
                className="bg-scolor inline-block py-3 px-9 border-2 border-scolor rounded-full transition duration-300 hover:scale-110 hover:translate-y-1 hover:bg-transparent text-lg"
                href={"https://wa.me/00966565861697"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("singleservicepage.see_our_price2")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleServicePage;
