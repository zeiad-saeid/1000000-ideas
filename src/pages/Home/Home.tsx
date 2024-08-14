import { motion } from "framer-motion";
import ClientsReviews from "../../components/HomeComponents/ClientsReviews";
import CompaniesReviews from "../../components/HomeComponents/CompaniesReviews";
import Hero from "../../components/HomeComponents/Hero";
import HeroSection1 from "../../components/HomeComponents/HeroSection1";
import HowToStartSection from "../../components/HomeComponents/HowToStartSection";
import ImageSection1 from "../../components/HomeComponents/ImageSection1";
import ServicesSection from "../../components/HomeComponents/ServicesSection";
import Team from "../../components/Team/Team";
import WhatsappBtn from "../../components/WhatsappBtn/WhatsappBtn";
import "./Home.scss";
const Home = () => {
  return (
    <>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
      </motion.div>
      <motion.div
        whileInView={{
          y: [100, 50, 0],

          opacity: [0, 0, 1],
        }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection1 />
      </motion.div>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <ServicesSection />
      </motion.div>
      <motion.div
        whileInView={{
          y: [100, 50, 0],

          opacity: [0, 0, 1],
        }}
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
      <motion.div
        whileInView={{
          y: [100, 50, 0],

          opacity: [0, 0, 1],
        }}
        transition={{ duration: 0.5 }}
      >
        <ImageSection1 />
      </motion.div>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <ClientsReviews />
      </motion.div>
      <motion.div
        whileInView={{
          y: [100, 50, 0],

          opacity: [0, 0, 1],
        }}
        transition={{ duration: 0.5 }}
      >
        <CompaniesReviews />
      </motion.div>
      {/* <WhatsappBtn /> */}
    </>
  );
};

export default Home;
