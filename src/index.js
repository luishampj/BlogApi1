
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
 //.then(response => console.log('Success:', response))
  //.catch(error => console.error('Error:', error));
  .then(response => {
       if(response.estatus && response.estatus == "error"){
           alert("PROBLEMA");          

             
       }else{
           var usuariodato  = {
               "id" : response.id,
               "username" : response.name
           };

        console.log(response.token)
        localStorage.setItem("Token", response.token);
       // sessionStorage.setItem('Token', response.token);
      

          alert("PERFECTO " + usuariodato.username + " Te has logueado correctamente, tu id es: " + usuariodato.id);
         window.location="page.html";
          
       }
   })
   .catch(error => console.error('Error:', error));

   

} 


//window.onload = function(){
    
  //  document.getElementById("btnLogin").addEventListener('click', function(){
    //    login();
    //});
//}








window.onload = function(){

    if(localStorage.getItem("Token")) {
        console.log('Token')


        console.log("Working");
        window.location="page.html";

    //document.getElementById("post_view").addEventListener('click', showPost);
   // document.getElementById("mypost_view").addEventListener('click', showMyPost);
  //  document.getElementById("profile_view").addEventListener('click', showProfile);

    }

    else{

        console.log("NO Tenemos un token, hay que loguearse")

        document.getElementById("btnLogin").addEventListener('click', function(){
            login();

            });





        }


}