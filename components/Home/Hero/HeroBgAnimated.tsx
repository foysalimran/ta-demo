import { log } from "console";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const easing = [0.6, -0.5, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};




function HeroBgAnimated({hero}:any) {
  const {logo, tags, title, subtitle, desc, demoBtn, demoBtnLink, buyNowTitle, buyNowLink, bgImage, primary, secondary} = hero;
  const [isHovering, setIsHovering] = useState({"btn1": false, "btn2": false});

  const handleMouseEnter = () => {
    setIsHovering({"btn1": true, "btn2": false});
  };

  const handleMouseLeave = () => {
    setIsHovering({"btn1": false, "btn2": false});
  };
  const handleMouseEnter2 = () => {
    setIsHovering({"btn1": false, "btn2": true});
  };

  const handleMouseLeave2 = () => {
    setIsHovering({"btn1": false, "btn2": false});
  };

  return (
    <motion.section
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      id="hero"
      className="heroAnimated bgGredient lg:min-h-screen"
    >
      <div className="grid items-center lg:min-h-screen justify--center lg:grid-cols-2">
        <div className="flex flex-col justify-center max-w-screen-sm px-10 py-16 mx-auto lg:min-h-screen">
          <motion.div variants={stagger}>
            <motion.span
              variants={fadeInUp}
              className="flex items-center inline-block gap-2 mb-8 siteLogo font-body"
            >
              <img width="70px" height="70px" src={logo} />

              <span className="text-5xl font-bold siteName">{title}</span>
              <span className="px-3 py-1 text-xs border-2 rounded-full base-bg light-text siteType base-border">
                {tags}
              </span>
            </motion.span>

            <motion.h3 variants={fadeInUp} className="mb-4">
              {subtitle}
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className="mb-10 text-2xl text-gray-800 font-body"
            >
              {desc}
            </motion.p>

            <div className="flex gap-8">
              <motion.span variants={fadeInUp}>
                <Link href={`${demoBtnLink}`}>
                  <span 
                  
                  style={{
                    borderWidth: "2px",
                    borderStyle: "solid", 
                    borderColor: secondary,
                    backgroundColor: isHovering.btn1== true  ? `${primary}` : '',
                    color: isHovering.btn1== true  ? 'white' : '',
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="inline-block px-8 py-3 font-semibold uppercase duration-300 ease-in-out transform rounded-full cursor-pointer font-body">
                    {demoBtn}
                  </span>
                </Link>
              </motion.span>

              <motion.span variants={fadeInUp}>
                <Link href={`${buyNowLink}`}> 
                <span 
                
                style={{
                  borderWidth: "2px",
                  borderStyle: "solid", 
                  borderColor: secondary,
                  backgroundColor: isHovering.btn2== true ? `${primary}` : '',
                  color: isHovering.btn2== true  ? 'white' : '',
                }}
                onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave2}
                className="inline-block px-8 py-3 font-semibold uppercase duration-300 ease-in-out transform rounded-full cursor-pointer font-body">
                    {buyNowTitle}
                  </span>
                </Link>
              </motion.span>
            </div>
          </motion.div>
        </div>
        <div className="relative flex items-center justify-center px-10 py-16 overflow-hidden lg:min-h-screen">
          <div
            className="absolute w-full bg-contain lg:min-h-screen animated__hero"
            style={{ backgroundImage: `url(${bgImage})` }}
          ></div>
        </div>
      </div>
    </motion.section>
  );
}

export default HeroBgAnimated;
