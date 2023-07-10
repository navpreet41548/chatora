import Image from "next/image";
import React from "react";
import styles from "/styles/JourneySection.module.css";

const JourneySection = () => {
  return (
    <div className={styles.container} id="journey">
      <div
        className={`${styles.slide} ${styles.mainSlide} ${styles.slide1}`}
        id="slide1"
      >
        <h1 className={styles.mainHeading}>WELCOME</h1>
        <p className={styles.mainPara}>
          Lets Go On A Journey To Enjoy Famous Flavours From the Street Of India
          You will Experience at Chatora.
        </p>
        <Image
          className={`${styles.backgroundImg} ${styles.backgroundImgMain} `}
          src="/images/journey/slideBackground/main.png"
          alt="Background Image"
          width={"300"}
          height={"900"}
        />
        {/* <Image
          className={`${styles.backgroundImg} ${styles.backgroundImgMain} ${styles.mapDesktop}`}
          src="/images/journey/map.png"
          alt="Background Image"
          width={"1800"}
          height={"900"}
        />
        <Image
          className={`${styles.backgroundImg} ${styles.backgroundImgMain} ${styles.mapMobile}`}
          src="/images/journey/mapMobile.png"
          alt="Background Image"
          width={"1800"}
          height={"900"}
        /> */}
      </div>
      <div
        className={`${styles.slide} ${styles.childSlide} ${styles.slide2}`}
        id="slide2"
      >
        <div className={styles.left} id="left2">
          <h1 className={styles.heading} id="heading2">
            1{")"} Punjab Ki Galiyon Se
          </h1>
          <p className={styles.para}>
            One of the most impressive things about Punjabi food is its variety.
            It is a state synonymous with food. Punjabi food is a lot like
            Punjabis - rich, robust, and full of life.
          </p>
          <div className={styles.foodContainer}>
            <Image
              className={`${styles.foodImg}`}
              src="/images/journey/food/food1.png"
              alt="Background Image"
              width={"200"}
              height={"200"}
            />
            <Image
              className={`${styles.foodImg}`}
              src="/images/journey/food/food1.png"
              alt="Background Image"
              width={"200"}
              height={"200"}
            />
            <Image
              className={`${styles.foodImg}`}
              src="/images/journey/food/food1.png"
              alt="Background Image"
              width={"200"}
              height={"200"}
            />
            <Image
              className={`${styles.foodImg}`}
              src="/images/journey/food/food1.png"
              alt="Background Image"
              width={"200"}
              height={"200"}
            />
          </div>
        </div>
        <div className={styles.right} id="right2">
          <Image
            className={`${styles.slideImg} ${styles.slideImg2} `}
            id="slideImg2"
            src="/images/journey/slide/1.jpg"
            alt="Background Image"
            width={"300"}
            height={"900"}
          />
        </div>
        <Image
          className={`${styles.backgroundImg}`}
          src="/images/journey/slideBackground/1.png"
          alt="Background Image"
          width={"300"}
          height={"900"}
        />
      </div>
      <div
        className={`${styles.slide} ${styles.childSlide} ${styles.slide3}`}
        id="slide3"
      >
        <div className={styles.left} id="left3">
          <h1 className={styles.heading} id="heading3">
            2{")"} Highway On My Plate
          </h1>
          <p className={styles.para}>
            When we talk about Indian Street Food, how can we forget the Dhabas.
            At Chatora you will also be able to enjoy your favourite dhaba food
            like:
          </p>
          <div className={styles.foodContainer}>
            <Image
              className={`${styles.foodImg}`}
              src="/images/journey/food/food2.png"
              alt="Background Image"
              width={"200"}
              height={"200"}
            />
            <Image
              className={`${styles.foodImg}`}
              src="/images/journey/food/food2.png"
              alt="Background Image"
              width={"200"}
              height={"200"}
            />
            <Image
              className={`${styles.foodImg}`}
              src="/images/journey/food/food2.png"
              alt="Background Image"
              width={"200"}
              height={"200"}
            />
            <Image
              className={`${styles.foodImg}`}
              src="/images/journey/food/food2.png"
              alt="Background Image"
              width={"200"}
              height={"200"}
            />
          </div>
        </div>
        <div className={styles.right}>
          <Image
            className={`${styles.slideImg} ${styles.slideImg2}`}
            id="slideImg3"
            src="/images/journey/slide/2.jpg"
            alt="Background Image"
            width={"400"}
            height={"900"}
          />
        </div>
        <Image
          className={`${styles.backgroundImg}`}
          src="/images/journey/slideBackground/2.png"
          alt="Background Image"
          width={"300"}
          height={"900"}
        />
      </div>
      <div
        className={`${styles.slide} ${styles.childSlide} ${styles.slide4}`}
        id="slide4"
      >
        <div className={styles.left} id="left4">
          <h1 className={styles.heading} id="heading4">
            3{")"} Purani Dilli Ka Jaadu
          </h1>
          <p className={styles.para}>
            Whether it be the squeezed streets of Old Delhi where vendors mix
            different flavors; the overcrowded bazaars of Central or South Delhi
            where the aroma of food can pull you in from kilometers away. You
            will explore:
          </p>
          <div className={styles.foodContainer}>
            <Image
              className={`${styles.foodImg}`}
              src="/images/journey/food/food1.png"
              alt="Background Image"
              width={"200"}
              height={"200"}
            />
            <Image
              className={`${styles.foodImg}`}
              src="/images/journey/food/food1.png"
              alt="Background Image"
              width={"200"}
              height={"200"}
            />
            <Image
              className={`${styles.foodImg}`}
              src="/images/journey/food/food1.png"
              alt="Background Image"
              width={"200"}
              height={"200"}
            />
            <Image
              className={`${styles.foodImg}`}
              src="/images/journey/food/food1.png"
              alt="Background Image"
              width={"200"}
              height={"200"}
            />
          </div>
        </div>
        <div className={styles.right}>
          <Image
            className={`${styles.slideImg} ${styles.slideImg2}`}
            id="slideImg3"
            src="/images/journey/slide/3.jpg"
            alt="Background Image"
            width={"400"}
            height={"900"}
          />
        </div>
        <Image
          className={`${styles.backgroundImg}`}
          src="/images/journey/slideBackground/3.png"
          alt="Background Image"
          width={"300"}
          height={"900"}
        />
      </div>
    </div>
  );
};

export default JourneySection;
