

function register(){

    
    var name = document.getElementById("name").value
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value;

    var data = {
        name: name,
        username: username,
        password: password,
        email: username
    };
    console.log(data);


   fetch(`${API_PATH}/register`, {
       method: 'POST',
       body: JSON.stringify(data), //data can be string or object
       headers: {
           'Content-Type': 'application/json'
       }
   })
   .then(res => res.json())
   .then(response => console.log('YESSSuccess:', response))
   .catch(error => console.error('NOOOError:', error));
  
 
} 

window.onload = function(){
    
    var nombre = document.getElementById("btnRegistro").addEventListener('click', function(){
        register();
    });
}


