function LoaderAnimation(){
    let tl = gsap.timeline();
    tl.from(".loading-text h1", {
      y: 150,
      stagger: 0.25,
      duration: 0.6,
      delay: 0.5,
    });

    tl.from("#line1-part1", {
      opacity: 0,
      onStart: function () {
        let h5Timer = document.querySelector("h5");
        let grow = 0;

        setInterval(() => {
          if (grow < 100) {
            h5Timer.innerHTML = grow++;
          } else {
            h5Timer.innerHTML = grow;
          }
        }, 30);
      },
    });
    tl.to("h2", {
      animationName: "anime",
      opacity: 1,
    });
    tl.to("#loader", {
      opacity: 0,
      duration: 0.2,
      display: "none",
      delay: 2,
    });
    tl.from("#page1", {
      delay:0.1,
      // y: 100,
      duration: 0.4,
    });
   
    tl.from("#nav", {
      opacity: 0,
    });
    tl.from(".main-text", {
      y: 300, 
      stagger:0.2
    });
}
LoaderAnimation()

function cursorAnimation(){
  document.addEventListener("mousemove", (dets) => {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
    // gsap.to(".video-cursor", {
    //   right: dets.x,
    //   top: dets.y,
    // });
  });

  Shery.makeMagnet("#nav-part2 h4", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  
  Shery.makeMagnet("", {
    // ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    // duration: 1,
  });
}
cursorAnimation()
Shery.makeMagnet("svg", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});