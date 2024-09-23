let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let div = document.querySelector("div");



btn.addEventListener("click", function ()
{
    console.log("Random color generated!!!");
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let random = `rgb(${r},${g},${b})`;
    h1.innerText = random;
    div.style.backgroundColor = random; 
});
