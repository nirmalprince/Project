document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    sections.forEach((section, index) => {
        const top = section.offsetTop;
        const bottom = top + section.clientHeight;
        const scrollY = window.scrollY;

        if (scrollY >= top && scrollY < bottom) {
            navLinks[index].classList.add("active");
        } else {
            navLinks[index].classList.remove("active");
        }
    });
});
