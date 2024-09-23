// let url3 = "http://universities.hipolabs.com/search?name=";
// let btn3 = document.querySelector("#country");
// let input = document.querySelector("input");
// let ul = document.querySelector("#uni");

// async function university()
// {
//     try 
//     {
//         ul.innerText = "";
//         let country = input.value;
//         let n = await axios.get(url3+country);
//         list(n.data);
//     }
//     catch(e)
//     {
//         console.log(e);
//     }
// }

// function list(dataArray)
// {
//     for (d of dataArray)
//     {
//         let li = document.createElement("li");
//         ul.append(li);
//         li.innerText = d.name;
//     }
    
// }

// btn3.addEventListener("click",() =>
// {
//     university();
// }
// );


let url3 = "http://universities.hipolabs.com/search?country=";
let btn3 = document.querySelector("#country");
let input = document.querySelector("input");
let ul = document.querySelector("#uni");

async function university()
{
    try 
    {
        ul.innerText = "";
        let country = input.value;
        let n = await axios.get(url3+country);
        // list(n.data);
        console.log(n.data[2]);
    }
    catch(e)
    {
        console.log(e);
    }
}

// function list(dataArray)
// {
//     for (d of dataArray)
//     {
//         let li = document.createElement("li");
//         ul.append(li);
//         li.innerText = d.name;
//     }
    
// }

btn3.addEventListener("click",() =>
{
    university();
}
);

