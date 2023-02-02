import React from "react";
import styles from "/styles/Card.module.css";
import Image from "next/image";
const Card = ({ name, desc, imgName }) => {
  return (
    <div className={styles.card}>
      <div className={styles.part1}>
        <Image
          className={styles.cardImg}
          src={`/images/menu/${imgName}`}
          width={150}
          height={150}
          alt="Menu Food Image"
        />
        <h1 className={styles.cardHeading}>{name}</h1>
        <p className={styles.cardPara}>{desc}</p>
      </div>
      <div className={styles.part2}>
        <Image
          className={styles.subImg}
          src={`/images/menu/${imgName}`}
          width={150}
          height={150}
          alt="Menu Food Image"
        />
        <h1 className={styles.subHeading}>{name}</h1>
      </div>
    </div>
  );
};

export default Card;
