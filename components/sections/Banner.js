import Image from "next/image";
import React from "react";
import styles from "/styles/Banner.module.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.card}>
        <div className={styles.icon}>
          <i class="bx bx-time"></i>
        </div>
        <div className={styles.cardContent}>
          <h1 className={styles.cardHeading}>
            <CountUp start={20} end={25} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </h1>
          <p className={styles.cardPara}>YEARS OF EXPERIENCE</p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.icon}>
          <i class="bx bx-restaurant"></i>
        </div>
        <div className={styles.cardContent}>
          <h1 className={styles.cardHeading}>
            <CountUp start={300} end={340} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </h1>
          <p className={styles.cardPara}>DISHES MASTERED</p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.icon}>
          <i class="bx bx-happy"></i>
        </div>
        <div className={styles.cardContent}>
          <h1 className={styles.cardHeading}>
            <CountUp start={11900} end={12000} redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            +
          </h1>
          <p className={styles.cardPara}>HAPPY FOODIES</p>
        </div>
      </div>
      <Image
        src="/images/banner/background.png"
        width={1800}
        height="400"
        alt="Background Image"
        className={styles.backgroundImage}
      />
    </div>
  );
};

export default Banner;
