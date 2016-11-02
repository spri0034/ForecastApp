//Query Selectors
let ul = document.querySelector("#appHere");
//Event Listeners
//btn.addEventListener("click", getNum);

document.addEventListener("DOMContentLoaded", function(event) {
    let url = "forcast.php"
    let data = {
        method: 'post',
        mode: 'cors'
    }
    
//    let foreCastRequest = new Request ("./forecast.php", {method: 'post', mode: 'cors'});
   let foreCastReq = new Request(url, data);
    fetch(foreCastReq)
        .then(function(response){
            return response.json();
        })
        .then(function(returnedData){
//            returnedData.hourly.data.forEach(function(item){
//                li = document.createElement("li");
//                li.innerHTML = item;
//            })
        });
  });



