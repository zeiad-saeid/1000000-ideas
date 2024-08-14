import { useTranslation } from "react-i18next";
import { ImQuotesRight } from "react-icons/im";
const Client = ({ projectData }) => {
  const { t, i18n } = useTranslation(["singleportfolio"]);

  return (
    <>
      <div className="client-parent sm:m-auto rounded-[10px] sm:mb-[100px] items-center ml-[150px] md:m-auto md:w-1/2 md:justify-center md:items-center md:flex-col m-auto  w-[80%] h-auto bg-[#F3FAFE] flex justify-center md:gap-[20px] relative mt-[299px] mb-[250px]">
        <ImQuotesRight className="absolute top-4 right-4 text-4xl text-[#11A4EA]" />
        <div className="client-right w-[30%] md:w-[80%] mb-10 pt-10 ml-[100px]">
          {projectData?.reviews?.map((client, index) => (
            <img
              key={index}
              className="w-1/2 md:w-1/2  m-auto md:m-auto  md:mr-[100px]  rounded-[10px] md:justify-center md:items-center md:flex  md:mt-10"
              src={client.image}
              alt={i18n.language === "ar" ? client.name_ar : client.name_en}
            />
          ))}
        </div>
        <div className="client-left w-[70%] md:w-full mt-10 px-4">
          <div className="title text-[16px] md:flex-col">
            {projectData?.reviews?.map((client, index) => (
              <div key={index} className="mb-8">
                <h5 className="font-bold">
                  {i18n.language === "ar" ? client.name_ar : client.name_en}
                </h5>
                <p style={{ wordWrap: "break-word", whiteSpace: "normal" }}>
                  {i18n.language === "ar" ? client.role_ar : client.role_en}
                </p>

                <p
                  style={{ wordWrap: "break-word", whiteSpace: "normal" }}
                  className="mt-10 md:flex md:flex-row"
                >
                  {i18n.language === "ar" ? client.text_ar : client.text_en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
