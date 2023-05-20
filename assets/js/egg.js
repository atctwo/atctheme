
let cube_event_listener_added = false;
function netscape_cube()
{
    let cube = document.getElementById("netscape-cube");
    cube.classList.add("ns-cube-spin");
    if (!cube_event_listener_added) {
        cube.addEventListener("animationiteration", () => {
            cube.classList.remove("ns-cube-spin");
            cube_event_listener_added = true;
        });
    }
}

function getNotPastelColor(){ 
    return "hsl(" + 360 * Math.random() + ',' +
               (75 + 25 * Math.random()) + '%,' + 
               (25 + 25 * Math.random()) + '%)'
}


// let title_colour = "#000000";

function title_hover()
{
    // title_colour = getComputedStyle(title).color;
    let title = document.getElementById("site-header-brand");
    title.style.color = getNotPastelColor();
}

function title_unhover()
{
    let title = document.getElementById("site-header-brand");
    title.style.removeProperty("color");
}