// document.addEventListener("DOMContentLoaded", () => {
//   const headline = document.getElementsByClassName("leftSec");

//   // Create a GSAP timeline
//   const tl = gsap.timeline({ repeat: -1, yoyo: true });

//   // Add animations to the timeline
//   tl.to(headline, { duration: 1, opacity: 1, scale: 1.2, ease: "power1.inOut" })
//     .to(headline, { duration: 1, x: 100, ease: "power1.inOut" })
//     .to(headline, { duration: 1, rotation: 0, ease: "power1.inOut" })
//     .to(headline, { duration: 1, x: 0, ease: "power1.inOut" })
//     .to(headline, { duration: 1, color: "#ff6347", ease: "power1.inOut" })
//     .to(headline, { duration: 1, scale: 1, color: "white", ease: "power1.inOut" });

//   // Initially hide the headline
//   gsap.set(headline, { opacity: 0 });
// });

// const link1 = document.getElementById('leet');
// link1.addEventListener('click', function(event){
//   event.preventDefault();
//   window.location.href = 'https://leetcode.com/u/trishul47/';
// });

// function scrollToSection(sectionId) {
//   document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
// }