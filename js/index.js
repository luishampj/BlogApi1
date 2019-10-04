
function login(){

    //alert("Saludar Persona"); 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var data = {
        username: username,
        password: password,
        email: username
    };
    console.log(data);


   fetch(`${API_PATH}/login`, {
       method: 'POST',
       body: JSON.stringify(data), //data can be string or object
       headers: {
           'Content-Type': 'application/json'
       }
   })
   .then(res => res.json())
   .then(response => console.log('Success:', response))
   .catch(error => console.error('Error:', error));

} 


window.onload = function(){
    
    var nombre = document.getElementById("btnLogin").addEventListener('click', function(){
        login();
    });
}


