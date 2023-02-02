import Image from "next/image";
import React, { useEffect, useRef } from "react";
import styles from "/styles/Loader2.module.css";

const Loader2 = () => {
  const container = useRef();

  const handleClick = () => {
    container.current.classList.add(styles.transform);
  };

  useEffect(() => {
    setTimeout(function () {
      container.current.classList.add(styles.transform);
    }, 5000);
  });
  return (
    <div className={styles.container} ref={container}>
      <h1 className={styles.heading}>INDIA ON MY PLATE</h1>
      <p className={styles.para}>ENTER THE WORLD OF CHATORA</p>
      <button onClick={handleClick} className={styles.button}>
        ENTER NOW
      </button>

      <div className={styles.circle}>
        <Image
          className={styles.borderImg}
          src={"/images/loader2/borderImg.png"}
          width={800}
          height={800}
          alt="Dashed Border Image}"
        />
        <Image
          className={`${styles.mobileBorderImg} ${styles.borderImg}`}
          src={"/images/loader2/mobileBorderImg.png"}
          width={800}
          height={800}
          alt="Dashed Border Image}"
        />
      </div>
      <Image
        className={styles.mapImg}
        src={"/images/loader/indianMap.png"}
        width={400}
        height={400}
        alt="Indian Map Image"
      />
      <Image
        className={styles.backgroundImg}
        src={"/images/journey/slide/slideBackground.webp"}
        width={1900}
        height={800}
        alt="Background Image"
      />
    </div>
  );
};

export default Loader2;
