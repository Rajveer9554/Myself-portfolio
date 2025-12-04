import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
export default function About() {
  // Page load hone pe top par scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Scroll ke hisaab se image shift hoti rahegi
  const x = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-20 overflow-hidden animated-bg"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-purple-600 to-pink-500 bg-[length:400%_400%] animate-gradientShift"></div>
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
              x: [0, 150, 0, 0],
              y: [0, 0, -150, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Coding the future,
            <br /> designing with precision......
          </motion.h1>
        </div>
      </div>

      {/* ---- DETAILS SECTION ---- */}
      <motion.div
        className=" max-w-4xl mr-4 mx-auto   mt-24 p-10 mb-50 rounded-3xl bg-transparent backdrop-blur-lg shadow-2xl shadow-white border border-white/20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold py-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-800 animate-bounce">
          Hello! I'm Rajveer Pratap Singh
        </h2>

        <p className="font- mt-6 text-white text-2xl">
          <li>
            {" "}
            A passionate Final-Year B.Tech Computer Science Student with a deep
            interest in building modern web applications.
          </li>
          <li>
            I specialize in creating beautiful, responsive, and interactive
            front-end designs using React.js, Tailwind CSS, and other
            cutting-edge tools.
          </li>
          <li>
            I have a strong focus on user experience and clean UI design,
            ensuring every website I build feels smooth and professional.
          </li>
          <li>
            On the backend, I possess around 40% working knowledge of Node.js
            and Express.js, enabling me to connect powerful logic with
            attractive design.
          </li>
          <li>
            {" "}
            I also have experience working with databases like MongoDB, allowing
            me to create full-stack applications that are both functional and
            visually appealing.
          </li>
          <li>
            I enjoy transforming creative ideas into real-world digital
            experiences that are both functional and visually appealing.
          </li>
          <li>
            My goal is to become a Full Stack Developer who blends technical
            precision with creative innovation.
          </li>

          <li>
            {" "}
            With every project I build, I aim to learn something new and solve
            real-world problems. I'm always eager to improve my skills,
            contribute to exciting tech communities, and collaborate with
            like-minded people.{" "}
          </li>
        </p>

        <p className="font-bold text-3xl mt-6 text-transparent animate-bounce bg-clip-text bg-gradient-to-r from-pink-700 via-green-600 to-purple-500">
          What I'm interested in:
        </p>

        <ul className="grid grid-cols-2 md:grid-cols-1 gap-3 text-white text-lg mt-4">
          <li>* Frontend & Backend Web Development</li>

          <li>* Open Source Contribution </li>
          <li>* Building real-world web applications </li>
          <li> * Placement preparation & DSA </li>
        </ul>

        <h3 className="text-2xl animate-bounce font-extrabold mb-4 mt-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-green-600 to-purple-500">
          Technologies I’ve Worked With:
        </h3>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-white text-lg mt-4">
          <li>• HTML & CSS</li>
          <li>• JavaScript</li>
          <li>• React</li>
          <li>• Node.js</li>
          <li>• Express.js</li>
          <li>• MongoDB</li>
          <li>• TailwindCSS</li>
          <li>• Git & GitHub</li>
        </ul>

        <h3 className="text-2xl animate-bounce font-extrabold mb-4 mt-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-green-600 to-purple-500">
          Soft Skills:
        </h3>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-white text-lg mt-4">
          <li>• Time Management</li>
          <li>• Communication</li>
          <li>• Problem Solving</li>
          <li>• Continuous Learning</li>
          <li>• Positive Attitude</li>
          <li>• Leadership</li>
          <li>• Team Collaboration</li>
        </ul>
      </motion.div>

      <div>
        <h1 className=" text-extrabold animate-pulse text-5xl  text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-green-600 to-purple-500">
          Certificate of Achievement: MERN Stack Development
        </h1>
      </div>

      <div className="flex justify-center mb-30 md:justify-start w-full md:w-1/2 mt-15">
        <motion.img
          src={`${import.meta.env.BASE_URL}certificate.jpg`}
          alt="Rajveer"
          className="rounded-3xl ml-1 w-40 h-80 md:w-180 md:h-100  shadow-2xl border-4 border-white"
          style={{ x, y }}
        />
      </div>

      {/* projects  */}
        <div>
         <h2 className="text-5xl mr-2 font-semibold py-3 text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-purple-500 animate-bounce">
          Explore my latest builds, website and innovative solutions crafted
          with modern web technologies.
        </h2>
        </div>
       <motion.div
        className=" max-w-4xl mr-4 mx-auto   mt-24 p-10 mb-50 rounded-3xl bg-transparent  backdrop-blur-lg shadow-2xl shadow-white border border-white/20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
       

        <ul className="grid grid-cols-1 md:grid-cols-1 gap-3  text-2xl text-white text-extrabold  mt-4">
          <li className="mt-3 animate-pulse">
            • Myself Porfolio:{" 👉🏻👉🏻 "}
            <a
              href="https://rajveer9554.github.io/Myself-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 hover:underline transition-colors text-white"
            >
              Click Here
            </a>
            <h1 className="text-xl text-semibold text-white mt-1 ">
              I created my personal portfolio to highlight my projects,
              technical skills, and design abilities in one place. It allows me
              to demonstrate my frontend expertise, creativity in UI/UX, and
              working knowledge of frontend development, giving recruiters a
              comprehensive view of my capabilities.
            </h1>
          </li>
          <li className="mt-3 animate-pulse">
            • Awaze-E-Janata:👉🏻👉🏻
            <a
              href="https://awaze-e-janata.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 hover:underline transition-colors text-white"
            >
              Click Here
            </a>
            <h1 className="text-xl text-semibold text-white mt-1 ">
              {" "}
              Awaze-E-Janata is designed to give citizens a simple and efficient
              way to report their problems using AI. I built this platform to
              empower users, making it easier for them to communicate their
              issues and for authorities to respond effectively. The project
              also allowed me to enhance my MERN Stack skills, especially in
              frontend design and AI integration. I have used
              Technologies:React.js, Tailwind Css, Javascript{" "}
            </h1>
          </li>
          <li className="mt-3 animate-pulse">
            • Tic-Tac-Toe:{" 👉🏻👉🏻 "}
            <a
              href="https://rajveer9554.github.io/Tic-Tac-Toe/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 hover:underline transition-colors text-white"
            >
              Click Here
            </a>
            <h1 className="text-xl text-semibold text-white mt-1 ">
              As a Practicing Coding and programming i have developed this
              project usingHTML,CSS,Javascript. This Tic-Tac-Toe game is a web
              application where two players take turns marking X and O on a 3x3
              grid. The game checks for winning combinations and draws
              dynamically using JavaScript logic. I built this project to
              practice DOM manipulation, event handling, and responsive frontend
              design while creating a fun interactive game.
            </h1>
          </li>
          <li className="mt-3 animate-pulse">
            • Resume Builder:{" 👉🏻👉🏻 "}
            <a
              href="https://rajveer9554.github.io/Resume/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 hover:underline transition-colors text-white"
            >
              Click Here
            </a>
            <h1 className="text-xl text-semibold text-white mt-1">
              As a practicing coding and programming i have developed this
              project using HTML,CSS,Javascript. The Resume Builder is a web
              application that allows users to create resumes quickly and
              easily. Users can input their personal information, work
              experience, education, skills, and more.
            </h1>
          </li>
        </ul>


{/* Repository */}
        <h1 className="mt-5 text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-white animate-bounce text-semibold  text-2xl">
          You can find all my projects in my GitHub Repository:{" 👉🏻👉🏻"}
          <Link to="/github" className="hover:underline text-pink-500">
            Click Here
          </Link>

          
        </h1>
</motion.div>

        

            
       
    </section>
  );
}



  // <div className="flex justify-center mb-30 md:justify-start w-full md:w-1/2 mt-15">
  //       <h1 className="text-transparent bg-clip-text bg-gradient-to-r from -purple-500 to -green-700 animate-bounce">
  //         You can find all my projects in my GitHub Repository:{" 👉🏻👉🏻"}

          
  //       </h1>
  //     </div>