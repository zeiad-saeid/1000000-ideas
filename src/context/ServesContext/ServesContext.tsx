import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [serviceDetails, setServiceDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchServices() {
    try {
      const { data } = await axios.get("https://milionideas.com/dashboard/api/services");
      setServices(data.services);
      setServiceDetails(data.data); 
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <ServicesContext.Provider value={{ services, serviceDetails, loading, error }}>
      {children}
    </ServicesContext.Provider>
  );
};
