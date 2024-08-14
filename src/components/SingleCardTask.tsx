import { useTranslation } from "react-i18next";
import { FaCalendarAlt, FaRegUser } from "react-icons/fa";
import { PiArrowRightFill } from "react-icons/pi";
const SingleCardTask = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="w-[383px] h-[444px] ">
        <div className="before:content-['Web Design'] before:block before:whitespace-pre before:m-2 before:text-white before:bg-pcolor before:w-25 before:h-10 before:z-10 before:absolute h-[245px] w-[383px] justify-center items-center">
          <img src="/src/assets/cardImage.png" alt="cardImage.png" />
        </div>
        <div className="flex gap-5 mt-2 ">
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <FaRegUser className="text-customBlueColor-light font-extrabold text-xl " />
            <p className="">Daniel Lee</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <FaCalendarAlt className="text-customBlueColor-light font-extrabold text-xl" />
            <p>01 Jan 2045</p>
          </div>
        </div>
        <div className="pt-3 ps-2">
          <h3 className=" text-scolor text-[20px] font-bold ">
            {" "}
            How to build a website
          </h3>
          <p className="text-pretty pt-3 text-xs">
            Building a website involves several steps, from planning and design
            to development and deployment.
          </p>
        </div>
        <div className="flex flex-wrap  px-2 pt-5 items-center gap-3  ">
          <p className="text-[14] ">Read More</p>
          <PiArrowRightFill className={i18n.language === 'ar' ? 'rotate-180' : ''} />
        </div>
      </div>
    </>
  );
};

export default SingleCardTask;
