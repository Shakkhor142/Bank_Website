document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email')
    const email = emailField.value;

    const passwordField = document.getElementById('user-password')
    const password = passwordField.value

    if(email === "shakkhor@gmail.com" && password === "secret"){
       window.location.href = 'bank.html'
    }
    else{
        alert('Please give valid email and password')
    }
   

})