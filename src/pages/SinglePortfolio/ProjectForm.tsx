import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCheck } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ProjectForm = () => {
  const { i18n, t } = useTranslation(["singleportfolio"]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    ask: "",
    remember: false,
    project_id: "1",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const fetchProjectId = async () => {
      try {
        const response = await axios.post(
          "https://milionideas.com/dashboard/api/postProjectForm",
          { formData }
        );
        setFormData((prevFormData) => ({
          ...prevFormData,
          project_id: response.data.project_id,
        }));
      } catch (error) {
        console.error("Error fetching project ID:", error);
      }
    };

    const fetchVideoUrl = async () => {
      try {
        const response = await axios.get(
          "https://milionideas.com/dashboard/api/projects"
        );
        setVideoUrl(response.data.video);
      } catch (error) {
        console.error("Error fetching video URL:", error);
      }
    };

    fetchProjectId();
    fetchVideoUrl();
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = t("hero.formname_error");
    if (!formData.email) newErrors.email = t("hero.formemail_error");
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = t("hero.formemail_invalid");
    if (!formData.message) newErrors.message = t("hero.formmessage_error");
    if (!formData.ask) newErrors.ask = t("hero.formask_error");
    if (!formData.remember) newErrors.remember = t("hero.formremember_error");
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data on Submit:", formData);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          "https://milionideas.com/dashboard/api/postProjectForm",
          formData
        );
        if (response.status === 200) {
          setIsSubmitted(true);
          setErrors({});
          console.log("Form submitted successfully");

          // إعادة تعيين الحقول
          setFormData({
            name: "",
            email: "",
            message: "",
            ask: "",
            remember: false,
            project_id: formData.project_id, // الاحتفاظ بـ project_id كما هو
          });

          // إخفاء الرسالة بعد فترة زمنية قصيرة
          setTimeout(() => {
            setIsSubmitted(false);
          }, 2000); // يمكنك تعديل الوقت حسب الحاجة
        }
      } catch (error) {
        console.error(
          "Error submitting form:",
          error.response ? error.response.data : error.message
        );
      }
    } else {
      setErrors(validationErrors);
      setIsSubmitted(false);
      console.log("Form validation errors:", validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="contact-form w-full flex md:m-auto md:flex-col justify-center gap-20 mt-40 mb-80 md:justify-center md:items-center md:mt-5 sm:mt-5 sm:flex-col sm:m-auto sm:items-center sm:justify-center sm:flex">
      <div className="right-form w-[40%] md:w-full">
        <h2 className="text-2xl md:text-xl font-semibold text-center">
          {t("hero.formtitle")}
        </h2>
        <div className="checkbox flex justify-center items-center mt-10 gap-6">
          <div className="right-icon w-12 h-12 md:w-5 md:h-5 border-2 border-[#11A4EA] rounded-full flex justify-center items-center">
            <FaCheck className="text-[#11A4EA]" />
          </div>
          <p className="text-[20px] w-1/2 max-w-1/2">{t("hero.formtitle_1")}</p>
        </div>
        <div className="checkbox flex justify-center items-center mt-10 gap-6 mb-10">
          <div className="right-icon w-12 h-12 md:w-5 md:h-5 border-2 border-[#11A4EA] rounded-full flex justify-center items-center">
            <FaCheck className="text-[#11A4EA]" />
          </div>
          <p className="text-[20px] w-1/2 max-w-1/2">{t("hero.formtitle_2")}</p>
        </div>
        <div className="w-full flex flex-col items-center md:max-w-full ">
          <div className="input-video mb-10 md:ml-0 sm:ml-0 md:flex md:w-full md:justify-center md:items-center">
            <video
              src={videoUrl}
              controls
              className="bg-gray-50 border w-[433px] h-[264px]  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              {t("hero.form_video")}
            </video>
          </div>
        </div>
      </div>
      <div className="left-form w-[40%] md:w-full">
        <div className="card bg-gray-100 p-6 rounded-lg shadow-lg flex-col mx-auto">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                {t("hero.formname")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                {t("hero.formemail")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                {t("hero.formmasseg")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="block p-2.5 mb-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="ask"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                {t("hero.formask")}
              </label>
              <input
                type="text"
                id="ask"
                name="ask"
                value={formData.ask}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              {errors.ask && <p className="text-red-500">{errors.ask}</p>}
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  checked={formData.remember}
                  onChange={handleChange}
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                {t("hero.formremember")}
              </label>
            </div>
            <button type="submit" className="text-[#FF3E54] border-2 border-[#FF3E54] rounded-full hover:bg-[#FF3E54] focus:ring-4 focus:outline-none focus:text-white font-medium hover:text-white text-sm w-[25%] md:w-1/2 sm:w-full text-center px-5 py-2.5">{t('hero.formsubmit')}</button>
            {isSubmitted && (
            <div className="successfully mt-4">
              <div className="w-[397px] h-[300px] bg-gradient-to-b from-[#0E1F51] to-[#5C7398] flex flex-col items-center justify-center rounded-[40px]">
                <div className="relative">
                  <div className="w-20 h-20 border-4 border-red-500 rounded-full flex items-center justify-center">
                    <FaCheck className="text-[30px] text-[#FF3E54]" />
                  </div>
                </div>
                <div className="mt-4 text-white text-lg">{t("your message sent successfully")}</div>
              </div>
            </div>
          )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
