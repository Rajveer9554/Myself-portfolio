import React from 'react'





export default function About() {
  return (
      <div className="bg-gray-800 y-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12 group transition-all duration-300">
                    <img className='rounded-full mx-auto hover:border hover:shadow hover:scale-105
             transition-all duration-300'
                          src="/rajveer.jpg"
                          alt="Rajveer"
                      /> 
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Hello! I'm Rajveer Pratap Singh
                      </h2>
                      <p className="mt-6 text-gray-600">
                          A passionate and dedicated Computer Science student from GITM, Lucknow. With a strong foundation in software development and a creative mindset, I specialize as a Full-Stack Web Developer, proficient in both Frontend and Backend technologies.

My journey in tech began with a curiosity to build things that people can interact with — from responsive user interfaces to powerful backend systems. I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
                      </p>
                      
                  </div>
              </div>
          </div>
      </div>
  );
}