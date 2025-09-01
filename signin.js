function showToast(text,bgColor,colour, grav){
    Toastify({
        text: text,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: grav, 
        position: "right", 
        stopOnFocus: true, 
        style: {
        background: bgColor,
        color: colour
        },
        onClick: function(){} 
        }).showToast();
}



function togglePassword() {
    var passInput = document.getElementById("password");
    var showPass = document.getElementById("showPass");
    passInput.type = showPass.checked ? "text" : "password";
}

function signin(event){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var Pass = document.getElementById("password").value;

  let user = JSON.parse(localStorage.getItem('details')) || {};
  // Check if user input matches stored user details
  if (user.email === email && user.pass === Pass) {
    console.log(user);
    showToast("Login successfully");
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    setTimeout(() => { window.location.href = 'dashboard.html'; }, 500);
  } else {
    showToast("Invalid email and password");
  }
}