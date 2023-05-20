//------------------------------------------
// function to generate a pastel colour
// https://stackoverflow.com/a/43195379/9195285
//------------------------------------------

function getPastelColor(){ 
    return "hsl(" + 360 * Math.random() + ',' +
               (70 + 30 * Math.random()) + '%,' + 
               (65 + 10 * Math.random()) + '%)'
}

function generate_gradient_colours(n)
{
    colours = "";

    for (let i = 0; i < n; i++)
    {
        colours += getPastelColor();
        if (i < n-1) colours += ", ";
    }

    return colours;
}

function header_set_gradient(element)
{
    // based on https://www.gradient-animator.com/
    let header = document.querySelector(element);
    header.style.background = `linear-gradient(90deg, ${generate_gradient_colours(20)})`;
    header.style.backgroundSize = "2000% 2000%";
}