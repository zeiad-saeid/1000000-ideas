import SectionTitle from "../../components/SectionTitle";
import AboutHero from "../../components/AboutComponents/AboutHero/AboutHero";
import { motion } from "framer-motion";
import Team from "../../components/Team/Team";
import { useTranslation } from "react-i18next";
import HowToStartSection from "../../components/HomeComponents/HowToStartSection";

const About = () => {
  const { t } = useTranslation(["about", "translation"]);

  return (
    <>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle title={t("about_hero.about_title")} />
        <AboutHero />
      </motion.div>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <HowToStartSection />
      </motion.div>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <Team />
      </motion.div>
    </>
  );
};

export default About;
