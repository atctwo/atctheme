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
    console.log(element);

    // add css rule for things with animated background
    let style = document.createElement("style")
    document.head.appendChild(style);
    style.sheet.insertRule(`.animated-gradient {background: linear-gradient(90deg, ${generate_gradient_colours(20)}); }`)

    // based on https://www.gradient-animator.com/
    let headers = document.querySelectorAll(element);
    headers.forEach(header => {
        header.classList.add("animated-gradient");
        header.style.backgroundSize = "2000% 2000%";
    });
}