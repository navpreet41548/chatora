import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";
import styles from "/styles/Home.module.css";
import { gsap } from "gsap";
import Header from "../Header/Header";
import { motion } from "framer-motion";

const HomeSection = () => {
  const comp = useRef();

  const container = useRef();
  const circle = useRef();

  // useLayoutEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: container.current,
  //       start: "top top", // the default values
  //       // end: "+=" + window.innerHeight * 8,
  //       end: "bottom top",
  //       scrub: true,
  //       pin: container.current,
  //       // pin: true,
  //       markers: true,
  //       invalidateOnRefresh: true,
  //       // onUpdate: (self) => handleClass(self),
  //     },
  //   });
  //   gsap.to(circle.current, { rotation: "360", duration: 20 });
  // }, []);

  return (
    <div className={styles.container} ref={container}>
      <div className={styles.circle} ref={circle}>
        <Image
          src={"/images/home/circle.png"}
          className={styles.circleImage}
          width={800}
          height={800}
          alt={"circle"}
        />
        <div className={`${styles.tag} ${styles.tag1}`}>EASY IN</div>
        <div className={`${styles.tag} ${styles.tag2}`}>FRESH FOOD</div>
        <div className={`${styles.tag} ${styles.tag3}`}>BEST FLAVOUR</div>
        <div className={`${styles.tag} ${styles.tag4}`}>BEST</div>
        <div className={`${styles.tag} ${styles.tag5}`}>AUTHENTIC</div>
        <div className={`${styles.tag} ${styles.tag6}`}>INDIAN FOOD</div>
        <div className={`${styles.tag} ${styles.tag7}`}>PREPARED WITH ❤️ </div>
      </div>
      {/* <Image
        className={styles.circleBackground}
        src={"/images/home/cirlceImage.png"}
        width={800}
        height={800}
        alt={"Cicle Background Image"}
      /> */}
      <div className={styles.left}>
        <div className={styles.homeContent}>
          <div className={styles.headLineContainer}>
            <div className={styles.line}></div>
            <p className={styles.headLine}>CHEF&apos;S SPECIAL</p>
            <div className={styles.line}></div>
          </div>
          <div className={styles.headingWrapper}>
            <motion.h1
              whileInView={{ transform: "translateY(0%)" }}
              initial={{ transform: "translateY(100%)" }}
              transition={{
                delay: 0.5,
              }}
              className={styles.mainHeading}
            >
              EAT THE WAY YOU’VE
            </motion.h1>
          </div>
          <div className={styles.headingWrapper}>
            <motion.h1
              whileInView={{ transform: "translateY(0%)" }}
              initial={{ transform: "translateY(100%)" }}
              transition={{
                delay: 0.7,
              }}
              className={styles.mainHeading}
            >
              ALWAYS <span className={styles.diff}>DESIRED</span>
            </motion.h1>
          </div>
          <p className={styles.para}>
            A New Way to Experience Indian Food India
          </p>
          <Link href={"/"} className={styles.button}>
            <span>JOIN NOW</span>
          </Link>
          <div className={styles.socialContainer}>
            <Link href={"/"} className={styles.icon}>
              <span>
                <i class="bx bxl-instagram"></i>
              </span>
            </Link>
            <Link href={"/"} className={styles.icon}>
              <span>
                <i class="bx bxl-facebook"></i>
              </span>
            </Link>
            <Link href={"/"} className={styles.icon}>
              <span>
                <i class="bx bxl-twitter"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightWrapper}>
          <Image
            className={styles.foodBackgroundImage}
            src={"/images/home/foodBackground.png"}
            width={500}
            height={500}
            alt="Food Background Image"
          />

          <Image
            className={`${styles.foodImage} ${styles.foodImage1}`}
            src={"/images/home/food1.png"}
            width={200}
            height={200}
            alt="Food  Image"
          />
          <Image
            className={`${styles.foodImage} ${styles.foodImage2}`}
            src={"/images/home/food2.png"}
            width={200}
            height={200}
            alt="Food  Image"
          />
          <Image
            className={`${styles.foodImage} ${styles.foodImage3}`}
            src={"/images/home/food3.png"}
            width={200}
            height={200}
            alt="Food  Image"
          />
          <Image
            className={`${styles.foodImage} ${styles.foodImage4}`}
            src={"/images/home/food4.png"}
            width={200}
            height={200}
            alt="Food  Image"
          />
          <Image
            className={`${styles.foodImage} ${styles.foodImage5}`}
            src={"/images/home/food5.png"}
            width={200}
            height={200}
            alt="Food  Image"
          />
        </div>
      </div>
      <div className={styles.scroll}>
        <Link scroll={false} href={"/#journey"}>
          <h1 className={styles.scrollHeading}>Keep Scrolling</h1>
          {/* <i class="bx bx-chevron-down"></i> */}
          <div className={styles.scrollWrapper}>
            <i class="bx bx-chevron-down"></i>
            <i class="bx bx-chevron-down"></i>
          </div>
        </Link>
      </div>
      <Link href={"/"} className={styles.buttonMobile}>
        <span>JOIN NOW</span>
      </Link>

      <div className={styles.mobileSocialContainer}>
        <Link href={"/"} className={styles.icon}>
          <span>
            <i class="bx bxl-instagram"></i>
          </span>
        </Link>
        <Link href={"/"} className={styles.icon}>
          <span>
            <i class="bx bxl-facebook"></i>
          </span>
        </Link>
        <Link href={"/"} className={styles.icon}>
          <span>
            <i class="bx bxl-twitter"></i>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HomeSection;
