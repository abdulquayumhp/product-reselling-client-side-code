import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <img
              src="https://www.boomsolutions.co.uk/wp-content/uploads/2019/11/404-error.png"
              alt=""
            />
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <p>
            <Link
              to="/signIn"
              className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900 bg-blue-800 text-white mt-10"
            >
              Please Login First
            </Link>
          </p>
          <br />
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900 bg-blue-800 text-white mt-10"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
