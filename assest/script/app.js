let loginform = document.querySelector(".loginform");
let userInp = document.querySelector(".userInp");
let passInp = document.querySelector(".passInp");

let base_url = "http://localhost:3000/";

let box = document.querySelector(".product");
loginform.addEventListener("submit", function (e) {
  e.preventDefault;
  let newUsers = {
    username: userInp.value,
    password: passInp.value,
  };
  console.log(newUsers);

  fetch(base_url + "user")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let find = false;
      for (let element of data) {
        if (
          element.username == newUsers.username &&
          element.password == newUsers.password
        ) {
          console.log("Giris edildi");
          find = true;
        }
      }
    });
});

fetch(base_url + "singers")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      box.innerHTML += `
                   <div class="product">
            <div class="card" style="width: 18rem">
              <img src="${element.image}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text" >
                ${element.name} is ${element.nationality}
                </p>
                <button class="btn btn-outline-primary" name ="${element.id}">Detail</button>
                <button class="btn btn-outline-danger" name ="${element.id}"><i class="fa-solid fa-trash"></i></button>
              <button class="btnfav"> <i class="fa-regular fa-heart " ></i></button>
              </div>
            </div>
          </div>
                  `;
    });
    let btnfav = document.querySelector(".btnfav");
    let arr;

    if (localStorage.getItem("basket")) {
      arr = JSON.parse(localStorage.getItem("basket"));
    } else {
      arr = [];
    }
    for (let btn of btnfav) {
      btn.addEventListener("click", function () {
        console.log(this.name);
        arr.push(this.name);
        console.log(arr);
        localStorage.setItem("basket", JSON.stringify(arr));
      });
    }
  });

fetch(base_url + "singers")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      box.innerHTML += `
             <div class="product">
      <div class="card" style="width: 18rem">
        <img src="${element.image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text" >
          ${element.name} is ${element.nationality}
          </p>
          <button class="btn btn-outline-primary" name ="${element.id}">Detail</button>
          <button class="btn btn-outline-danger" name ="${element.id}"><i class="fa-solid fa-trash"></i></button>
         <button class="btnfav" > <i class="fa-regular fa-heart " ></i></button>
        </div>
      </div>
    </div>
            `;
    });
  });
