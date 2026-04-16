// Show profile and welcome message
function showProfile() {
    // Show profile sections
    document.getElementById("profile")

    // Show welcome message
    document.getElementById("welcomeMessage").style.display = "block";

    // Hide the button after clicking
    document.querySelector(".profile-btn").style.display = "none";
}


// Smooth scrolling for navigation
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});