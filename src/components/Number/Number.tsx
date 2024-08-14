import { useState } from 'react';
import { AiOutlineAppstore, AiOutlineStar, AiOutlineUser, AiOutlineTrophy } from "react-icons/ai";
import { useTranslation } from 'react-i18next';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Number = () => {
  const { t } = useTranslation(["number", "translation"]);
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="w-full bg-fColor text-white flex h-[250px] md:flex-row justify-center items-center gap-[10%]  md:mb-[60px]">
      <div className="text-center md:w-1/4">
        <AiOutlineAppstore className="mx-auto text-[50px]" />
        <h4 style={{fontFamily:'sans-serif'}} className="text-[30px] font-extrabold mt-2  ">
          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            {counterOn && <CountUp start={0} end={200} duration={2} delay={0} />} +
          </ScrollTrigger>
        </h4>
        <p className="mt-2">{t('number.number_projects')}</p>
      </div>
      <div className="text-center md:w-1/4">
        <AiOutlineStar className="mx-auto text-[50px]" />
        <h4 style={{fontFamily:'sans-serif'}} className="text-[30px] font-extrabold mt-2">
          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            {counterOn && <CountUp start={0} end={400} duration={2} delay={0} />} +
          </ScrollTrigger>
        </h4>
        <p className="mt-2">{t('number.number_review')}</p>
      </div>
      <div className="text-center md:w-1/4">
        <AiOutlineUser className="mx-auto text-[50px]" />
        <h4 style={{fontFamily:'sans-serif'}} className="text-[30px] font-extrabold mt-2">
          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            {counterOn && <CountUp start={0} end={300} duration={2} delay={0} />} +
          </ScrollTrigger>
        </h4>
        <p className="mt-2">{t('number.number_clients')}</p>
      </div>
      <div className="text-center md:w-1/4">
        <AiOutlineTrophy className="mx-auto text-[50px]" />
        <h4 style={{fontFamily:'sans-serif'}} className="text-[30px] font-extrabold mt-2">
          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            {counterOn && <CountUp start={0} end={600} duration={2} delay={0} />} +
          </ScrollTrigger>
        </h4>
        <p className="mt-2">{t('number.number_award_winnings')}</p>
      </div>
    </div>
  );
};

export default Number;
