document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close");

    const galleryItems = document.querySelectorAll(".gallery-item img");

    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = item.src;
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});