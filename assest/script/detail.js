let id = new URLSearchParams(location.search).get("id");
let detailbox = document.querySelector(".detailBox");
let base_url = "http://localhost:3000/";

console.log(id);

axios(base_url + "singers/" + id).then((res) => {
  let data = res.data;
  let element = data.find((elem) => elem.id == id);
  console.log(element);
  detailbox.innerHTML = `
  <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src="${element.image}"
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">
              ${element.name}
            </h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
              ${element.nationality}
            </h1>

          </div>
        </div>
      </div>
  `;
});
