// next image
import Image from "next/image";

// components
import ParticlesContainer from "./../components/ParticlesContainer";
import ProjectsBtn from "./../components/ProjectsBtn";
import Avatar from "./../components/Avatar";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "./../variants";

// constants
import { bio, firstName, lastName, name } from "../constants/about";

const Home = () => {
  return (
    <div className="h-full bg-primary/60">
      {/* text */}
      <div
        className={`w-full h-full bg-gradient-to-r from-primary/60 via-black/30 to-black/10`}
      >
        <div
          className={`text-center flex flex-col justify-center xl:pt-40 xl:text-left
        h-full container mx-auto`}
        >
          {/* title */}
          <motion.h1
            className="h1"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Hello, I{"'"}m <br />{" "}
            <span className="text-accent">{firstName}</span>
            <br />
            <span className="text-accent">{lastName}</span>
          </motion.h1>
          {/* sub title */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={`max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-justify`}
          >
            {bio}
          </motion.p>
          {/* btn */}
          <div className="relative z-50 flex items-center justify-center xl:hidden">
            <ProjectsBtn />
          </div>
          <motion.div
            className="z-50 hidden xl:flex"
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg-img */}
        <div className="absolute w-full h-full bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat mix-blend-color-dodge translate-z-0"></div>
        {/* Particles */}
        <ParticlesContainer />
        {/* avatar Img */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          transition={{ duration: 1, ease: "easeInOut" }}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 max-lg:hidden lg:-top-32 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
