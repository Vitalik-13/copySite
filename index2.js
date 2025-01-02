const buttonsContainer = document.querySelector(".buttons-container");
let closest = document.querySelector(".button-closest");
const logo = document.querySelector(".logo");
let formContainer = document.querySelector(".form-container");
let formClose = document.querySelector(".form-close");
let send = document.querySelector(".fom-button");
let menu = document.querySelector(".menu");
let firstLinkMenu = document.querySelector(".first");
firstLinkMenu.addEventListener("click", () => {
  menu.classList.toggle("transform-tranleteY");
  body.classList.toggle("scrool-none");
  firstLinkMenu.classList.toggle("color");
});
closest.addEventListener("click", () => {
  menu.classList.toggle("transform-tranleteY");
  body.classList.toggle("scrool-none");
  firstLinkMenu.classList.toggle("color");
});
// ============================================
const navMenu = document.querySelector(".nav-menu");

navMenu.addEventListener("mouseover", () => {
  cursor.classList.add("zoomed");
});

navMenu.addEventListener("mouseout", () => {
  cursor.classList.remove("zoomed");
});
buttonsContainer.addEventListener("mouseover", () => {
  cursor.classList.add("zoomed");
});

buttonsContainer.addEventListener("mouseout", () => {
  cursor.classList.remove("zoomed");
});
logo.addEventListener("mouseover", () => {
  cursor.classList.add("zoomed");
});

logo.addEventListener("mouseout", () => {
  cursor.classList.remove("zoomed");
});
formClose.addEventListener("mouseover", () => {
  cursor.classList.add("zoomed");
});

formClose.addEventListener("mouseout", () => {
  cursor.classList.remove("zoomed");
});
send.addEventListener("mouseover", () => {
  cursor.classList.add("zoomed");
});

send.addEventListener("mouseout", () => {
  cursor.classList.remove("zoomed");
});
// ============================================
const cursor = document.querySelector(".kursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
});

let body = document.querySelector(".body");
let content = document.querySelector(".content");
let burger = document.querySelector(".burger-menu");
let navigationMenu = document.querySelector(".nav-menu");
let closeMenu = document.querySelector(".close");

// =======================================================================================
let contact = document.querySelector(".blue");

contact.addEventListener("click", () => {
  formContainer.classList.add("display-blosk");
});
formClose.addEventListener("click", () => {
  formContainer.classList.remove("display-blosk");
});
// =======================================================================================
burger.addEventListener("click", (e) => {
  e.stopPropagation();
  navigationMenu.classList.add("class-transform");
  body.classList.add("scrool-none");
  menu.classList.remove("transform-tranleteY");
});

closeMenu.addEventListener("click", (e) => {
  e.stopPropagation();
  navigationMenu.classList.remove("class-transform");
  body.classList.remove("scrool-none");
});

body.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-menu") && !e.target.closest(".burger-menu")) {
    navigationMenu.classList.remove("class-transform");
    body.classList.remove("scrool-none");
  }
});

navigationMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.to(".main-img", {
  scale: 1.5,
  scrollTrigger: {
    trigger: ".section-one",
    start: "center center",
    scrub: 5,
  },
});
tl.to(".img-scrool", {
  scale: 1.5,
  scrollTrigger: {
    trigger: ".section-two",
    start: "start center",
    scrub: 7,
  },
});
tl.to(".scale", {
  scale: 1.7,
  scrollTrigger: {
    trigger: ".scale",
    start: "start center",
    scrub: 4,
  },
});
tl.to(".last-scale", {
  scale: 1.7,
  scrollTrigger: {
    trigger: ".last-scale",
    start: "start center",
    scrub: 4,
  },
});
tl.to(".last-img", {
  scale: 1.4,
  scrollTrigger: {
    trigger: ".last-img",
    start: "start center",
    scrub: 4,
  },
});
// Створюємо ScrollTrigger для фіксації секції
ScrollTrigger.create({
  trigger: ".section-two",
  start: "top end",
  end: () => "+=" + document.querySelector(".many-small-foto").scrollHeight,
  pin: true,
  scrub: 25, // Синхронізує скролл з анімацією
});

// Анімація прокручування фото в блоці many-small-foto
gsap.to(".img-animation", {
  y: 0,
  stagger: 1.8, // Затримка між анімацією кожного зображення
  scrollTrigger: {
    trigger: ".section-two",
    repeatRefresh: true,
    start: "top top",
    end: "+=5500", // Встановлюємо end на 5500, щоб відповідати часом фіксації секції
    scrub: 25, // Той же scrub для синхронізації
  },
});

// Анімація для ".second" з такою ж швидкістю та чутливістю до скролу
gsap.to(
  ".second",
  {
    scale: 1.5,
    y: 0,
    scrollTrigger: {
      trigger: ".img-animation",
      start: "center center",
      end: "+=500", // Встановлюємо end на 5500, щоб відповідати часом фіксації секції
      scrub: 10, // Той же scrub для синхронізації
    },
  },
  1
);
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".img-animation",
      start: "top center", // Початок анімації, коли секція досягає середини вікна
      end: "bottom center", // Кінець анімації, коли секція досягає низу вікна
      scrub: 3, // Плавність переходу
    },
  })
  .to(
    ".text-container",
    {
      opacity: 0, // Зменшення непрозорості першого блоку
      filter: "blur(20px)", // Додавання розмитості
      duration: 1.5, // Тривалість переходу
      ease: "power1.out", // Плавний вихід
    },
    0
  )
  .to(
    ".second-text-container",
    {
      opacity: 1, // Поява другого блоку
      filter: "blur(0px)", // Забираємо розмитість
      duration: 1.5, // Тривалість появи
      ease: "power1.in", // Плавний вхід
    },
    0 // Накладання анімацій: другий блок починає з'являтися ще до того, як перший повністю зник
  );

// Створюємо ScrollTrigger для третьої секції
ScrollTrigger.create({
  trigger: ".section-three",
  start: "top top",
  end: () =>
    "+=" + document.querySelector(".img-three-section-wrapper").scrollHeight,
  pin: true,
  scrub: 6, // Менший scrub для більш різкої анімації
});

// Анімація для всіх зображень у блоці .second-images-animation
gsap.utils.toArray(".second-images-animation").forEach((img) => {
  gsap.to(img, {
    y: -img.offsetHeight * 7.9, // Рухаємо кожне зображення вгору
    scrollTrigger: {
      trigger: ".section-three",
      stagger: 1, // Зменшення затримки між анімацією зображень для різкішого ефекту
      start: "top top",
      end: "+=2500", // Контролюємо час анімації
      scrub: 6, // Зменшуємо scrub для більшої різкості
    },
  });
});

window.addEventListener("load", () => {
  gsap.fromTo(
    ".last-section",
    { scale: 0 }, // Початковий стан: зменшена
    {
      scale: 1.4, // Кінцевий стан: повний розмір
      scrollTrigger: {
        trigger: ".last-section", // Триггер для анімації
        start: "top bottom", // Початок анімації
        end: "bottom top", // Кінець анімації
        scrub: 1, // Плавна анімація при скролі
        toggleActions: "play reverse play reverse", // Грає при вході та виході
      },
    }
  );
});

tl.to(".last-small-mobile-img", {
  y: -80,
  scrollTrigger: {
    trigger: ".last-small-mobile-img",
    start: "start center",
    scrub: 8,
  },
});
