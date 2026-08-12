/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
    ".service-card, .price-card, .why-card, .about-content, .about-visual, .section-heading"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================
   BUTTON RIPPLE EFFECT
========================= */

const buttons = document.querySelectorAll(
    ".primary-btn, .secondary-btn, .nav-btn, .price-btn, .contact-btn"
);


buttons.forEach((button) => {

    button.addEventListener("click", function (event) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = button.getBoundingClientRect();

        ripple.style.left =
            event.clientX - rect.left + "px";

        ripple.style.top =
            event.clientY - rect.top + "px";

        button.appendChild(ripple);


        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/* =========================
   TYPING EFFECT
========================= */

const heroTitle = document.querySelector(".hero h1");

if (heroTitle) {

    heroTitle.style.opacity = "1";

}


/* =========================
   CONSOLE MESSAGE
========================= */

console.log(
    "%c WebWithNikhil 🚀 ",
    "color:#00e5ff;font-size:20px;font-weight:bold;"
);

console.log(
    "%c Welcome to my website!",
    "color:#9ca3af;font-size:14px;"
);
/* =========================
   MOBILE MENU
========================= */

const menuToggle =
    document.getElementById("menuToggle");

const mobileNav =
    document.querySelector(".navbar nav");


menuToggle.addEventListener("click", () => {

    mobileNav.classList.toggle("active");


    if (mobileNav.classList.contains("active")) {

        menuToggle.innerHTML = "✕";

        menuToggle.setAttribute(
            "aria-label",
            "Close Menu"
        );

    } else {

        menuToggle.innerHTML = "☰";

        menuToggle.setAttribute(
            "aria-label",
            "Open Menu"
        );

    }

});


/* Close menu after clicking a link */

const mobileLinks =
    document.querySelectorAll(".navbar nav a");


mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mobileNav.classList.remove("active");

        menuToggle.innerHTML = "☰";

        menuToggle.setAttribute(
            "aria-label",
            "Open Menu"
        );

    });

});
/* =========================
   PAGE LOADER
========================= */

window.addEventListener("load", () => {

    const loader =
        document.getElementById("pageLoader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 700);

});


/* =========================
   SCROLL TO TOP
========================= */

const scrollTopButton =
    document.getElementById("scrollTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopButton.classList.add("show");

    } else {

        scrollTopButton.classList.remove("show");

    }

});


scrollTopButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});