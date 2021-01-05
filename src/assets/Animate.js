import gsap from "gsap"

//Animate text
export const textIntro = elem => {
  gsap.from( elem, {
    xPercent: -2,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    scale: 1,
    ease: "back",
  } );
};

/*
 * @params time - <Number> - number to set stagger time between elements
 */
export const staggered = ( elem, time = .1 ) => {
  gsap.from( elem, {
    css: {
      x: -150,
      opacity: 0
    },
    delay: .2,
    duration: .5,
    ease: "back",
    stagger: time
  } )
}

export const fadeIn = elem => {
  gsap.to( elem, {
    opacity: 1,
    duration: 1,
    delay: 1
  } )
}