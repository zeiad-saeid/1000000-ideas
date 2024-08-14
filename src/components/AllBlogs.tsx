import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { posts } from "../data";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { CSSTransition, Transition } from "react-transition-group";
import { useRef } from "react";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";

const AllBlogs = () => {
  const nodeRef = useRef(null);
  const [allPosts, setAllPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [allPostsFilter, setAllPostsFilter] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loadMore, setLoadMore] = useState(6);
  const [inProp, setInProp] = useState(false);
  const { t, i18n } = useTranslation(["blog", "translation"]);

  const getPostsCategories = async () => {
    try {
      const result = await axios.get(
        "https://milionideas.com/dashboard/api/blog-categories"
      );
      setCategories(result.data.blogcategories);
      // setServices(result.data.lastBlogs);
    } catch (error) {
      console.error("Error Ocurred when fetching data:", error);
    }
  };

  const getPosts = async () => {
    try {
      setIsLoading(true);

      const result = await axios.get(
        "https://milionideas.com/dashboard/api/blogs"
      );
      setAllPosts(result.data.lastBlogs);
      setAllPostsFilter(result.data.lastBlogs);
      setFilteredPosts(result.data.lastBlogs);
      setIsLoading(false);
    } catch (error) {
      console.error("Error Ocurred when fetching data:", error);
    }
  };
  useEffect(() => {
    getPosts();
    getPostsCategories();
  }, []);

  // const categories = [
  //   "All",
  //   "Web Development",
  //   "Mobile Application",
  //   "IOS Apps",
  //   "Hosting",
  // ];

  // posts.sort(function (a, b) {
  //   return new Date(b.date) - new Date(a.date);
  // });

  const categoryFilter = (category, id) => {
    const filteredPosts = allPostsFilter.filter(
      (p) => p.blogCategory[0].id == id
    );
    setFilteredPosts(filteredPosts);
    if (category === "All") {
      setFilteredPosts(allPosts);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center my-44">
        <CgSpinner className="text-8xl animate-spin" />
      </div>
    );
  }
  return (
    <>
      <div className="">
        <h3 className="text-5xl font-semibold text-center md:text-3xl my-14">
          {t("blog.all_posts")}
        </h3>
        <div className="flex md:flex-col-reverse px-4 gap-6">
          <div className="w-[70%] md:w-full flex flex-wrap justify-center gap-8">
            {filteredPosts ? (
              <AnimatePresence>
                {i18n.language === "en" &&
                  filteredPosts.slice(0, loadMore).map((post, index) => (
                    <motion.div
                      key={index}
                      whileInView={{ y: [50, 0] }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="shadow-sm bg-gray-100 w-2/5 h-fit"
                    >
                      <Link
                        onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
                        className=""
                        to={`/blog/posts/${post.id}`}
                      >
                        <div className="">
                          <div className="w-full mb-3">
                            <img
                              className="w-full h-full object-cover"
                              src={post.image}
                              alt={post.title_en}
                            />
                          </div>
                          <div className="w-full flex justify-end items-start flex-col p-3 gap-3">
                            <div className="flex gap-3">
                              <div className="flex gap-2">
                                <FaRegUser className="text-lg text-customBlueColor-100 lg:text-sm" />
                                <p className="text-gray-500 font-normal lg:text-sm">
                                  {post.writer}
                                </p>
                              </div>
                              <div className="flex gap-2">
                                <MdOutlineDateRange className="text-xl text-customBlueColor-100 lg:text-sm" />
                                <p className="text-gray-500 font-normal lg:text-sm">
                                  {post.date}
                                </p>
                              </div>
                            </div>
                            <h3 className="text-xl text-red-500 font-bold mb-4">
                              {post.title_en}
                            </h3>
                            <p className="text-sm">
                              {post.short_desc_en.length > 90
                                ? `${post.short_desc_en.slice(0, 90)}...`
                                : post.short_desc_en}
                            </p>
                            <div className="flex gap-2 justify-start items-center">
                              <p className="font-bold ">
                                {" "}
                                {t("blog.read_more")}
                              </p>
                              <FaArrowRightLong
                                className={
                                  i18n.language === "ar"
                                    ? "rotate-180 text-xl text-customBlueColor-100"
                                    : "text-xl text-customBlueColor-100"
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                {i18n.language === "ar" &&
                  filteredPosts.slice(0, loadMore).map((post, index) => (
                    <motion.div
                      key={index}
                      whileInView={{ y: [50, 0] }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="shadow-sm bg-gray-100 w-2/5 h-fit"
                    >
                      <Link
                        onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
                        className=""
                        to={`/blog/posts/${post.id}`}
                      >
                        <div className="">
                          <div className="w-full mb-3">
                            <img
                              className="w-full h-full object-cover"
                              src={post.image}
                              alt={post.title_ar}
                            />
                          </div>
                          <div className="w-full flex justify-end items-start flex-col p-3 gap-3">
                            <div className="flex gap-3">
                              <div className="flex gap-2">
                                <FaRegUser className="text-lg text-customBlueColor-100 lg:text-sm" />
                                <p className="text-gray-500 font-normal lg:text-sm">
                                  {post.writer}
                                </p>
                              </div>
                              <div className="flex gap-2">
                                <MdOutlineDateRange className="text-xl text-customBlueColor-100 lg:text-sm" />
                                <p className="text-gray-500 font-normal lg:text-sm">
                                  {post.date}
                                </p>
                              </div>
                            </div>
                            <h3 className="text-xl text-red-500 font-bold mb-4">
                              {post.title_ar}
                            </h3>
                            <p className="text-sm">
                              {post.short_desc_ar.length > 90
                                ? `${post.short_desc_ar.slice(0, 90)}...`
                                : post.short_desc_ar}
                            </p>
                            <div className="flex gap-2 justify-start items-center">
                              <p className="font-bold">
                                {" "}
                                {t("blog.read_more")}
                              </p>
                              <FaArrowRightLong
                                className={
                                  i18n.language === "ar"
                                    ? "rotate-180 text-xl text-customBlueColor-100"
                                    : "text-xl text-customBlueColor-100"
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
              </AnimatePresence>
            ) : (
              <h2 className="text-4xl">
                {i18n.language === "en"
                  ? "Loading Data..."
                  : "جاري تحميل البيانات"}
              </h2>
            )}

            <div className="flex justify-center items-center mt-10">
              {loadMore < allPosts.length && (
                <button
                  onClick={() => setLoadMore((prev) => (prev += 2))}
                  className=" px-7 py-3 bg-pcolor text-white font-bold rounded-md bg-gradient-to-r from-customBlueColor-400 to-customBlueColor-300"
                >
                  {t("blog.load_more")}
                </button>
              )}
            </div>
          </div>
          <div className="w-[30%] md:w-full p-6 px-6">
            <div className="mb-20">
              <div className="mb-5">
                <h3 className="font-bold text-lg">
                  {" "}
                  {t("blog.search_by_category")}
                </h3>
                <span
                  className={`w-20 h-2 rounded-xl bg-scolor inline-block ${
                    i18n.language === "en" ? "mr-2" : "ml-2"
                  }`}
                ></span>
                <span className="w-6 h-2 rounded-xl bg-scolor inline-block"></span>
              </div>
              <div className="space-y-3">
                <div
                  className="cursor-pointer py-1 px-1 w-full bg-gray-100 flex gap-3"
                  onClick={() => {
                    setInProp(true);
                    categoryFilter("All", 0);
                  }}
                >
                  <FaArrowRightLong className="text-lg pt-1" />{" "}
                  {i18n.language === "en" ? "All" : "الكل"}
                </div>
                {i18n.language === "en" &&
                  categories.map((category) => (
                    <div
                      className="cursor-pointer py-1 px-1 w-full bg-gray-100 flex gap-3"
                      onClick={() => {
                        setInProp(true);
                        categoryFilter(category.title_en, category.id);
                      }}
                    >
                      <FaArrowRightLong className="text-lg pt-1" />{" "}
                      {category.title_en}
                    </div>
                  ))}
                {i18n.language === "ar" &&
                  categories.map((category) => (
                    <div
                      className="cursor-pointer py-1 px-1 w-full bg-gray-100 flex gap-3"
                      onClick={() => {
                        setInProp(true);
                        categoryFilter(category.title_ar, category.id);
                      }}
                    >
                      <FaArrowRightLong className="text-lg pt-1" />{" "}
                      {category.title_ar}
                    </div>
                  ))}
              </div>
            </div>
            <div className="mb-10">
              <div className="">
                <h3 className="font-bold text-lg">{t("blog.recent_posts")}</h3>
                <span
                  className={`w-20 h-2 rounded-xl bg-scolor inline-block ${
                    i18n.language === "en" ? "mr-2" : "ml-2"
                  }`}
                ></span>

                <span className="w-6 h-2 rounded-xl bg-scolor inline-block"></span>
              </div>
              <div className="space-y-3">
                {i18n.language === "en" &&
                  allPosts.slice(0, 6).map((post) => (
                    <Link
                      to={`/blog/posts/${post.id}`}
                      className="cursor-pointer py-1 px-1 w-full bg-gray-100 flex gap-3"
                      onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
                    >
                      <div className="w-1/4">
                        <img
                          className="w-full h-full object-cover"
                          src={post.image}
                          alt={post.title_en}
                        />
                      </div>
                      <h3 className="font-bold te w-3/4">{post.title_en}</h3>
                    </Link>
                  ))}
                {i18n.language === "ar" &&
                  allPosts.slice(0, 6).map((post) => (
                    <Link
                      to={`/blog/posts/${post.id}`}
                      className="cursor-pointer py-1 px-1 w-full bg-gray-100 flex gap-3"
                      onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
                    >
                      <div className="w-1/4">
                        <img
                          className="w-full h-full object-cover"
                          src={post.image}
                          alt={post.title_ar}
                        />
                      </div>
                      <h3 className="font-bold te w-3/4">{post.title_ar}</h3>
                    </Link>
                  ))}
              </div>
            </div>
            <div className="">
              <img
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBlogs;
