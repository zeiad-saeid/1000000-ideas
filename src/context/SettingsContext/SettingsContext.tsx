import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const SettingsContext = createContext({
  address: "",
  address_ar: "",
  phone1: "",
  phone2: "",
  contact_email: "",
  facebook: "",
  youtube: "",
  instagram: "",
  linkedin: "",
  whatsapp: "",
  twitter: "",
  number_1: "0",
  number_2: "0",
  number_3: "0",
  number_4: "0",
  name: "",
  logo: "",
  icon: "",
  lat: "0", // added default values for lat and long
  long: "0",
});

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    address: "",
    address_ar: "",
    phone1: "",
    phone2: "",
    contact_email: "",
    facebook: "",
    youtube: "",
    instagram: "",
    linkedin: "",
    whatsapp: "",
    twitter: "",
    number_1: "0",
    number_2: "0",
    number_3: "0",
    number_4: "0",
    name: "",
    logo: "",
    icon: "",
    lat: "0", // added default values for lat and long
    long: "0",
  });

  async function fetchSettings() {
    const { data } = await axios.get(
      "https://milionideas.com/dashboard/api/settings"
    );
    setSettings(data.setting);
  }

  useEffect(() => {
    fetchSettings();
  }, []);

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
};
