let signform = document.querySelector(".signform");
let signinpname = document.querySelector(".signinpname");
let signinppass = document.querySelector(".signinppass");

let base_url = "http://localhost:3000/user";

signform.addEventListener("submit", function (e) {
  e.preventDefault();

  let newUsers = {
    name: signinpname.value,
    password: signinppass.value,
  };
  console.log(newUsers);

  fetch(base_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUsers),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  document.location.href = "index.html";
});
