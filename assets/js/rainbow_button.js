function set_random_background(elements) {
    let elems = document.querySelectorAll(elements);
    elems.forEach(elem => {

        let h = (elem.dataset.hue) || (360 * Math.random())
        let s = 70 + 30 * Math.random()
        let l = 65 + 10 * Math.random()

        elem.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
        elem.style.borderColor = `hsl(${h}, ${s}%, ${l}%)`;
        elem.style.color = "var(--bs-dark)"

    });
}

document.addEventListener("DOMContentLoaded", () => {
    set_random_background(".rainbow-background");
})