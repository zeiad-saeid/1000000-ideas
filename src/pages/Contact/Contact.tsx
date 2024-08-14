import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
  FaCheck,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "./Contact.scss";

const Contact = () => {
  const { t, i18n } = useTranslation(["contact", "translation"]);

  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission
  const [settings, setSettings] = useState(null);

  const getSettings = async () => {
    try {
      const result = await axios.get(
        "https://milionideas.com/dashboard/api/settings"
      );
      setSettings(result.data);
    } catch (error) {
      console.error("Error occurred when fetching data:", error);
    }
  };

  useEffect(() => {
    getSettings();
  }, []);

  const socials = [
    { icon: <FaLinkedinIn />, link: settings?.setting?.linkedin },
    { icon: <FaInstagram />, link: settings?.setting?.instgram },
    { icon: <FaFacebook />, link: settings?.setting?.facebook },
    { icon: <FaTwitter />, link: settings?.setting?.twitter },
  ];

  type Inputs = {
    name: string;
    email: string;
    phone: string;
    message: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: Inputs) => {
    try {
      const response = await axios.post(
        "https://milionideas.com/dashboard/api/postContactus",
        data
      );
      console.log("Form submitted successfully:", response.data);
      setIsSubmitted(true); // Set the submission state to true upon successful submission
    } catch (error) {
      console.error("Error occurred when submitting the form:", error);
      setIsSubmitted(false); // Set the submission state to false if there's an error
    }
  };

  return (
    <div className="millionideas__contact">
      <div className="flex justify-between items-start py-10 px-20 gap-5 md:flex-col md:px-5 lg:px-10">
        <div className="w-[60%] md:w-[100%] lg:w-[50%]">
          <div>
            <h2 className="text-4xl pb-10 md:text-center">
              <span className="text-customBlueColor-200">
                {t("contact.get")}
              </span>{" "}
              {t("contact.in_touch")}
            </h2>
            {isSubmitted ? (
              <div className="successfully mt-4 flex items-center justify-center">
                <div className="w-[397px] h-[300px] bg-gradient-to-b from-[#0E1F51] to-[#5C7398] flex flex-col items-center justify-center rounded-[40px]">
                  <div className="relative">
                    <div className="w-20 h-20 border-4 border-red-500 rounded-full flex items-center justify-center">
                      <FaCheck className="text-[30px] text-[#FF3E54]" />
                    </div>
                  </div>
                  <div className="mt-4 text-white text-lg">
                    {t("contact.successfully")}
                  </div>
                </div>
              </div>
            ) : (
              <form
                className="flex flex-col justify-start items-start gap-10"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-col w-full gap-2">
                  <label htmlFor="name" className="text-2xl font-semibold">
                    {t("contact.name")}
                  </label>
                  <input
                    className="p-3 bg-gray-100 border-gray-400 border-2 rounded-md font-semibold placeholder-gray-500"
                    placeholder={t("contact.name_placeholder")}
                    {...register("name", {
                      required: t("contact.name_error"),
                      minLength: {
                        value: 4,
                        message: "Min length is 4",
                      },
                    })}
                    type="text"
                  />
                  <p className="text-red-500">{errors.name?.message}</p>
                </div>
                <div className="flex gap-10 w-full lg:flex-col">
                  <div className="flex flex-col gap-2 w-1/2 lg:w-full">
                    <label className="text-2xl font-semibold" htmlFor="email">
                      {t("contact.email")}
                    </label>
                    <input
                      className="p-3 bg-gray-100 border-gray-400 border-2 rounded-md font-semibold placeholder-gray-500"
                      {...register("email", {
                        required: t("contact.email_error"),
                      })}
                      type="email"
                      placeholder={t("contact.email_placeholder")}
                    />
                    <p className="text-red-500">{errors.email?.message}</p>
                  </div>
                  <div className="flex flex-col gap-2 w-1/2 lg:w-full">
                    <label className="text-2xl font-semibold" htmlFor="phone">
                      {t("contact.phone")}
                    </label>
                    <input
                      style={{ fontFamily: "sans-serif" }}
                      className="p-3 bg-gray-100 border-gray-400 border-2 rounded-md font-semibold placeholder-gray-500"
                      {...register("phone", {
                        required: t("contact.phone_error"),
                      })}
                      type="text"
                      placeholder={t("contact.phone_placeholder")}
                    />
                    <p className="text-red-500">{errors.phone?.message}</p>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-2">
                  <label htmlFor="message" className="text-2xl font-semibold">
                    {t("contact.message")}
                  </label>
                  <textarea
                    className="p-3 bg-gray-100 border-gray-400 border-2 rounded-md font-semibold placeholder-gray-500"
                    placeholder={t("contact.message_placeholder")}
                    {...register("message", {
                      required: t("contact.message_error"),
                    })}
                  />
                  <p className="text-red-500">{errors.message?.message}</p>
                </div>
                <input
                  className="p-2 bg-pcolor text-white rounded-lg cursor-pointer"
                  value={t("contact.send_message")}
                  type="submit"
                />
              </form>
            )}
          </div>
        </div>
        <div className="w-[40%] md:w-[100%] lg:w-[50%]">
          <div className="flex flex-col items-center justify-center">
            {i18n.language === "ar" ? (
              <h2 className="text-4xl pb-10">
                {t("contact.info")}{" "}
                <span className="text-customBlueColor-200">
                  {t("contact.contact")}
                </span>{" "}
              </h2>
            ) : (
              <h2 className="text-4xl pb-10">
                <span className="text-customBlueColor-200">
                  {t("contact.contact")}
                </span>{" "}
                {t("contact.info")}
              </h2>
            )}
            <div className="md:w-full w-[70%] bg-customBlueColor-200 rounded-lg pt-10 pb-5 px-10 flex flex-col justify-start items-start text-white gap-5 md:justify-center md:items-center">
              <div className="flex gap-2 items-start justify-start p-1">
                <FaPhoneAlt className="pt-1 text-xl" />
                <div className="flex flex-col justify-start items-start">
                  <p>{t("contact.phone")}</p>
                  <p style={{ fontFamily: "sans-serif" }}>
                    {settings?.setting?.phone1}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-start justify-start p-1">
                <MdEmail className="pt-1 text-xl" />
                <div className="flex flex-col justify-start items-start">
                  <p>{t("contact.email_address")}</p>
                  <p>{settings?.setting?.email}</p>
                </div>
              </div>
              <div className="flex gap-2 items-start justify-start p-1">
                <FaLocationDot className="pt-1 text-xl" />
                <div className="flex flex-col justify-start items-start">
                  <p>{t("contact.address_info")}</p>
                  <p>
                    {i18n.language === "ar"
                      ? settings?.setting?.address_ar
                      : settings?.setting?.address_en}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-center pb-5 text-2xl font-bold">
                  {t("contact.follow_us")}
                </h3>
                <div className="flex gap-5 flex-wrap justify-center">
                  {socials.map((item, index) => (
                    <a
                      className="flex text-3xl p-2 justify-between rounded-xl bg-white text-scolor"
                      key={index}
                      href={item.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative pb-[46%] md:pb-[80%] ">
        {settings ? (
          <iframe
            className="w-full h-full absolute top-0 left-0"
            src={`https://maps.google.com/maps?width=720&height=600&hl=en&q=${settings?.setting?.lat},${settings?.setting?.long}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Contact;
