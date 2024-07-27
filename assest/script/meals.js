let base_url = "http://localhost:3000/";
let box = document.querySelector(".meals");

fetch(base_url + "meals")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      box.innerHTML += `
                   
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
          
                  `;
      //Delete
      let deleteBtn = document.querySelectorAll(".delete");

      for (let btn of deleteBtn) {
        btn.addEventListener("click", function () {
          console.log(this.parentElement.parentElement.remove());
        });
      }
      //Basket
      let basket = document.querySelectorAll(".basket");
      let arr;

      if (localStorage.getItem("basket")) {
        arr = JSON.parse(localStorage.getItem("basket"));
      } else {
        arr = [];
      }
      for (let btn of basket) {
        btn.addEventListener("click", function () {
          console.log(this.name);
          arr.push(this.name);
          console.log(arr);
          localStorage.setItem("basket", JSON.stringify(arr));
        });
      }

    });
  });
