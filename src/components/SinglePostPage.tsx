import { Link, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { useEffect, useState } from "react";
import images from "../images";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";

const SinglePostPage = () => {
  const { t, i18n } = useTranslation(["blog", "translation"]);

  const { id } = useParams();
  const postId = Number(id);
  const [allPosts, setAllPosts] = useState([]);
  const [singlePost, setSinglePost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(6);

  const getPosts = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get(
        "https://milionideas.com/dashboard/api/blogs"
      );
      setAllPosts(result.data.lastBlogs);
      setSinglePost(result.data.lastBlogs.filter((post) => post.id == postId));
      // setSinglePost(prevState => prevState.filter((post) => post.id == postId))
      // singlePost.filter((post) => post.id == postId);
      setIsLoading(false);
    } catch (error) {
      console.error("Error Ocurred when fetching data:", error);
    }
  };

  // const singlePost = allPosts.filter((post) => post.id == postId);

  // const categories = [
  //   "All",
  //   "Web Development",
  //   "Mobile Application",
  //   "IOS Apps",
  //   "Hosting",
  // ];
  const categoryFilter = () => {
    const filteredPosts = allPosts.filter((p) => p.blogCategory[0].id == id);

    setAllPosts(filteredPosts);

    // setLoadMore(filteredPosts.length);
  };

  // useEffect(() => {
  //   getPosts();
  //   setPostData(singlePost);
  //   categoryFilter();
  // }, [id, singlePost, categoryFilter]);

  useEffect(() => {
    getPosts();
    categoryFilter();
  }, [postId]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center my-44">
        <CgSpinner className="text-9xl animate-spin" />
      </div>
    );
  }
  return (
    <>
      <div className="py-20 px-10">
        <div
          className={
            i18n.language === "ar"
              ? "absolute left-0 top-28 w-32 md:w-14 rotate-180"
              : "absolute right-0 top-28 w-32 md:w-14 "
          }
        >
          <img
            src={images.square_shape1}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="text-6xl font-semibold text-center md:text-4xl mb-7">
          {t("blog.post")}
        </h3>
        {i18n.language === "en" && (
          <div className="flex flex-col justify-between items-start gap-5 w-3/5 mb-5 lg:w-3/4 md:w-full">
            <h2 className="text-4xl text-scolor md:text-3xl">
              {singlePost[0]?.title_en}
            </h2>
            <div className="">
              <img
                src={singlePost[0]?.image}
                alt=""
                className="w-full h-full object-contain rounded-xl rounded-bl-[100px]"
              />
            </div>
            <p dangerouslySetInnerHTML={{ __html: singlePost[0]?.text_en }} />
          </div>
        )}
        {i18n.language === "ar" && (
          <div className="flex flex-col justify-between items-start gap-5 w-3/5 mb-5 lg:w-3/4 md:w-full">
            <h2 className="text-4xl text-scolor md:text-3xl">
              {singlePost[0]?.title_ar}
            </h2>
            <div className="">
              <img
                src={singlePost[0]?.image}
                alt=""
                className="w-full h-full object-contain rounded-xl rounded-bl-[100px]"
              />
            </div>
            <p dangerouslySetInnerHTML={{ __html: singlePost[0]?.text_ar }} />
          </div>
        )}
        <div>
          <h3
            className={`text-5xl font-semibold text-left md:text-3xl mb-7 ${
              i18n.language === "en" ? "text-left" : "text-right"
            }`}
          >
            {t("blog.related_posts")}
          </h3>
          <div className="flex flex-wrap gap-12 justify-center items-center lg:gap-6">
            <AnimatePresence>
              {i18n.language === "en" &&
                allPosts?.slice(0, loadMore).map((post) => (
                  <motion.div
                    key={post.id}
                    whileInView={{ y: [50, 0] }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="flex w-1/3 lg:w-full"
                  >
                    <Link
                      key={post.id}
                      onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
                      className=""
                      to={`/blog/posts/${post.id}`}
                    >
                      <div className="flex justify-start gap-5 shadow-lg shadow-red-100 rounded-md p-3">
                        <div className="w-2/5 lg:w-1/2">
                          <img
                            className="w-full h-full rounded-md object-cover"
                            src={post.image}
                            alt={post.title_en}
                          />
                        </div>
                        <div className="w-3/5 lg:w-1/2">
                          <p className="text-gray-500 mb-4 font-bold">
                            {post.date}
                          </p>
                          <h3 className="text-xl text-red-500 font-bold mb-4">
                            {post.title_en}
                          </h3>
                          <div className="flex gap-2 justify-start items-center">
                            <div className="w-12 h-12 ">
                              <img
                                className="w-full h-full rounded-full"
                                src={post.author_image}
                                alt={post.title_en}
                              />
                            </div>
                            <p className="font-bold">{post.writer}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              {i18n.language === "ar" &&
                allPosts?.slice(0, loadMore).map((post) => (
                  <motion.div
                    key={post.id}
                    whileInView={{ y: [50, 0] }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="flex w-1/3 lg:w-full"
                  >
                    <Link
                      onClick={() => {
                        // categoryFilter();
                        scrollTo({ top: 0, behavior: "smooth" })
                      }}
                      className=""
                      to={`/blog/posts/${post.id}`}
                    >
                      <div className="flex justify-start gap-5 shadow-lg shadow-red-100 rounded-md p-3">
                        <div className="w-2/5 lg:w-1/2">
                          <img
                            className="w-full h-full rounded-md object-cover"
                            src={post.image}
                            alt={post.title_ar}
                          />
                        </div>
                        <div className="w-3/5 lg:w-1/2">
                          <p className="text-gray-500 mb-4 font-bold">
                            {post.date}
                          </p>
                          <h3 className="text-xl text-red-500 font-bold mb-4">
                            {post.title_ar}
                          </h3>
                          <div className="flex gap-2 justify-start items-center">
                            <div className="w-12 h-12 ">
                              <img
                                className="w-full h-full rounded-full"
                                src={post.authorImage}
                                alt={post.title_ar}
                              />
                            </div>
                            <p className="font-bold">{post.writer}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
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
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full flex justify-center items-center my-10 ">
          <div className="relative w-[945px] h-[294px] flex justify-center items-center rounded-lg overflow-hidden mt-[102px] mb-[60px]">
            <img
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/7658355/pexels-photo-7658355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="video"
            />
            <div className="absolute inset-0 flex justify-center items-center ] bg-[#0E1F51] bg-opacity-70 rounded-lg">
              <div className="text-center text-white p-4">
                <p className="text-2xl font-semibold  text-center">
                  {t("blog.historyQuote")}
                </p>

                <Link target="_blank" to="https://wa.me/00966565861697">
                  <button className="mt-4 px-6 py-2 bg-red-500 hover:bg-scolor hover:text-white text-white font-bold rounded">
                    {t("blog.bookACall")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SinglePostPage;
