import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import AllBlogs from "../../components/AllBlogs";
import LatestPosts from "../../components/LatestPosts";
import images from "../../images";
import "./Blog.scss";
const Blog = () => {
  const { t, i18n } = useTranslation(["blog", "translation"]);

  return (
    <>
      <div className="py-20">
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-9xl text-center md:text-6xl mb-12">
            {t("blog.blog")}
          </h2>
          <div className="w-full h-96 mb-7">
            <img
              className="w-full h-full object-cover"
              src={images.blogSection}
              alt="blog section image"
            />
          </div>
        </motion.div>
        {/* <h3 className="text-5xl text-center md:text-3xl mb-7">Our Work</h3> */}
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <LatestPosts />
        </motion.div>
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <AllBlogs />
        </motion.div>
      </div>
    </>
  );
};

export default Blog;
