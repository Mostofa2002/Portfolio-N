import { IoMdDownload } from "react-icons/io";

const Banner = () => {
  return (
    <div className="container px-6 py-16 mx-auto">
      <div className="items-center lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl md:text-5xl font-black  dark:text-white lg:text-5xl text-blue-500 ">
              <span className=""> I make website</span> <br /> that delight and
              <br />
              inspire people
            </h1>

            <p className="mt-5 font-medium text-lg text-white">
              Hi! I’m Taj, A MERN Stack developer based in Kushtia.
              <br className="lg:flex md:flex hidden" /> I create user-friendly
              websites for fast-growing startups.
            </p>

            <button className=" w-auto px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg  hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              <div className="flex gap-3 lg:text-xl items-center">
                Download Cv <IoMdDownload />
              </div>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <div className="bg-pink-500 flex justify-center custom-border-radius">
            <img
              className="w-full h-96 lg:max-w-3xl"
              src="https://i.ibb.co/D1HL5Hg/Professional-removebg-preview.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
