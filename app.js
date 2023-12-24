const cards = document.querySelectorAll(".cards");

cards.forEach(card => {
    card.addEventListener("click", () => {
        cards.forEach(c => {
            c.classList.remove("active");
        });
        card.classList.add("active");
    });
});