// import { gsap } from "../node_modules/gsap/index.js";
// import { SplitText } from "../node_modules/gsap/SplitText.js";
// import { ScrollTrigger } from "../node_modules/gsap/ScrollTrigger.js";

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  const humburgerMenu = document.getElementsByClassName(
    "header__hamburger-wrapper",
  )[0];

  const loadingTimeline = gsap.timeline();

  loadingTimeline.from(".loading-screeen__img", {
    translateY: "150%",
    translateX: "-140%",
    rotate: "-20deg",
    duration: 1,
    ease: "power3.out",
    stagger: 0.1,
  });

  loadingTimeline.from(".loading-screen__header", {
    y: 200,
  });

  loadingTimeline.to(".loading-screeen__img", {
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.in",
  });

  loadingTimeline.to(
    ".loading-screen__header",
    {
      opacity: 0,
      ease: "power3.out",
    },
    "+=.5",
  );

  loadingTimeline.to(".loading-screen", {
    left: "100vw",
    bottom: "100vh",
    duration: 2,
    ease: "power3.out",
  });

  loadingTimeline.from(".nav__link", {
    opacity: 0,
    y: 10,
    stagger: 0.1,
  });

  loadingTimeline.from(
    ".nav__link-separator",
    {
      opacity: 0,
      y: 10,
      stagger: 0.1,
    },
    "<",
  );

  loadingTimeline.from(
    ".hero__img-explainer",
    {
      opacity: 0,
      y: 10,
      duration: 1,
    },
    "<",
  );

  loadingTimeline.from(".header__diagonal-arrow", {
    opacity: 0,
    scale: 0,
  });

  SplitText.create(".hero__title", {
    type: "lines, words",
    // mask: "lines",
    autoSplit: true,
    onSplit(self) {
      return loadingTimeline.from(self.words, {
        duration: 1,
        x: -30,
        autoAlpha: 0,
        stagger: 0.08,
      });
    },
  });

  loadingTimeline.to(".hero__title-horizontal-row", {
    opacity: 1,
    width: "20%",
    ease: "power2",
    duration: 0.8,
  });

  loadingTimeline.from(".hero__aside", {
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power3",
  });

  loadingTimeline.from(
    ".hero__aside-img",
    {
      opacity: 0,
    },
    "<",
  );

  loadingTimeline.from(
    ".hero__aside-text",
    {
      opacity: 0,
      duration: 2,
    },
    "<",
  );

  const links = document.querySelectorAll(".nav__link");
  links.forEach((link) => {
    const animationDuration = 0.3;
    const scaleAmout = 1.1;
    const translateAmount = 2;

    link.addEventListener("mouseenter", () => {
      gsap.to(link, {
        scale: scaleAmout,
        translateY: translateAmount,
        duration: animationDuration,
      });
    });

    link.addEventListener("mouseleave", () => {
      gsap.to(link, {
        scale: 1,
        translateY: 0,
        duration: 0.3,
      });
    });
  });

  const aboutSectionTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-section__main-text",
      start: "center 80%",
      end: "+=400",
      scrub: true,
    },
  });

  let aboutSectionTargets = gsap.utils.toArray([
    ".about-section__main-text",
    ".about-section__about-us-link",
    ".about-section__secondary-text",
    ".about-section__img",
    ".about-section__learn-more-link",
  ]);

  aboutSectionTargets.forEach((target) => {
    aboutSectionTimeline.from(
      target,
      {
        y: 20,
        opacity: 0,
      },
      "<0.5",
    );
  });

  const servicesSectionTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".services",
      id: "services",
      start: "top 80%",
      end: "+=500",
      scrub: true,
    },
  });

  let servicesSectionTargets = gsap.utils.toArray([
    ".services__section-title",
    ".services__section-heading",
    ".services__view-all-link",
    ".services__arrows-wrapper",
  ]);

  servicesSectionTargets.forEach((target) => {
    servicesSectionTimeline.from(
      target,
      {
        y: -10,
        opacity: 0,
        ease: "power2.out",
      },
      "<0.5",
    );
  });

  gsap.from(".services__card", {
    scrollTrigger: {
      trigger: ".services__card",
      start: "top center",
      end: "+=200",
      id: "card",
      toggleActions: "restart none reverse resume",
    },
    x: -200,
    opacity: 0,
    stagger: 0.1,
    duration: 1,
    ease: "power2.out",
  });

  let insightSectionTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".insight-section",
      id: "insight",
      start: "top 80%",
      end: "+=400",
      scrub: true,
    },
  });

  insightSectionTimeline.from(".insight-section", {
    margin: "0 0",
    ease: "power3",
  });

  let insightSectionTargets = gsap.utils.toArray([
    ".insight__title",
    ".insight__header",
  ]);

  insightSectionTargets.forEach((target) => {
    insightSectionTimeline.from(
      target,
      {
        y: 20,
        opacity: 0,
      },
      "<0.5",
    );
  });

  gsap.from(".projects__section-title", {
    scrollTrigger: {
      trigger: ".projects",
      id: "project-section",
      start: "top 80%",
      end: "top 70%",
      scrub: true,
    },
    opacity: 0,
  });

  gsap.from(".projects__section-heading", {
    scrollTrigger: {
      trigger: ".projects",
      id: "project-section",
      start: "top 80%",
      end: "top 70%",
      scrub: true,
    },
    opacity: 0,
  });

  gsap.from(".project__data-point-wrapper", {
    scrollTrigger: {
      trigger: ".project__data-point-wrapper",
      start: "end 80%",
      toggleActions: "restart none reverse resume",
    },
    y: 10,
    opacity: 0,
    stagger: 0.1,
  });

  gsap.from(".projects__paragraph", {
    scrollTrigger: {
      trigger: ".projects__paragraph",
      start: "bottom 80%",
      end: "+=200",
      scrub: true,
    },
    y: 10,
    opacity: 0,
  });

  gsap.from(".projects__image", {
    scrollTrigger: {
      trigger: ".projects__image",
      start: "top 80%",
      end: "+=100",
      scrub: true,
    },
    scale: 0.9,
    opacity: 0,
    ease: "power2",
  });

  gsap.from(".projects__bottom-section", {
    scrollTrigger: {
      trigger: ".projects__bottom-section",
      start: "bottom 100%",
      end: "+=100",
      scrub: true,
    },
    opacity: 0,
  });

  gsap.from(".blog-link-section__header", {
    scrollTrigger: {
      trigger: ".blog-link-section__header",
      scrub: true,
      end: "+=100",
    },
    y: 20,
    scale: 0.9,
    opacity: 0,
  });

  const blogLinkSection = document.querySelector(".blog-link-section");

  blogLinkSection.addEventListener("mouseenter", () => {
    gsap.to(".blog-link-section__diagonal-arrow", {
      display: "initial",
    });
  });

  blogLinkSection.addEventListener("mousemove", (event) => {
    gsap.to(".blog-link-section__diagonal-arrow", {
      display: "flex",
      scale: 1.5,
      top: event.clientY,
      left: event.clientX,
      translateX: "-100%",
      delay: 0.3,
      ease: "power2",
    });
  });

  document.addEventListener("scrollend", () => {
    gsap.to(".blog-link-section__diagonal-arrow", {
      display: "none",
    });
  });

  blogLinkSection.addEventListener("mouseleave", () => {
    gsap.to(".blog-link-section__diagonal-arrow", {
      scale: 0,
      display: "none",
      duration: 1,
      ease: "power2",
    });
  });

  const footerSectionTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer",
      start: "top 80%",
      end: "+=40",
      scrub: true,
    },
  });

  let footerSectionTargets = gsap.utils.toArray([
    ".footer__header",
    ".footer__pargraph",
  ]);

  footerSectionTargets.forEach((target) => {
    footerSectionTimeline.from(
      target,
      {
        y: 10,
        opacity: 0,
      },
      "<0.5",
    );
  });

  const hamburgerTimeline = gsap.timeline({
    paused: true,
    reversed: true,
    onReverseComplete: function () {
      gsap.set(".mobile-nav", { display: "none" });
    },
  });

  hamburgerTimeline.fromTo(
    ".mobile-nav",
    {
      opacity: 0,
    },
    {
      display: "flex",
      opacity: 1,
    },
  );

  hamburgerTimeline.fromTo(
    ".mobile-nav__link",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      stagger: 0.1,
    },
  );

  function humburgerOpenCloseAnimation() {
    hamburgerTimeline.reversed()
      ? hamburgerTimeline.play()
      : hamburgerTimeline.reverse();
  }

  humburgerMenu.addEventListener("click", humburgerOpenCloseAnimation);

  const mobileNavLinks = document.querySelectorAll(".mobile-nav__link");

  mobileNavLinks.forEach((mobileNavLink) => {
    mobileNavLink.addEventListener("click", humburgerOpenCloseAnimation);
  });

  const serviceArrows = document.querySelectorAll(".services__arrow-icon");
  const projectArrows = document.querySelectorAll(".projects__arrow");
  const svgArrows = [...serviceArrows, ...projectArrows];

  svgArrows.forEach((svgArrow) => {
    svgArrow.addEventListener("mouseover", () => {
      gsap.to(svgArrow, {
        scale: 1.3,
        rotate: "10deg",
        duration: 0.3,
        ease: "power2",
      });
    });

    svgArrow.addEventListener("mouseleave", () => {
      gsap.to(svgArrow, {
        scale: 1,
        rotate: "0deg",
        duration: 0.3,
        ease: "power2",
      });
    });
  });
});
