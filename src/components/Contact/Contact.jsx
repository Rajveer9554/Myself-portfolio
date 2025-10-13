import React, { useEffect } from "react";

export default function Contact() {
  // Page load hone pe top par scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative py-30 flex items-top justify-center  min-h-[700px]     h-10vh bg-gradient-to-r from-black via-purple-600 to-pink-500 bg-[length:400%_400%] animate-gradientShift ">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-white  sm:rounded-lg">
              <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                Get in touch:
              </h1>
              <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                Fill in the form to start a conversation
              </p>

              <div className="flex items-center mt-8 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  Lucknow, Uttar Pradesh, India
                </div>
              </div>

              <div className="flex items-center mt-4 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  +91 9554120959
                </div>
              </div>

              <div className="flex items-center mt-2 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  <a
                    href="mailto:rajveer786067@gmail.com"
                    className="text-blue-500 hover:underline"
                  >
                    rajveer786067@gmail.com
                  </a>
                </div>
                
                </div>
                {/* LinkedIn */}
              <div className="flex items-center mt-4 text-gray-600">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-blue-700"
                >
                  <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.5s1.34 3 2.98 3 2.98-1.34 2.98-3-1.34-3-2.98-3zM2.4 21h5.17v-11H2.4v11zM9.2 10h4.95v1.52h.07c.69-1.3 2.38-2.67 4.89-2.67 5.23 0 6.2 3.43 6.2 7.89v8.26h-5.17v-7.32c0-1.74-.03-3.98-2.42-3.98-2.42 0-2.79 1.89-2.79 3.85v7.45H9.2v-11z" />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  <a
                    href="https://www.linkedin.com/in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center mt-4 text-gray-600">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-pink-500"
                >
                  <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.965.24 2.422.403a4.918 4.918 0 011.784 1.035 4.918 4.918 0 011.035 1.784c.163.457.347 1.252.403 2.422.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.965-.403 2.422a4.918 4.918 0 01-1.035 1.784 4.918 4.918 0 01-1.784 1.035c-.457.163-1.252.347-2.422.403-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.965-.24-2.422-.403a4.918 4.918 0 01-1.784-1.035 4.918 4.918 0 01-1.035-1.784c-.163-.457-.347-1.252-.403-2.422C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.965.403-2.422a4.918 4.918 0 011.035-1.784 4.918 4.918 0 011.784-1.035c.457-.163 1.252-.347 2.422-.403C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07 5.776.127 4.79.322 4.03.555a7.12 7.12 0 00-2.575 1.066A7.12 7.12 0 00.555 4.03c-.233.76-.428 1.746-.485 3.022C.012 8.332 0 8.736 0 12s.012 3.668.07 4.948c.057 1.276.252 2.262.485 3.022a7.12 7.12 0 001.066 2.575 7.12 7.12 0 002.575 1.066c.76.233 1.746.428 3.022.485C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.276-.057 2.262-.252 3.022-.485a7.12 7.12 0 002.575-1.066 7.12 7.12 0 001.066-2.575c.233-.76.428-1.746.485-3.022.058-1.28.07-1.684.07-4.948s-.012-3.668-.07-4.948c-.057-1.276-.252-2.262-.485-3.022a7.12 7.12 0 00-1.066-2.575 7.12 7.12 0 00-2.575-1.066c-.76-.233-1.746-.428-3.022-.485C15.668.012 15.264 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  <a
                    href="https://www.instagram.com/__rajveer_pra_14"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:underline"
                  >
                    Instagram Profile
                  </a>
                </div>
              </div>
                </div>

            <form className="p-6 flex flex-col  justify-center">
              <div className="flex flex-col">
                <label for="name" className="hidden">
                  Full Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label for="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label for="tel" className="hidden">
                  Number
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Telephone Number"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
              >
                Submit
              </button>
              
            </form>
           
          </div>
          
        </div>
        
      </div>

      
    </div>
  );
}
