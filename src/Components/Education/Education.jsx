const Education = () => {
  return (
    <div>
      <div className="my-16 container  px-6 mx-auto">
        <h1 className="text-3xl text-center text-white my-16 font-black">
          My <span className="text-blue-500">Education</span>
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
          <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex justify-center -mt-16 md:justify-end">
              <img
                className="object-cover w-20 h-20 border-2 bg-blue-200 border-blue-200 rounded-full dark:border-blue-400 p-2"
                alt="Testimonial avatar"
                src="https://i.ibb.co/jVQhQ3C/image.png"
              />
            </div>

            <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
              Kushtia Polytechnic Institute
            </h2>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
              Diploma In Engineering (Electrical Technology)
            </p>

            <div className="flex justify-end mt-4">
              <a
                href="#"
                className="text-lg font-medium text-blue-600 dark:text-blue-300"
                role="link"
              >
                2020-2024
              </a>
            </div>
          </div>

          <div className="lg:flex md:hidden hidden"></div>

          <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex justify-center -mt-16 md:justify-end">
              <img
                className="object-cover w-20 h-20 border-2 bg-blue-200 border-blue-200 rounded-full dark:border-blue-400 p-2"
                alt="Testimonial avatar"
                src="https://i.ibb.co/jVQhQ3C/image.png"
              />
            </div>

            <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
              Kushtia Zilla School
            </h2>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
              Secondary School Certificate(Science)
            </p>

            <div className="flex justify-end mt-4">
              <a
                href="#"
                className="text-lg font-medium text-blue-600 dark:text-blue-300"
                role="link"
              >
                2018-2020
              </a>
            </div>
          </div>
          <div className="lg:flex md:hidden hidden"></div>
          <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex justify-center -mt-16 md:justify-end">
              <img
                className="object-cover w-20 h-20 border-2 bg-blue-200 border-blue-200 rounded-full dark:border-blue-400 p-2"
                alt="Testimonial avatar"
                src="https://i.ibb.co/jVQhQ3C/image.png"
              />
            </div>

            <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
              Programming Hero
            </h2>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
              Complete Web Development With Jhankar Mahabub
            </p>

            <div className="flex justify-end mt-4">
              <a
                href="#"
                className="text-lg font-medium text-blue-600 dark:text-blue-300"
                role="link"
              >
                JUNE-DEC, 2023
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
