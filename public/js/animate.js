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
  // !
  // const tween = new TimelineLite({
  //   onUpdate: onUpdate,
  //   onComplete: onComplete,
  // });
  // // var tween = new TimelineMax();

  // tween.add(
  //   TweenLite.to("#slide1", 1, {
  //     // transform: "translateX(100%)",
  //     xPercent: 100,
  //     ease: Linear.easeNone,
  //   })
  // );
  // tween.add(
  //   TweenLite.to("#slide2", 1, {
  //     // transform: "translateX(-100%)",
  //     xPercent: -100,
  //     ease: Linear.easeNone,
  //   })
  // );
  // const controller = new ScrollMagic.Controller({ refreshInterval: 1 });
  // const scene = new ScrollMagic.Scene({
  //   triggerElement: "#journey",
  //   duration: "700%",
  //   triggerHook: "0",
  // })
  //   .setTween(tween)
  //   .setPin("#journey")
  //   .addTo(controller);

  // const journey = document.getElementById("journey");

  // function onUpdate(self) {
  //   if (journey.getBoundingClientRect().top <= 10) {
  //     document.getElementById("nav").classList.add("transformNav");
  //   } else {
  //     document.getElementById("nav").classList.remove("transformNav");
  //   }
  // }

  // function onComplete() {
  //   document.getElementById("nav").classList.remove("transformNav");
  // }
  // !

  // !
  // var controller = new ScrollMagic.Controller();
  // var sections = document.querySelectorAll(".JourneySection_slide__J88nk");
  // var tl2 = new TimelineMax({
  //   onUpdate: onUpdate,
  //   onComplete: onComplete,
  //   onReverseComplete: onReverseComplete,
  // });
  // var offset = window.innerHeight;
  // tl2.to(sections[0], 1, { xPercent: -100, ease: Linear.easeNone }, "+=1");
  // tl2.to(sections[1], 1, { xPercent: 100, ease: Linear.easeNone }, "+=1");
  // // tl.to(sections[3], 1, { xPercent: 100, ease: Linear.easeNone }, "+=1");
  // // tl.to(sections[4], 1, { yPercent: 100, ease: Linear.easeNone }, "+=1");
  // // tl.to(sections[5], 1, { xPercent: -100, ease: Linear.easeNone }, "+=1");
  // // tl.to(sections[6], 1, { yPercent: -100, ease: Linear.easeNone }, "+=1");
  // // tl.to(sections[7], 1, { xPercent: -100, ease: Linear.easeNone }, "+=1");
  // // tl.to(sections[8], 1, { yPercent: 100, ease: Linear.easeNone }, "+=1");
  // // tl.to(sections[9], 1, { xPercent: -100, ease: Linear.easeNone }, "+=1");
  // // tl.to(sections[10], 1, { xPercent: 100, ease: Linear.easeNone }, "+=1");
  // // tl.to(sections[11], 1, { xPercent: -100, ease: Linear.easeNone }, "+=1");

  // new ScrollMagic.Scene({
  //   triggerElement: "#journey",
  //   triggerHook: 0,
  //   duration: "500%",
  // })
  //   .setPin("#journey")
  //   .setTween(tl2)

  //   .addTo(controller);

  // for (let i = 0; i < sections.length; i++) {
  //   const element = sections[i];
  //   var tl2 = new TimelineMax();

  //   new ScrollMagic.Scene({
  //     triggerElement: "#journey",
  //     triggerHook: 0,
  //     offset: i * offset,
  //   })
  //     .setTween(tl2)
  //     .addTo(controller);
  // }

  // const journey = document.getElementById("journey");

  // function onUpdate(self) {
  //   if (journey.getBoundingClientRect().top <= 40) {
  //     document.getElementById("nav").classList.add("transformNav");
  //   } else {
  //     document.getElementById("nav").classList.remove("transformNav");
  //   }
  // }
  // function onComplete() {
  //   document.getElementById("nav").classList.remove("transformNav");
  // }
  // function onReverseComplete() {
  //   document.getElementById("nav").classList.remove("transformNav");
  // }

  // !

  // $(".JourneySection_slide__J88nk").each(function (i) {});

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#journey",
      start: "top top",
      end: "bottom top",
      // end: "+=" + window.innerHeight * 3,
      scrub: true,
      pin: "#journey",
      markers: true,
      onUpdate: (self) => {
        // if (self.progress > 0 && self.progress < 0.25) {
        //   document.getElementById("slide1").classList.remove("transformSlide");
        // } else if (self.progress > 0.25 && self.progress < 0.5) {
        //   document.getElementById("slide1").classList.add("transformSlide");
        //   document.getElementById("slide2").classList.remove("transformSlide2");
        // } else if (self.progress > 0.5 && self.progress < 0.75) {
        //   document.getElementById("slide2").classList.add("transformSlide2");
        //   document.getElementById("slide3").classList.remove("transformSlide3");
        // } else if (self.progress > 0.75 && self.progress < 1) {
        //   document.getElementById("slide3").classList.add("transformSlide3");
        // }
        if (self.progress > 0.99) {
          // document.getElementById("nav").classList.remove("sticky");
          document.getElementById("nav").classList.remove("transformNav");
        } else {
          document.getElementById("nav").classList.add("transformNav");
        }
      },
      onLeaveBack: () =>
        document.getElementById("nav").classList.remove("transformNav"),
    },
  });

  tl2
    .to("#slide1", {
      xPercent: 100,
    })
    .to("#slide2", {
      xPercent: -100,
    })
    .to("#slide3", {
      yPercent: -100,
    });
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
