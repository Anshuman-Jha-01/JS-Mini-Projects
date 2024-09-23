let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";
let p = document.querySelector("p");
let btn = document.querySelector("button");
let img = document.querySelector("img");
let btn2 = document.querySelector("#dog");

async function getFact()
{
    try 
    {
        let v = await axios.get(url);
        p.innerText = `${v.data.fact}`;
    }   
    catch(e)
    {
        p.innerText = "An error occured";
    }
}

btn.addEventListener("click",() =>
{
    getFact();
});

async function dogImage()
{
    try
    {
        let source = await axios.get(url2);
        console.log(source.data.message);
        img.setAttribute("src",source.data.message);
    }
    catch(e)
    {
        console.log(e);
    }
    
}

btn2.addEventListener("click", () =>
{
    dogImage();
});

