import React, {useEffect} from "react";
import { motion } from "framer-motion";

export default function About() {
  // Page load hone pe top par scroll
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="bg-gray-800 y-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 500 }}     // Start: invisible + down
        animate={{ opacity: 1, y: 0 }}      // End: visible + normal position
        transition={{ duration: 0.8, ease: "easeOut" }}
        
      >
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12 group transition-all duration-300">
           <motion.div
        initial={{ opacity: 0, y: 200 }}     // Start: invisible + down
        animate={{ opacity: 1, y: 0 }}      // End: visible + normal position
        transition={{ duration: 0.8, ease: "easeOut" }}
        
      >
            <img
              className="rounded-full mx-auto hover:border hover:scale-105
             transition-all duration-300"
              src={`${import.meta.env.BASE_URL}rajveers.jpg`}
              alt="Rajveer"
            />
            </motion.div>
          </div>

          <div className="md:7/12 lg:w-6/12">
          <div className="hover:font-extrabold  rounded-lg hover:scale-105
             transition-all duration-300">

          
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Hello! I'm Rajveer Pratap Singh
            </h2>
            <p className="font-semibold mt-6 text-gray-600">
              A passionate and dedicated Computer Science student from GITM,
              Lucknow. With a strong foundation in software development and a
              creative mindset, I specialize as a Full-Stack Web Developer,
              proficient in both Frontend and Backend technologies. My journey
              in tech began with a curiosity to build things that people can
              interact with — from responsive user interfaces to powerful
              backend systems. I enjoy turning complex problems into simple,
              beautiful, and intuitive solutions.
            </p>
            <p className="font-semibold mt-6 text-gray-600">
              With every project I build, I aim to learn something new and solve
              real-world problems. I'm always eager to improve my skills,
              contribute to exciting tech communities, and collaborate with
              like-minded people.
            </p>
            
            </div>

            <div className=" hover:font-extrabold   hover:scale-105
             transition-all duration-300">
          
            <p className="font-extrabold mt-6 text-gray-600">
               
              What I'm interested in:
              <br />
            </p>
            <p className="font-semibold mt-2 text-gray-600">
              * Frontend & Backend Web Development
              <br />
              * Open Source Contribution <br />
              * Building real-world web applications <br />
              * Placement preparation & DSA <br />
               </p>
               </div>
               
               <div className="hover:font-extrabold hover:scale-105
             transition-all duration-300">
              <p className="font-bold mt-6 text-gray-600"> My Goal:</p>
              <p className="font-semibold mt-2 text-gray-600">
                To become a full-stack developer and work with a company where I
                can grow, learn from mentors, and contribute meaningfully to
                impactful projects.
              </p>
              </div>
           
          </div>
        </div>
      </div>
      </motion.div>
    </div>
  );
}
