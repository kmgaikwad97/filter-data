let grid = document.querySelector(".products")

let filterInput = document.getElementById("filterinput");

// https://fakestoreapi.com/products/

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    // Iterating Value
    for(let value of json){
        addElement(grid,value);}
    }

    // console.log(json);
  );

// **** Add Event Listener ****
filterInput.addEventListener("keyup",filterProducts);

// ***** Callbackfunction *****

function filterProducts(){
  let filterValue = filterInput.value;
  console.log(filterValue); 
}

// get value from the api & create dynamic element

function addElement(appendin, value) {
  let div = document.createElement("div");
  div.className = "item justify-self-center";

  let { image, title, category, price } = value;

  div.innerHTML = `
    <img src="${image}" class="bg-cover img" alt="">
    <div class="text-center py-3 font-poppins">
        <h1 class="text-lg title">${title.slice(0, 21)}..</h1>
        <a href="#" class="block"><span class="text-sm text-red-400">${category}</span></a>
        <span class="block py-3">$ <span class="text-md">${price}</span></span>
        <button class="border-2 px-8 py-1 bg-yellow-400 border rounded-md">Buy Now</button>
    </div>
    `
    appendin.appendChild(div);
}
