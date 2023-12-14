import Banner from "../Banner/Banner";
import Nav from "../Nav/Nav";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div>
      <Nav />
      <Banner />
    </motion.div>
  );
};

export default Home;
