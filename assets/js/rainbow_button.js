/**
 * Sets the foreground and / or background color of elements to a random colour.
 * 
 * The colour which is chosen depends on the current colour theme.  The randomness
 * of the saturation and lightness values of the HSV expression will be weighted to
 * make sure the the selected colour contrasts well with the background.
 * 
 * The hue of the colour can be specified by including the `data-hue` attribute on
 * affected elements.  The colour will still be random, but this can be used to make
 * sure the resulting colour is always within the same "named colour" (eg: orange).
 * 
 * @param {*} elements a query selector to determine which elements to set the colour of
 * @param {*} fg whether to set the foreground colour
 * @param {*} bg whether to set the background and border colours
 * @param {*} theme specify which theme to contrast with; if this is not provided then the current theme will be used
 */
function set_random_colour(elements, fg, bg, theme=undefined) {
    let elems = document.querySelectorAll(elements);
    elems.forEach(elem => {

        let h, s, l, text;        

        h = (elem.dataset.hue) || (360 * Math.random())
        if ((theme || document.querySelector("html").dataset.bsTheme) == "dark") {
            s = 70 + 30 * Math.random()
            l = 65 + 10 * Math.random()
            text = "var(--bs-dark)"
        } else { // light mode
            s = 75 + 25 * Math.random()
            l = 25 + 25 * Math.random()
            text = "var(--bs-light)"
        }

        if (fg) {
            elem.style.color = `hsl(${h}, ${s}%, ${l}%)`;
        }
        if (bg) {
            elem.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
            elem.style.borderColor = `hsl(${h}, ${s}%, ${l}%)`;
            elem.style.color = text;
        }

    });
}

function setup_random_colours() {
    set_random_colour(".rainbow-background", false, true, "dark");
    set_random_colour(":not(a, pre) > code", true, false);
}

document.addEventListener("DOMContentLoaded", setup_random_colours)
document.addEventListener("colour_update", setup_random_colours);