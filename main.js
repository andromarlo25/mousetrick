const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

// Enable the "No" button and change its text when "Yes" is clicked
yesButton.addEventListener("click", () => {
    noButton.disabled = false;
    noButton.textContent = "Catch me"; // Change the button text
    alert("NO!? Gusto Diay ka ma Bagsak gyd");
});

// Move the "Catch me" button randomly when hovered
noButton.addEventListener("mouseover", () => {
    if (!noButton.disabled) {
        const container = document.body;
        const maxX = container.clientWidth - noButton.offsetWidth;
        const maxY = container.clientHeight - noButton.offsetHeight;

        // Generate random positions within bounds
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        // Apply the random positions
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    }
});
