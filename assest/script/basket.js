let box = document.querySelector(".product");

let url = "http://localhost:3000/singers";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let arr = JSON.parse(localStorage.getItem("basket"));
    console.log(arr);
    data.forEach((element) => {
      arr.forEach((id) => {
        if (id == element.id) {
          box.innerHTML += `<div class="product">
            <div class="card" style="width: 18rem">
              <img src="${element.image}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text" >
                ${element.name} is ${element.nationality}
                </p>
                <button class="btn btn-outline-primary" name ="${element.id}">Detail</button>
                <button class="btn btn-outline-danger" name ="${element.id}"><i class="fa-solid fa-trash"></i></button>
              < button class="btnfav"> <i class="fa-regular fa-heart " ></i></button>
              </div>
            </div>
          </div>`;
        }
      });
    });
  });
