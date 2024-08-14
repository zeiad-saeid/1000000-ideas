import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [allPosts, setAllPosts] = useState([]);
  const [allPostsFilter, setAllPostsFilter] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const getPostsCategories = async () => {
  //   try {
  //     setIsLoading(true);

  //     const result = await axios.get(
  //       "https://milionideas.com/dashboard/api/blog-categories"
  //     );
  //     setCategories(result.data.blogcategories);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.error("Error Ocurred when fetching data:", error);
  //   }
  // };
  // const getPosts = async () => {
  //   try {
  //     setIsLoading(true);

  //     const result = await axios.get(
  //       "https://milionideas.com/dashboard/api/blogs"
  //     );
  //     setAllPosts(result.data.lastBlogs);
  //     setAllPostsFilter(result.data.lastBlogs);
  //     setFilteredPosts(result.data.lastBlogs);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.error("Error Ocurred when fetching data:", error);
  //   }
  // };
  // useEffect(() => {
  //   getPosts();
  //   getPostsCategories();
  // }, []);

  return (
    <BlogContext.Provider
      value={{
        isLoading,
        allPosts,
        allPostsFilter,
        categories,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
