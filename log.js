document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;


  var isAuthenticated = true;

  if (username == "admin" && password == "admin123") {
    window.location.href = "aguilos.html";
    alert("Login Successfully");
  } else {
    alert("Incorrect username or password.");
  }
});


