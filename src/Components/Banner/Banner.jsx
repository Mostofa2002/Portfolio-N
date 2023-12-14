import img from "../../assets/Professional.png";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 1.5, delay: 1 }}
      className="lg:max-w-7xl mx-auto"
    >
      <div className="flex lg:flex-row flex-col gap-10 items-center justify-center ">
        <div className="lg:w-1/2 ">
          <h1 className="lg:text-6xl text-4xl font-black">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              I develop website
            </span>
            <br /> that delight and <br /> inspire people.
          </h1>
          <p className="mt-5 lg:text-lg font-medium">
            Hi! Mostofa Taj, a Mern Stack Developer. <br /> I create
            user-friendly website for fast-growing startups.
          </p>
        </div>
        <div>
          <img className="w-[300px] h-[300px]" src={img} alt="" />
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
