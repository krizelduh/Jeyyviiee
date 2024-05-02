
function book(){
    var day1 = parseInt(perDay.value);
    document.getElementById('cartItem').innerHTML = "Molave Village";
    document.getElementById("total").innerHTML = "P " + 1500 * day1;
}


function book2(){
    var day2 = parseInt(perDay2.value);
    document.getElementById('cartItem').innerHTML = "Narra Village";
    document.getElementById("total").innerHTML = "P " + 2000 * day2;
}


function book3(){
    var day3 = parseInt(perDay3.value);
    document.getElementById('cartItem').innerHTML = "Acacia Village";
    document.getElementById("total").innerHTML = "P " + 1500 * day3;
}

function book4(){
    var tol = document.getElementById("total").innerHTML;
    
    alert("Booking successful!!");
    document.getElementById("total").innerHTML = "P " + 0.00;
   
    
}