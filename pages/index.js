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
import { bio, name } from "../constants/about";

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
            Hello, I{"'"}m <br /> <span className="text-accent">{name}</span>
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
          <div className="relative flex items-center justify-center xl:hidden">
            <ProjectsBtn />
          </div>
          <motion.div
            className="hidden xl:flex"
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
      <div></div>
    </div>
  );
};

export default Home;
