// this script contains all the code to make the various easter eggs work!
// make sure you're ok with spoilers!

//-----------------------------------------------
// Netscape Cube
//-----------------------------------------------

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


//-----------------------------------------------
// Site Title Hover
//-----------------------------------------------

function getNotPastelColor(){ 
    return "hsl(" + 360 * Math.random() + ',' +
               (75 + 25 * Math.random()) + '%,' + 
               (25 + 25 * Math.random()) + '%)'
}

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


//-----------------------------------------------
// Rainbow Background Party
//-----------------------------------------------

let konami_step = 0;
let konami_code = [
    "ArrowUp",      // ↑
    "ArrowUp",      // ↑
    "ArrowDown",    // ↓
    "ArrowDown",    // ↓
    "ArrowLeft",    // ←
    "ArrowRight",   // →
    "ArrowLeft",    // ←
    "ArrowRight",   // →
    "b",            // B
    "a"             // A
];

document.addEventListener("keydown", event => {
    
    // check sequence
    if (event.key == konami_code[konami_step]) konami_step += 1;
    else konami_step = 0;

    // check if sequence has been completed
    if (konami_step == konami_code.length) {
        setup_random_colours();
        konami_step = konami_code.length -1;
    }

})