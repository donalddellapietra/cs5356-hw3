document.addEventListener("DOMContentLoaded", function () {
    const dogImage = document.getElementById("dog-image");
    const fetchDogButton = document.getElementById("fetch-dog");
    const dogMessage = document.getElementById("dog-message");

    async function fetchRandomDog() {
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await response.json();
            dogImage.src = data.message;
            dogMessage.textContent = ""; // Clear message when new dog loads
        } catch (error) {
            console.error("Error fetching the dog image:", error);
        }
    }

    // Fetch dog image on page load so it loads when the page is opened
    fetchRandomDog();

    fetchDogButton.addEventListener("click", fetchRandomDog);

    // show message when the mouse moves over the dog
    dogImage.addEventListener("mousemove", function (event) {
        dogMessage.textContent = "Thank you for petting me!";
        dogImage.style.transform = `scale(1.09)`;
    });

    // reset image when the mouse leaves
    dogImage.addEventListener("mouseleave", function () {
        dogMessage.textContent = "";
        dogImage.style.transform = "scale(1)";
    });
});

