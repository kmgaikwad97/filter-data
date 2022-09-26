// const values = ["Kshitij", "vicky", "jem", "mumbai", "badlapur"];

filterInput.addEventListener("keyup", filterProducts);

function filterProducts() {

    //remove all the chils from the current element
    while(grid.childNodes.length > 1){
        grid.removeChild(grid.lastChild)
    }
  // fetch starts from beginer

  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      let filterValue = filterInput.value.toUpperCase();
      let filterData = match(json,'title',filterValue)

      for(const value of filterData){
        addElement(grid,value)
      }
    });

  // fetch ends from beginer
}

// match

const match = (values, filterby, input) => {
  // debugger;
  const p = Array.from(input).reduce(
    (a, v, i) => `${a}[^${input.substr(i)}]*?${v}`,
    ""
  );
  const re = RegExp(p);

  return values.filter((v) => v[filterby].toUpperCase().match(re));
  // console.log("values",p);
};

// console.log(match(values, "bad"));
