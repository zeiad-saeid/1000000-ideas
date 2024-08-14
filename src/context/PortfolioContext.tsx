import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [allPortfolioData, setAllPortfolioData] = useState([]);
  const [portfolioCategory, setPortfolioCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const BASE_URL = "https://milionideas.com/dashboard/api";
  const getPortfolioData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://milionideas.com/dashboard/api/projects"
      );
      const data = await response.json();
      setPortfolioData(data.projects);
      setAllPortfolioData(data.projects);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };
  const getPorftolioCategory = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://milionideas.com/dashboard/api/project-departments"
      );
      const data = await response.json();
      setPortfolioCategory(data.ProjectDepartments);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    // getPortfolioData();
    getPorftolioCategory();
  }, []);

  return (
    <PortfolioContext.Provider
      value={{
        isLoading,
        portfolioData,
        allPortfolioData,
        portfolioCategory,
        error,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
