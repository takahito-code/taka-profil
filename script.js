document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({behavior: "smooth"});
    });
});

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Danke schön");
    this.reset();
});

const toTopButton = document.getElementById("toTopButton");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
});

toTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
