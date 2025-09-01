function togglePassword() {
    var passInput = document.getElementById("pass");
    var showPass = document.getElementById("showPass");
    passInput.type = showPass.checked ? "text" : "password";
}
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



function send(event){
    event.preventDefault();
    let fname = document.getElementById("fname").value;
    let sname = document.getElementById("sname").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;

    const Cemail = /^[A-Za-z]{1,}[0-9]{0,}[@][g]{1}[m]{1}[a]{1}[i]{1}[l][.][c]{1}[o]{1}[m]{1}$/;
    // const CoPass =  /^[A-Za-z0-9]{8,}$/
    const Copass = /^[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{8,}$/

    if(fname === "" ||sname === "" || email=== "" || pass==="" ||cpass === ""){
        // alert("input can't be empty")
        showToast("input can't be empty")
    }else if(!Cemail.test(email)){
        // alert("put a valide email")
        showToast("Invalid email")
    }else if(!Copass.test(pass)){
        // alert("Your pass is not strong enough")
        showToast("Password must be atleast * characters long and include at least one uppercase letter,one lowercase leter,one number and one special character")
    }else if(pass !== cpass){
        // alert("confirm your password")
        showToast("password and Confirm Password do not match")
    }
    else{
        // Check if email already exists
        let existing = JSON.parse(localStorage.getItem("details"));
        if(existing && existing.email === email){
            if(typeof showToast === "function"){
                showToast("Email has already been used")
            }else{
                alert("Email has already been used");
            }
            return;
        }
        var details = {
            fname: fname,
            sname: sname,
            email: email,
            pass: pass,
            cpass: cpass
        };
        console.log(details);
        if(typeof showToast === "function"){
            showToast("Account created successfully", "#4BB543", "#fff", "top");
            setTimeout(() => { window.location.href = 'signin.html'; }, 500);
        }else{
            alert("Account created successfully");
        }
        localStorage.setItem("details",JSON.stringify(details));
    }
}