import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "/styles/Loader.module.css";

const Loader = () => {
  const loader = useRef(null);

  useEffect(() => {
    setTimeout(function () {
      loader.current.classList.add(styles.transform);
    }, 3000);
  }, []);

  return (
    <div ref={loader} className={`${styles.loader_panel} `}>
      <Image
        src="/images/loader/indianMap.png"
        alt="Indian Map"
        width={900}
        height={900}
        className={styles.img}
      />
      <h1>
        <span className={styles.diff}>❝ </span>INDIA ON MY{" "}
        <span className={styles.diff}>PLATE</span>{" "}
        <span className={styles.diff}>❞</span>
      </h1>
    </div>
  );
};

export default Loader;
