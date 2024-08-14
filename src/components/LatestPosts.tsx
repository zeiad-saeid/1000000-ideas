import { Link } from "react-router-dom";
import { posts, data } from "../data";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";

const LatestPosts = () => {
  const { t, i18n } = useTranslation(["blog", "translation"]);
  const [allPosts, setAllPosts] = useState([]);
  const getPosts = async () => {
    try {
      const result = await axios.get(
        "https://milionideas.com/dashboard/api/blogs"
      );
      setAllPosts(result.data.lastBlogs);
    } catch (error) {
      console.error("Error Ocurred when fetching data:", error);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  posts.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
  return (
    <>
      <div className="">
        <h3 className="text-5xl font-semibold text-center md:text-3xl mb-7">
          {t("blog.latest_posts")}
        </h3>
        <div className="flex justify-center items-center px-20 gap-4 lg:flex-col md:px-5 ">
          <div className="w-1/2 lg:w-3/4 md:w-full">
            {allPosts.slice(0, 1).map((post) => (
              <Link
                to={`/blog/posts/${post.id}`}
                onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
              >
                <div className="flex justify-center items-start flex-col shadow-lg shadow-red-100 rounded-md p-6">
                  <div className="mb-4 w-full">
                    <img
                      className="w-full h-full rounded-t-md"
                      src={post.image}
                      alt={i18n.language === "en" ? post.title_en : post.title_ar}
                    />
                  </div>
                  <p className="text-gray-500 mb-4 font-bold">{post.date}</p>
                  <h3 className="text-xl text-red-500 font-bold mb-4">
                    {i18n.language === "en" ? post.title_en : post.title_ar}
                  </h3>
                  <div className="flex gap-2 justify-start items-center">
                    <div className="w-12 h-12 ">
                      <img
                        className="w-full h-full rounded-full"
                        src={post.authorImage}
                        alt={
                          i18n.language === "en" ? post.title_en : post.title_ar
                        }
                      />
                    </div>
                    <p className="font-bold">{post.writer}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="w-1/2 h-full flex flex-col justify-between gap-7 lg:w-3/4 md:w-full">
            {allPosts.slice(1, 3).map((post) => (
              <Link
                to={`/blog/posts/${post.id}`}
                onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
              >
                <div className="flex justify-start gap-5 shadow-lg shadow-red-100 rounded-md p-3 h-60">
                  <div className="w-2/5">
                    <img
                      className="w-full h-full rounded-md object-cover"
                      src={post.image}
                      alt={i18n.language === "en" ? post.title_en : post.title_ar}
                    />
                  </div>
                  <div className="w-3/5">
                    <p className="text-gray-500 mb-4 font-bold">{post.date}</p>
                    <h3 className="text-xl text-red-500 font-bold mb-4">
                      {i18n.language === "en" ? post.title_en : post.title_ar}
                    </h3>
                    <div className="flex gap-2 justify-start items-center">
                      <div className="w-12 h-12 ">
                        <img
                          className="w-full h-full rounded-full"
                          src={post.authorImage}
                          alt={i18n.language === "en" ? post.title_en : post.title_ar}
                        />
                      </div>
                      <p className="font-bold">{post.writer}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestPosts;
