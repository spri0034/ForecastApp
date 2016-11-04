//Query Selectors

//Event Listeners
//btn.addEventListener("click", getNum);

document.addEventListener("DOMContentLoaded", function(event) {
    let url = "js/forecast.php"
    let data = {
        method: 'post',
        mode: 'cors'
    }
    
//    let foreCastRequest = new Request ("js/forecast.php", {method: 'post', mode: 'cors'});
   let foreCastReq = new Request(url, data);
    fetch(foreCastReq)
        .then(function(response){
            return response.json();
            console.log(response);
        })
        .then(function(returnedData){
            console.log(returnedData.hourly.data[0].time);
            for (i=0;i<returnedData.hourly.data.length -1; i++){
                console.log(returnedData.hourly.data[i].time);
            }
        
        let ul = document.getElementById("appHere");
            returnedData.hourly.data.forEach(function(item){
                let li = document.createElement("li");
                li.innerHTML = moment(item.time).format('LT').local;
                ul.appendChild(li);
                //hi
                //hello
            })
        });
  });



