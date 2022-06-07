import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import v1Pic from "../../../public/images/v1.png";

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

const DemoPage = ({ demo }) => {
  const { title, subtitle, allDemo } = demo;
  return (
    <motion.section
      initial="initial"
      animate="animate"
      id="demo"
      className="section-padding "
    >
      <motion.div variants={stagger} className="container">
        <div className="mb-12 text-center ">
          <motion.h3 variants={fadeInUp} className="m-1 text-3xl">
            {/* <span className="font-normal">All</span> Demos */}
            {title}
          </motion.h3>
          <motion.p variants={fadeInUp}>{subtitle}</motion.p>
        </div>

        <div className="grid gap-6 demo-item md:grid-cols-2 lg:grid-cols-3">
          {allDemo.map((demoItem, i) => (
          
            <Link  key={i} href="https://nilam-v01.vercel.app/">
            <motion.div
              variants={fadeInUp}
              className="p-3 bg-gray-100 shadow each-box"
            >
              <div className="text-center inner">
                <div className="box-hover">
                  <img src={demoItem.image} />
                  <div className="mask">
                    <div className="mask-inner">
                      <div className="pera-text">
                        <div className="mb-3 text-2xl font-bold text-white title">
                          {demoItem.title}
                        </div>
                        <span className="inline-block px-6 py-2 duration-300 ease-in-out transform border-2 rounded-full cursor-pointer button__primary font-body base-border hover:bg-primary hover:text-white">
                          <Link href="https://nilam-v01.vercel.app/">
                            View Demo
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default DemoPage;
