const handleComplete = () => {
  console.log("Complete");
};

if (gsap !== undefined && ScrollTrigger !== undefined) {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".Home_container__bCOhY",
      start: "top top", // the default values
      // end: "+=" + window.innerHeight * 8,
      end: "bottom top",
      scrub: 1,
      pin: ".Home_container__bCOhY",
      // pin: true,
      // markers: true,
      onUpdate: (self) => {
        console.log(self.progress);
        if (self.progress > 0.99) {
          document.getElementById("nav").classList.add("sticky");
        } else {
          document.getElementById("nav").classList.remove("sticky");
        }
      },
      invalidateOnRefresh: true,
      // onUpdate: (self) => handleClass(self),
    },
  });

  // gsap.to(".Home_circle__6tAbC", { rotation: "360", duration: 20 });

  tl.to(
    ".Home_circle__6tAbC",
    {
      rotation: "180",
    },
    "some-label"
  )
    .to(
      ".Home_foodImage1__tJe4J",
      {
        rotation: "1060",
        scale: 0,
      },
      "some-label"
    )
    .to(
      ".Home_foodImage4__cwZDV",
      {
        rotation: "1060",
        scale: 1,
      },
      "some-label1"
    )
    .to(
      ".Home_foodImage2__OnVA6",
      {
        rotation: "1060",
        scale: 0,
      },
      "some-label"
    )
    .to(
      ".Home_foodImage5__4mgeM",
      {
        rotation: "1060",
        scale: 1,
      },
      "some-label1"
    )
    .to(
      ".Home_foodImage3__zPoLq",
      {
        y: "-40px",
      },
      "some-label"
    );

  // const tl2 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: "#journey",
  //     pin: true,
  //     scrub: true,
  //     start: "top top",
  //     // end: "50% top",
  //     end: "bottom top",
  //     // end: "+=" + window.innerHeight * 3,
  //     // markers: true,
  //     onUpdate: (self) => {
  //       if (self.progress > 0.99) {
  //         // document.getElementById("nav").classList.remove("sticky");
  //         document.getElementById("nav").classList.remove("transformNav");
  //       } else {
  //         document.getElementById("nav").classList.add("transformNav");
  //       }
  //     },
  //     onLeaveBack: () =>
  //       document.getElementById("nav").classList.remove("transformNav"),
  //   },
  // });
  // tl2
  //   .to("#slide1", {
  //     // transform: "scale(7)",
  //     transform: "translateX(-100%)",
  //     // xPercent: -100,
  //   })
  //   .to("#slide2", {
  //     transform: "translateX(100%)",
  //     // xPercent: 100,
  //   })
  //   .to("#slide3", {
  //     transform: "translateX(-100%)",
  //     // xPercent: -100,
  //   });

  const tween = new TimelineLite({
    onUpdate: onUpdate,
    onComplete: onComplete,
  });
  // var tween = new TimelineMax();

  tween.add(
    TweenLite.to("#slide1", 0.5, {
      transform: "translateX(100%)",
      ease: Linear.easeNone,
    })
  );
  tween.add(
    TweenLite.to("#slide2", 0.5, {
      transform: "translateX(-100%)",
      ease: Linear.easeNone,
    })
  );
  const controller = new ScrollMagic.Controller();
  const scene = new ScrollMagic.Scene({
    triggerElement: "#journey",
    duration: "100%",
    triggerHook: "0",
  })
    .setTween(tween)
    .setPin("#journey")
    .addTo(controller);

  const journey = document.getElementById("journey");

  function onUpdate(self) {
    if (journey.getBoundingClientRect().top <= 10) {
      document.getElementById("nav").classList.add("transformNav");
    } else {
      document.getElementById("nav").classList.remove("transformNav");
    }
    // const progress = scene.progress();
    // // const progress = self.progress;
    // console.log(self);
    // if (progress > 0.99) {
    //   // document.getElementById("nav").classList.remove("sticky");
    //   document.getElementById("nav").classList.remove("transformNav");
    // } else {
    //   document.getElementById("nav").classList.add("transformNav");
    // }
    // if (progress <= 0) {
    //   document.getElementById("nav").classList.remove("transformNav");
    // }
  }

  function onComplete() {
    document.getElementById("nav").classList.remove("transformNav");
  }
}

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 4,
  },
});

tl3.to("#stall", {
  xPercent: 40,
});

// const btn = document.getElementsByClassName("Home_icon__qn8Vn");

// for (let i = 0; i < btn.length; i++) {
//   const element = btn[i];
//   element.onmousemove = function (e) {
//     const x = e.pageX - btn.offsetLeft;
//     const y = e.pageY - btn.offsetTop;
//     // element.style.setProperty("--x", x + "px");
//     // element.style.setProperty("--y", y + "px");
//     element.style.top = x + "px";
//     element.style.left = y + "px";
//   };
// }
