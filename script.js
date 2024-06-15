function overlayNav() {
  const menu = document.querySelector(".menu");
  const close = document.querySelector(".close");
  const tl = gsap.timeline();
  tl.to("#mobile", {
    x: 0,
    stagger: 0.5,
  });
  tl.pause();
  menu.addEventListener("click", function () {
    tl.play();
  });
  close.addEventListener("click", function () {
    tl.reverse(0);
  });
}
overlayNav();
// cursor

document.addEventListener("mousemove", (e) => {
  gsap.to(".cursor", {
    x: e.x,
    y: e.y,
  });
});
gsap.from("#headerImg img", {
  x: 50,
  opacity: 0,
  stagger: 0.2,
});
