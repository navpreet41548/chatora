import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "/styles/Menu.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Card from "../elements/Card";
import { punjabData } from "../../data/punjab";
import { delhiData } from "../../data/delhi";
import { rajasthanData } from "../../data/rajasthan";
import { gujaratData } from "../../data/gujarat";
import { mumbaiData } from "../../data/mumbai";
import { plattersAndThalisData } from "../../data/plattersAndThalis";

const Menu = () => {
  SwiperCore.use([Autoplay]);
  const li1 = useRef();
  const li2 = useRef();
  const li3 = useRef();
  const li4 = useRef();
  const li5 = useRef();
  const li6 = useRef();
  let lis = [li1, li2, li3, li4, li5, li6];

  const [activeSlide, setActiveSlide] = useState("punjab");

  const [mobile, setMobile] = useState();

  const addClass = (index) => {
    // let li = ul.current.children;
    for (let i = 0; i < lis.length; i++) {
      const element = lis[i];
      element.current.classList.remove(styles.liActive);
    }
    lis[index].current.classList.add(styles.liActive);
    if (index == 0) setActiveSlide("punjab");
    if (index == 1) setActiveSlide("delhi");
    if (index == 2) setActiveSlide("rajasthan");
    if (index == 3) setActiveSlide("gujarat");
    if (index == 4) setActiveSlide("mumbai");
    if (index == 5) setActiveSlide("plattersAndThalis");
  };

  useEffect(() => {
    lis[0].current.classList.add(styles.liActive);
    if (window.innerWidth <= 950) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);
  return (
    <div className={styles.container} id="menu">
      <h1 className={styles.mainHeading}>MENU</h1>
      {/* <ul ref={ul} className={styles.ul}>
        <li onClick={() => addClass(0)} className={styles.li}>
          PUNJAB
        </li>
        <li onClick={() => addClass(1)} className={styles.li}>
          DELHI
        </li>
        <li onClick={() => addClass(2)} className={styles.li}>
          RAJASTHAN
        </li>
        <li onClick={() => addClass(3)} className={styles.li}>
          GUJARAT
        </li>
        <li onClick={() => addClass(4)} className={styles.li}>
          MUMBAI
        </li>
        <li onClick={() => addClass(5)} className={styles.li}>
          PLATTERS & THALIS
        </li>
      </ul> */}

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={10}
        // centeredSlides={true}
        // centeredSlidesBounds={mobile ? false : true}
        // centeredSlidesBounds={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          200: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          300: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          950: {
            slidesPerView: 7,
          },
        }}
        className={`${"mySwiper"} ${styles.swiperContainerUl}`}
      >
        <SwiperSlide>
          <li ref={li1} onClick={() => addClass(0)} className={styles.li}>
            PUNJAB
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li ref={li2} onClick={() => addClass(1)} className={styles.li}>
            DELHI
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li ref={li3} onClick={() => addClass(2)} className={styles.li}>
            RAJASTAHN
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li ref={li4} onClick={() => addClass(3)} className={styles.li}>
            GUJARAT
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li ref={li5} onClick={() => addClass(4)} className={styles.li}>
            MUMBAI
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li ref={li6} onClick={() => addClass(5)} className={styles.li}>
            PLATTERS & THALIS
          </li>
        </SwiperSlide>
      </Swiper>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        breakpoints={{
          200: {
            slidesPerView: 1.1,
            spaceBetween: 40,
          },
          300: {
            slidesPerView: 1.1,
            spaceBetween: 50,
          },
          350: {
            slidesPerView: 1.2,
            spaceBetween: 50,
          },
          550: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 80,
          },
          950: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1300: {
            slidesPerView: 2.5,
            spaceBetween: 80,
          },
          1500: {
            slidesPerView: 3,
            spaceBetween: 100,
          },
        }}
        modules={[Pagination]}
        className={`${"mySwiper"} ${styles.swiperContainer}`}
      >
        {activeSlide == "punjab" &&
          punjabData.map((item, i) => (
            <SwiperSlide key={i} className={styles.card}>
              <Card name={item.name} desc={item.desc} imgName={item.imgName} />
            </SwiperSlide>
          ))}
        {activeSlide == "delhi" &&
          delhiData.map((item, i) => (
            <SwiperSlide key={i} className={styles.card}>
              <Card name={item.name} desc={item.desc} imgName={item.imgName} />
            </SwiperSlide>
          ))}
        {activeSlide == "rajasthan" &&
          rajasthanData.map((item, i) => (
            <SwiperSlide key={i} className={styles.card}>
              <Card name={item.name} desc={item.desc} imgName={item.imgName} />
            </SwiperSlide>
          ))}
        {activeSlide == "gujarat" &&
          gujaratData.map((item, i) => (
            <SwiperSlide key={i} className={styles.card}>
              <Card name={item.name} desc={item.desc} imgName={item.imgName} />
            </SwiperSlide>
          ))}
        {activeSlide == "mumbai" &&
          mumbaiData.map((item, i) => (
            <SwiperSlide key={i} className={styles.card}>
              <Card name={item.name} desc={item.desc} imgName={item.imgName} />
            </SwiperSlide>
          ))}
        {activeSlide == "plattersAndThalis" &&
          plattersAndThalisData.map((item, i) => (
            <SwiperSlide key={i} className={styles.card}>
              <Card name={item.name} desc={item.desc} imgName={item.imgName} />
            </SwiperSlide>
          ))}

        <div className={styles.banner}>
          <Image
            className={styles.backgroundImg}
            src={"/images/menu/background.png"}
            width={1800}
            height={300}
            alt="background Image"
          />
          <Image
            className={styles.borderTopImg}
            src={"/images/menu/borderTop.png"}
            width={1800}
            height={5}
            alt="background Image"
          />
          <Image
            className={styles.borderBottomImg}
            src={"/images/menu/borderBottom.png"}
            width={1800}
            height={5}
            alt="background Image"
          />
        </div>
      </Swiper>

      {/* <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.part1}>
            <Image
              className={styles.cardImg}
              src={"/images/menu/punjab/dahiBhalla.png"}
              width={150}
              height={150}
              alt="Menu Food Image"
            />
            <h1 className={styles.cardHeading}>Raju Special Dahi Bhalla</h1>
            <p className={styles.cardPara}>
              Dahi Bhalla is an immensely popular Indian chaat dish. This
              protein packed, gluten-free recipe is made from lentil fritters
              dunked in whipped creamy yogurt and drizzled with sweet and spicy
              chutney and spices and Anardana, Beet roots, ginger and nuts.
            </p>
          </div>
          <div className={styles.part2}>
            <Image
              className={styles.subImg}
              src={"/images/menu/punjab/dahiBhalla.png"}
              width={150}
              height={150}
              alt="Menu Food Image"
            />
            <h1 className={styles.subHeading}>Raju Special Dahi Bhalla</h1>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Menu;
