const box = document.querySelectorAll(".box")
box.forEach((box) => {
    box.addEventListener("click",() => {
    classRemover();
    box.classList.add("active")
    });
});