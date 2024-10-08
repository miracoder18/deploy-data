let box = document.querySelector(".meals");

let url = "http://localhost:3000/meals";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let arr = JSON.parse(localStorage.getItem("basket"));
    console.log(arr);
    data.forEach((element) => {
      arr.forEach((id) => {
        if (id == element.id) {
          box.innerHTML += `<div class="meals">
            <div class="card" style="width: 18rem">
              <img src="${element.imageLink}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text" >
                price:${element.price}
                </p>
                <button class="btn btn-outline-primary" name ="${element.id}">Add to cart</button>
                <button class="btn btn-outline-danger delete" name ="${element.id}"><i class="fa-solid fa-trash"></i></button>
              <button class="btn btn-primary" name ="${element.id}">Detail</button>
              <button class="btn btn-success basket" name ="${element.id}">Basket</button>
              </div>
            </div>
          </div>`;
        }
      });
    });
  });
