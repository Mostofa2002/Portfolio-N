import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="my-16">
      <h1 className="text-3xl text-center text-white my-16 font-black">
        My Top <span className="text-blue-500">Projects</span>
      </h1>
      <div className="flex justify-center items-center lg:flex-row flex-col content-around max-w-screen-xl mx-auto gap-16 ">
        <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="px-4 py-2">
            <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
              Micro Donation
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Food Donation And Charity Website by using MongoDB CRUD Operation
              ,Firebase Authentication, React-SPA, React-Router-Dom.
            </p>
            <p>#React #Express JS #Node Js #MongoDb</p>
          </div>
          <div className="border-2 border-blue-500 p-3">
            <img
              className="object-cover w-full h-48 mt-2"
              src="https://i.ibb.co/6gGgsPj/scrnli-12-14-2023-6-57-55-PM.png"
              alt="NIKE AIR"
            />
          </div>
          <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
            <Link to="https://micro-donation-40d62.web.app/">
              <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                Live preview
              </button>
            </Link>

            <Link to="https://github.com/Mostofa2002/micro-donation-client">
              <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                Code Link
              </button>
            </Link>
          </div>
        </div>

        <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="px-4 py-2">
            <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
              Clone-Star-Tech
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Online Tech Product Selling Website, MongoDB CRUD Operation,
              Firebase Authentication,React-Router-Dom, Dark Mode.
            </p>
            <p>#React #Express JS #Node Js #MongoDb</p>
          </div>
          <div className="border-2 border-blue-500 p-3">
            <img
              className="object-cover w-full h-48 mt-2"
              src="https://i.ibb.co/cccJYcg/scrnli-12-14-2023-6-56-54-PM.png"
              alt="NIKE AIR"
            />
          </div>
          <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
            <Link to="https://brand-product-d7651.web.app/">
              <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                Live preview
              </button>
            </Link>

            <Link to="https://github.com/Mostofa2002/Clone-Star-Tech-Client">
              <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                Code Link
              </button>
            </Link>
          </div>
        </div>

        <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="px-4 py-2">
            <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
              Micro Learner
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              E-learning website, MongoDB CRUD operation, Firebase & JWT
              Authentication with Interceptors, Admin, Teacher, User Dashboard
              Stripe Payment Method.
            </p>
            <p>#React #Express JS #Node Js #MongoDb</p>
          </div>
          <div className="border-2 border-blue-500 p-3">
            <img
              className="object-cover w-full h-48 mt-2"
              src="https://i.ibb.co/hXQn8rJ/scrnli-12-14-2023-6-57-31-PM.png"
              alt="NIKE AIR"
            />
          </div>
          <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
            <Link to="https://micro-learner.web.app/">
              <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                Live preview
              </button>
            </Link>

            <Link to="https://github.com/Mostofa2002/micro-learner-client">
              <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                Code Link
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-20">
        <Link to="https://github.com/Mostofa2002?tab=repositories">
          <button className="lg:w-auto px-7 py-2 mt-6 text-base tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-500 rounded-lg border-2 border-blue-500 hover:bg-transparent flex gap-2">
            See More Projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
