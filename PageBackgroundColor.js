colors = ['#010922', '#8184D9', '#8194D9', '#6184D9', '#4184D9', '#9354D2', '#4164D9'];
let currentColorIndex = 0;

function changeBackgroundColor()
{
    currentColorIndex++;

    if(currentColorIndex >= colors.length) currentColorIndex = 0;
    else if(currentColorIndex <= 0) currentColorIndex = colors.lentgh - 1;

    document.body.style.backgroundColor = colors[currentColorIndex];
}