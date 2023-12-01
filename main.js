var httprequest=new XMLHttpRequest();
var result=[];
function getpizza(type){
    httprequest.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${type}`);  
    httprequest.send();
    httprequest.onreadystatechange= function(){
        if(httprequest.readyState==4){
            result=JSON.parse(httprequest.response).recipes;
            displaydata();
            console.log(result);
        }
    }
}

const id=result.recipe_id;
function displaydata(){
    var data="";
    for(var i=0; i<result.length;i++){

        data+=`
        <div class="col-md-3">
        <div class="resturant pt-4">
        <h2 class="fs-6"> ${result[i].title} </h2>
        <img src="${result[i].image_url} " class="img-fluid h-50"/>
        <a href="description.html?id=${result[i].recipe_id}" class="text-black pt-3">Read more</a>
        </div>
        </div> 
        `
    }
    document.getElementById("piza").innerHTML=data;
}
var link=document.querySelectorAll(".nav-link");
for(var i=0;i<link.length;i++){
    link[i].addEventListener('click',function(e){
       getpizza(e.target.innerHTML); 
    })

}
getpizza("pizza")





