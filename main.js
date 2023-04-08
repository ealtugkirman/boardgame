let burger = document.querySelector(".header__burger"),
  mobileMenu = document.querySelector(".header__menu");
function scrollFunction() {
  document.body.scrollTop > 300 || document.documentElement.scrollTop > 300
    ? (document.getElementById("toTop").style.display = "block")
    : (document.getElementById("toTop").style.display = "none");
}
burger.addEventListener("click", () => {
  burger.classList.toggle("active"), mobileMenu.classList.toggle("mobile-menu");
}),
  (window.onscroll = function () {
    scrollFunction();
  });
let button = document.getElementById("toTop");
function scrollToTop() {
  let e = document.documentElement.scrollTop || document.body.scrollTop;
  e > 0 &&
    (window.requestAnimationFrame(scrollToTop), window.scrollTo(0, e - e / 8));
}
if (
  (button.addEventListener("click", function () {
    (document.documentElement.scrollTop || document.body.scrollTop) > 0 &&
      window.requestAnimationFrame(scrollToTop);
  }),
  null !== document.querySelector(".games-type"))
) {
  let e = document.querySelector(".btn-grid"),
    t = document.querySelector(".btn-list"),
    o = document.querySelectorAll(".games");
  t.addEventListener("click", () => {
    e.classList.remove("active"),
      t.classList.add("active"),
      o.forEach((e) => {
        e.classList.add("list");
      });
  }),
    e.addEventListener("click", () => {
      e.classList.add("active"),
        t.classList.remove("active"),
        o.forEach((e) => {
          e.classList.remove("list");
        });
    });
}
setTimeout(function () {
  var e = document.getElementById("iframeID").getAttribute("data-url");
  document.getElementById("iframeID").src = e;
}, 3e3);
