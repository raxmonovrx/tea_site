function toggleDropdown() {
    const dropdown = document.getElementById("dropdownMenu");
    const icon = document.querySelector(".menu-icon i");

    dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";

    if (dropdown.style.display === "block") {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
}
function toggleDropdownM() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.style.display =
        dropdownMenu.style.display === "block" ? "none" : "block";
}

const dropdownLinks = document.querySelectorAll(".dropdown-menu a");
dropdownLinks.forEach((link) => {
    link.addEventListener("click", function () {
        const dropdown = document.getElementById("dropdownMenu");
        dropdown.style.display = "none";
        const icon = document.querySelector(".menu-icon i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    });
});

document.addEventListener("click", function (event) {
    const dropdown = document.getElementById("dropdownMenu");
    const menuIcon = document.querySelector(".menu-icon");
    if (!menuIcon.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
        const icon = document.querySelector(".menu-icon i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});

const slider = document.querySelector(".seo__card_boxes");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});
