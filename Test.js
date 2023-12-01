var httprequest = new XMLHttpRequest();
var resul = [];
const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get("id");

function getpizza(type) {
  httprequest.open(
    "GET",
    `https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`
  );
  httprequest.send();
  httprequest.onreadystatechange = function () {
    if (httprequest.readyState == 4) {
      resul = JSON.parse(httprequest.response);
      displaydataById(); 
    }
  };
}


function displaydataById() {
    const recipeId = urlParams.get("id");

      var data = `
        <div class="col-md-5">
          <div class="resturant pt-4">
            <h2>${resul.recipe.title}</h2>
            <img src="${resul.recipe.image_url}" class="img-fluid"/>
            <p class="pt-3"> The integredients is : </p>
            <p class="pt-1"> ${resul.recipe.ingredients} </p>
            <p> The publisher is :  ${resul.recipe.publisher}</p>
           
            <a href="${resul.recipe.source_url}" > ${resul.recipe.source_url}</a>
            <a href="${resul.recipe.publisher_url}" > ${resul.recipe.publisher_url}</a>

          </div>
        </div>`;
  
      document.getElementById("dataById").innerHTML = data;
  }
getpizza("pizza");
