// script.js

document.getElementById("bloomButton").addEventListener("click", function() {
    const flower = document.querySelector(".rose.flower");
    const stem = document.querySelector(".rose.stem");
    const bouquetContainer = document.getElementById("roseContainer");
    const bloomButton = document.getElementById("bloomButton");
    const title = document.getElementById("title");
    const message = document.getElementById("message");
    const footerMessage = document.getElementById("footerMessage");
    const loveSong = document.getElementById("loveSong");

    // Show the bouquet container
    bouquetContainer.style.display = "block"; // Show the bouquet container

    // Remove existing animation classes (if any)
    flower.classList.remove("bloom");
    stem.classList.remove("growStem");

    // Trigger reflow
    void flower.offsetWidth;
    void stem.offsetWidth;

    // Add classes to trigger animations
    flower.classList.add("bloom");
    stem.classList.add("growStem");

    // Hide the button after clicking
    bloomButton.style.display = "none";

    // Change the heading text
    title.textContent = "Tặng em ngày 20/10";

    // Show the messages
    message.style.display = "block"; // Show the message after blooming
    footerMessage.style.display = "block"; // Show the footer message

    // Play the love song
    loveSong.play();
});
