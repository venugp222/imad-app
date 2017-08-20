console.log('Loaded!');

//change the text of main - text div
var element = document.getElementById('main-text');
element.innerHTML='new value';

//move the image
var img = document.getElementById('img');
img.onclick = function()
{
    img.style.marginleft='100px';
};