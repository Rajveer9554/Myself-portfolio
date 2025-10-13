import React, {useEffect} from "react";
import { motion, useScroll, useTransform } from "framer-motion";
 import { useRef } from "react";

export default function About() {
  // Page load hone pe top par scroll
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

     const ref = useRef(null); 
     const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"], });
     // Scroll ke hisaab se image shift hoti rahegi 
      const x = useTransform(scrollYProgress, [0, 1], [0, -250]); 
      const y = useTransform(scrollYProgress, [0, 1], [0, -50]);


  return (
   <section
  ref={ref}
  className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-20 overflow-hidden animated-bg"
>
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-purple-600 to-pink-500 bg-[length:400%_400%] animate-gradientShift">
</div>
  {/* ---Top Section---- */}
  <div className="w-full flex flex-col md:flex-row items-center justify-between px-10 pt-20">
    {/* Profile Image */}
    <div className="flex justify-center md:justify-start w-full md:w-1/2">
      <motion.img
        src={`${import.meta.env.BASE_URL}rajveers.jpg`}
        alt="Rajveer"
        className="rounded-full w-80 h-80 md:w-120 md:h-120 object-cover shadow-2xl border-4 border-white"
        style={{ x, y }}
      />
    </div>

    {/* Moving Name */}
    <div className="flex justify-center md:justify-end w-full md:w-1/2 relative mt-6 md:mt-0">
      <motion.h1
        className="absolute top-10 right-10 py-2 text-3xl md:text-6xl font-extrabold text-transparent whitespace-nowrap bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400"
        animate={{
          x: [0, 150,  0,  0],
          y: [0, 0,  -150, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Coding the future,<br /> designing with precision......
      </motion.h1>
    </div>
  </div>

  {/* ---- DETAILS SECTION ---- */}
  <motion.div
    className=" max-w-4xl mr-4 mx-auto   mt-24 p-10 mb-50 rounded-3xl bg-white/70 backdrop-blur-lg shadow-2xl shadow-white border border-white/20"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-4xl font-bold py-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-900 to-purple-500 animate-bounce">
      Hello! I'm Rajveer Pratap Singh
    </h2>

     <p className="font-semibold mt-6 text-black text-xl">
      
              A passionate and dedicated Computer Science student from GITM,
              Lucknow. With a strong foundation in software development and a
              creative mindset, I specialize as a Full-Stack Web Developer,
              proficient in both Frontend and Backend technologies. My journey
              in tech began with a curiosity to build things that people can
              interact with — from responsive user interfaces to powerful
              backend systems. I enjoy turning complex problems into simple,
              beautiful, and intuitive solutions.
            
            


    
              With every project I build, I aim to learn something new and solve
              real-world problems. I'm always eager to improve my skills,
              contribute to exciting tech communities, and collaborate with
              like-minded people.
            
            </p>

            
          
            <p className="font-bold text-3xl mt-6 text-transparent animate-bounce bg-clip-text bg-gradient-to-r from-pink-700 via-green-600 to-purple-500">
               
              What I'm interested in:
              
            </p>
            
              <ul className="grid grid-cols-2 md:grid-cols-1 gap-3 text-black text-lg mt-4" >
              <li>* Frontend & Backend Web Development</li>
              
              <li>* Open Source Contribution </li>
              <li>* Building real-world web applications </li>
              <li> * Placement preparation & DSA </li>
              </ul>
               
               
              



    <h3 className="text-2xl animate-bounce font-extrabold mb-4 mt-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-green-600 to-purple-500">
      Technologies I’ve Worked With:
    </h3>

    <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-black text-lg mt-4">
      <li>• HTML & CSS</li>
      <li>• JavaScript</li>
      <li>• React</li>
      <li>• Node.js</li>
      <li>• Express.js</li>
      <li>• MongoDB</li>
      <li>• TailwindCSS</li>
      <li>• Git & GitHub</li>
    
    </ul>

    
  </motion.div>

  <div>
    <h1 className=" text-extrabold animate-pulse text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-green-600 to-purple-500">
    Certificate of Achievement: MERN Stack Development
  </h1>
  </div>
  
  <div className="flex justify-center mb-30 md:justify-start w-full md:w-1/2 mt-15">
  
      <motion.img
        src={`${import.meta.env.BASE_URL}certificate.jpg`}
        alt="Rajveer"
        className="rounded-3xl ml-1 w-80 h-80 md:w-180 md:h-180  shadow-2xl border-4 border-white"
        style={{ x, y }}
      />
    </div>
</section>

  );
}





