
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Display thank you message
    document.getElementById("thankYouMessage").style.display = "block";
});
