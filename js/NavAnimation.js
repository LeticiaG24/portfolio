const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("aside a");

const observer = new IntersectionObserver(
entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove("active"));

        const activeLink = document.querySelector(
        `aside a[href="#${entry.target.id}"]`
        );

        if (activeLink) {
        activeLink.classList.add("active");
        }
    }
    });
},
{
    threshold: 0.6
}
);
sections.forEach(section => observer.observe(section));