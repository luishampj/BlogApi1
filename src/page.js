

function showUserProfile(event){
    var ueObject = event.target;
    console.log('SHOW profile: ' + ueObject.textContent);

    var idUser = ueObject.getAttribute('data-userid');
    console.log('User Id = ' +idUser);
}

var postTemplate =
`<div>   
<h3 class="mt-4"> {{TITLE}}</h3>
<h5 class="lead"> by: {{NAME}} - <span style="color: grey"> <a href="#" data-userid="{{USERID}}" class= "btn_email"> {{EMAIL}} </a> </span> </h5>
<p class="lead"> {{BODY}}</p>
<hr>



</div>`


var userTemplate =
`<div>   
<h1> {{NAME}}</h1>
<h4> {{EMAIL}} - ID: {{USERID}} </h4>
<h4> HA PUBLICADO - <span style="color: blue"> <a href="#"  data-userid="{{USERID}}" id= "btn_post"> {{POSTS}}  POSTS </a> </span> </h4>
<hr>
</div>`


var userPostTemplate =
`<div>   
<h1> {{TITLE}} </h1>
<h4> Created (ESTO HAY QUE ARREGLARLO) {{FECHA}} </h4>
<p> {{BODY}} </p>
<h4> OOH <span style="color: blue"> <a href="#"  data-postid="{{POSTID}}"  id= "btn_like"> ME GUSTA </a> </span> </h4>
<h5> by: {{NAME}} <h5>
<h6> Tags: {{TAGS}} -  Likes: {{LIKES}} -  Comments: {{NCOMMENTS}} -  Views: {{VIEWS}} <h5>
<hr>
<div class="card my-4">
          <h5 class="card-header">Deje su comentario:</h5>
          <div class="card-body">
            <form>
              <div class="form-group">
                <textarea class="form-control" rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
          </div>
        </div>

</div>`



function showPost(){  // MUESTRA TODOS LOS POSTS ------------------------------------------
    console.log('Show Posts');
    fetch('http://itla.hectorvent.com/api/post',{
        headers: {
            'Authorization': `Bearer 5755db3e-3413-4723-bcc9-1451bea8be95`
        }
    })
    .then(res => res.json())
    .then(res=> {
     // console.log(res);
        var postView = '';
        res.forEach(p =>{
     //  console.log(p);
            postView = postView +
            postTemplate.replace('{{BODY}}', p.body)
            .replace('{{NAME}}', p.userName)
            .replace('{{EMAIL}}', p.userEmail)
            .replace('{{USERID}}', p.userId)
            .replace('{{TITLE}}', p.title);
        });
        document.getElementById('app').innerHTML=postView;
        var bes = document.getElementsByClassName('btn_email');

        for (i= 0; i < bes.length; i++) {
            bes[i].addEventListener('click',showProfile);
        }
    })
.catch(err=> {
    console.log(err);
})
}

function showMyPost(idUser){  // MUESTRA LOS POSTS DEL USUARIO ------------------------------------------
    console.log('Show ALL Posts FROM USER');
    

    fetch('http://itla.hectorvent.com/api/post/?userId='+idUser,{
            headers: {
                'Authorization': `Bearer 5755db3e-3413-4723-bcc9-1451bea8be95`
            }
        })
        .then(res => res.json())
        .then(res=> {
          console.log(res);
          var idPost = res.id;
            var postView = '';
            res.forEach(p =>{
         console.log(p);
                postView = postView +
                userPostTemplate.replace('{{BODY}}', p.body)
                .replace('{{NAME}}', p.userName)
                .replace('{{EMAIL}}', p.userEmail)
                .replace('{{USERID}}', p.userId)
                .replace('{{TITLE}}', p.title)
                .replace('{{LIKES}}', p.likes)
                .replace('{{TAGS}}', p.tags)
                .replace('{{VIEWS}}', p.views)
                .replace('{{NCOMMENTS}}', p.comments)
                .replace('{{FECHA}}', p.createdAt)
                .replace('{{POSTID}}', p.id)
                ;
            });
            document.getElementById('app').innerHTML=postView;
            var bes = document.getElementsByClassName('btn_email');
    
            for (i= 0; i < bes.length; i++) {
                bes[i].addEventListener('click',showProfile);
            }

            

            document.getElementById('app').innerHTML=postView;
            document.getElementById('btn_like').addEventListener('click',function(){
                putLikes(idPost)
            });



        })
    .catch(err=> {
        console.log(err);
    })
}



function showProfile(){ // MUESTRA LOS DATOS DEL USUARIO ------------------------------------------
    console.log('Show Profile');

    var ueObject = event.target;
    console.log('SHOW profile: ' + ueObject.textContent);

    var idUser = ueObject.getAttribute('data-userid');
    console.log('User Id = ' +idUser);

    fetch('http://itla.hectorvent.com/api/users/'+idUser,{
        headers: {
            'Authorization': `Bearer 5755db3e-3413-4723-bcc9-1451bea8be95`
        }
    })
    .then(res => res.json())
    .then(res=> {
       console.log(res);
        var profileView = '';
       
            profileView = profileView +
            userTemplate.replace('{{NAME}}', res.name)
            .replace('{{EMAIL}}', res.email)
            .replace('{{USERID}}', res.id)
            .replace('{{POSTS}}', res.posts);

        document.getElementById('app').innerHTML=profileView;
        document.getElementById('btn_post').addEventListener('click',function(){
            showMyPost(idUser)
        });
    })
.catch(err=> {
    console.log(err);

})
   
   
}



function putLikes(idPost){ // Agrega Likes al Post ------------------------------------------
    console.log('Agregando Like');

    //var ueObject = event.target;
   // console.log('SHow SOmething: ' + ueObject.textContent);

    //var idPost= ueObject.getAttribute('data-postid');
    console.log('Post Id = ' +idPost);

    fetch('http://itla.hectorvent.com/api/post/'+idPost,{
        headers: {
            'Authorization': `Bearer 5755db3e-3413-4723-bcc9-1451bea8be95`
        }
    })
    .then(res => res.json())
    .then(res=> {
       console.log(res);
        var profileView = '';
       
            profileView = profileView +
            userTemplate.replace('{{NAME}}', res.name)
            .replace('{{EMAIL}}', res.email)
            .replace('{{USERID}}', res.id)
            .replace('{{POSTS}}', res.posts);

        document.getElementById('app').innerHTML=profileView;
        document.getElementById('btn_post').addEventListener('click',function(){
            showMyPost(idUser)
        });
    })
.catch(err=> {
    console.log(err);

})
   
   
}







window.onload = function(){
  console.log("Working");

  if(localStorage.getItem("Token")) {
    console.log('Token')


    console.log("Working");
    

    document.getElementById("post_view").addEventListener('click', showPost);
    document.getElementById("mypost_view").addEventListener('click', showMyPost);
    document.getElementById("profile_view").addEventListener('click', showProfile);

showPost();
  }else{
    

window.location="page.html";
}




}

