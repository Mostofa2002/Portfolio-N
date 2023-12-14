import { useState } from "react";
import { IoIosMenu, IoMdAddCircleOutline } from "react-icons/io";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div x-data={{ isOpen: false }} className="bg-transparent">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="flex items-center justify-between">
              <a href="#">
                <img
                  className="w-auto h-6 sm:h-7"
                  src="https://i.ibb.co/qCyJC9N/Professional.png"
                  alt=""
                />
              </a>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 text-3xl"
                  aria-label="toggle menu"
                >
                  {!isOpen ? <IoIosMenu /> : <IoMdAddCircleOutline />}
                </button>
              </div>
            </div>

            <div
              x-cloak
              className={`absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "opacity-0 -translate-x-full"
              }`}
            >
              <div className="flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                <a
                  href="#"
                  className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                >
                  Skills
                </a>
                <a
                  href="#"
                  className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                >
                  Experience
                </a>
                <a
                  href="#"
                  className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                >
                  Education
                </a>
              </div>

              <div className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2">
                <Link to="https://www.facebook.com/mostofa.taj.23/">
                  <h1 className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 text-3xl">
                    <FaFacebookSquare />
                  </h1>
                </Link>

                <Link to="https://www.linkedin.com/in/mostofa-taj-52472a1b9/">
                  <h1 className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 text-3xl">
                    <FaLinkedin />
                  </h1>
                </Link>
                <Link to="https://github.com/Mostofa2002">
                  <h1 className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 text-3xl">
                    <FaGithubSquare />
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
