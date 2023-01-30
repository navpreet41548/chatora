import Image from "next/image";
import React from "react";
import styles from "/styles/AboutSection.module.css";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div className={styles.container} id="about">
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.headingContainer}>
            <div className={styles.headingWrapper}>
              <motion.h1
                whileInView={{ transform: "translateY(0%)" }}
                initial={{ transform: "translateY(100%)" }}
                transition={{
                  delay: 0.3,
                  duration: 0.5,
                }}
                className={styles.heading}
              >
                ARE YOU A FOOD FREAK WAITING TO HIT
              </motion.h1>
            </div>
            <div className={styles.headingWrapper}>
              <motion.h1
                whileInView={{ transform: "translateY(0%)" }}
                initial={{ transform: "translateY(100%)" }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                }}
                className={styles.heading}
              >
                SOME <span className={styles.diff}>AUTHENTIC</span> INDIAN
                CUISINE?
              </motion.h1>
            </div>

            <div className={styles.line}></div>
          </div>
          <p className={styles.para}>
            We started the Chatora Project to take you on a journey of authentic
            Indian food that will connect you to your roots and traditions. Here
            you will find a wide collection of Famous Food Delicacies from ALL
            over India
            <br /> <br /> Chef Dhiren&apos;s love for food took him on a journey
            where he explored every {'"'}Galli{'"'} and every {'"'}Rasta{'"'}{" "}
            that was bustling with mouth-watering food! <br /> <br />
            In his words, {'"'}I often remember my days back in India exploring
            and cooking a variety of famous food from Punjab to Delhi, all the
            way to South India. These trips were a feast for the senses; from
            the vivid colors and artistry of the streets filled with delicious
            flavors and aromas.
            {'"'}
          </p>
        </div>
        <div className={styles.right}>
          <Image
            className={styles.backgroundImage1}
            src={"/images/about/circleBackground.png"}
            width={500}
            height={500}
            alt="Background Image"
          />
          <Image
            id="stall"
            className={styles.image1}
            src={"/images/about/stall.png"}
            width={300}
            height={300}
            alt="Stall Image"
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomLeft}>
          <Image
            className={styles.backgroundImage2}
            src={"/images/about/circleBackground2.png"}
            width={500}
            height={500}
            alt="Background Image"
          />
          <Image
            className={styles.image2}
            src={"/images/about/map.png"}
            width={500}
            height={500}
            alt="Background Image"
          />
        </div>
        <div className={styles.bottomRight}>
          <div className={styles.headingWrapper}>
            <motion.h1
              whileInView={{ transform: "translateY(0%)" }}
              initial={{ transform: "translateY(100%)" }}
              transition={{
                delay: 0.5,
                duration: 0.5,
              }}
              className={styles.bottomHeading}
            >
              WHAT MAKES SOME INDIAN FOOD JOINTS SO SPECIAL THAT WE TRAVEL MILES
              JUST TO HAVE A BITE OF THEIR{" "}
              <span className={styles.diff}>FAMOUS DISHES?</span>
            </motion.h1>
          </div>
          <p className={styles.bottomPara}>
            There are hundreds of food vendors in the same city selling the same
            chana bhatura or pani puri or thali but still we crave for one or
            two. What makes them so special is their food’s taste that is a
            result of their knowledge of spices and the effort that they put
            into their recipe to roast and grind their own spice mixed. Here at
            Chatora, we toast and grind our own spices to give you a
            mouthwatering flavour.
          </p>
          <Image
            src={"/images/about/background.png"}
            className={styles.lastBackgroundImage}
            width={1500}
            height={300}
            alt="Background Image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
