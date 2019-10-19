/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/page.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\nfunction showUserProfile(event){\r\n    var ueObject = event.target;\r\n    console.log('SHOW profile: ' + ueObject.textContent);\r\n\r\n    var idUser = ueObject.getAttribute('data-userid');\r\n    console.log('User Id = ' +idUser);\r\n}\r\n\r\nvar postTemplate =\r\n`<div>   \r\n<h3 class=\"mt-4\"> {{TITLE}}</h3>\r\n<h5 class=\"lead\"> by: {{NAME}} - <span style=\"color: grey\"> <a href=\"#\" data-userid=\"{{USERID}}\" class= \"btn_email\"> {{EMAIL}} </a> </span> </h5>\r\n<p class=\"lead\"> {{BODY}}</p>\r\n<hr>\r\n\r\n\r\n\r\n</div>`\r\n\r\n\r\nvar userTemplate =\r\n`<div>   \r\n<h1> {{NAME}}</h1>\r\n<h4> {{EMAIL}} - ID: {{USERID}} </h4>\r\n<h4> HA PUBLICADO - <span style=\"color: blue\"> <a href=\"#\"  data-userid=\"{{USERID}}\" id= \"btn_post\"> {{POSTS}}  POSTS </a> </span> </h4>\r\n<hr>\r\n</div>`\r\n\r\n\r\nvar userPostTemplate =\r\n`<div>   \r\n<h1> {{TITLE}} </h1>\r\n<h4> Created (ESTO HAY QUE ARREGLARLO) {{FECHA}} </h4>\r\n<p> {{BODY}} </p>\r\n<h4> OOH <span style=\"color: blue\"> <a href=\"#\"  data-postid=\"{{POSTID}}\"  id= \"btn_like\"> ME GUSTA </a> </span> </h4>\r\n<h5> by: {{NAME}} <h5>\r\n<h6> Tags: {{TAGS}} -  Likes: {{LIKES}} -  Comments: {{NCOMMENTS}} -  Views: {{VIEWS}} <h5>\r\n<hr>\r\n<div class=\"card my-4\">\r\n          <h5 class=\"card-header\">Deje su comentario:</h5>\r\n          <div class=\"card-body\">\r\n            <form>\r\n              <div class=\"form-group\">\r\n                <textarea class=\"form-control\" rows=\"3\"></textarea>\r\n              </div>\r\n              <button type=\"submit\" class=\"btn btn-primary\">Enviar</button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n\r\n</div>`\r\n\r\n\r\n\r\nfunction showPost(){  // MUESTRA TODOS LOS POSTS ------------------------------------------\r\n    console.log('Show Posts');\r\n    fetch('http://itla.hectorvent.com/api/post',{\r\n        headers: {\r\n            'Authorization': `Bearer 5755db3e-3413-4723-bcc9-1451bea8be95`\r\n        }\r\n    })\r\n    .then(res => res.json())\r\n    .then(res=> {\r\n     // console.log(res);\r\n        var postView = '';\r\n        res.forEach(p =>{\r\n     //  console.log(p);\r\n            postView = postView +\r\n            postTemplate.replace('{{BODY}}', p.body)\r\n            .replace('{{NAME}}', p.userName)\r\n            .replace('{{EMAIL}}', p.userEmail)\r\n            .replace('{{USERID}}', p.userId)\r\n            .replace('{{TITLE}}', p.title);\r\n        });\r\n        document.getElementById('app').innerHTML=postView;\r\n        var bes = document.getElementsByClassName('btn_email');\r\n\r\n        for (i= 0; i < bes.length; i++) {\r\n            bes[i].addEventListener('click',showProfile);\r\n        }\r\n    })\r\n.catch(err=> {\r\n    console.log(err);\r\n})\r\n}\r\n\r\nfunction showMyPost(idUser){  // MUESTRA LOS POSTS DEL USUARIO ------------------------------------------\r\n    console.log('Show ALL Posts FROM USER');\r\n    \r\n\r\n    fetch('http://itla.hectorvent.com/api/post/?userId='+idUser,{\r\n            headers: {\r\n                'Authorization': `Bearer 5755db3e-3413-4723-bcc9-1451bea8be95`\r\n            }\r\n        })\r\n        .then(res => res.json())\r\n        .then(res=> {\r\n          console.log(res);\r\n          var idPost = res.id;\r\n            var postView = '';\r\n            res.forEach(p =>{\r\n         console.log(p);\r\n                postView = postView +\r\n                userPostTemplate.replace('{{BODY}}', p.body)\r\n                .replace('{{NAME}}', p.userName)\r\n                .replace('{{EMAIL}}', p.userEmail)\r\n                .replace('{{USERID}}', p.userId)\r\n                .replace('{{TITLE}}', p.title)\r\n                .replace('{{LIKES}}', p.likes)\r\n                .replace('{{TAGS}}', p.tags)\r\n                .replace('{{VIEWS}}', p.views)\r\n                .replace('{{NCOMMENTS}}', p.comments)\r\n                .replace('{{FECHA}}', p.createdAt)\r\n                .replace('{{POSTID}}', p.id)\r\n                ;\r\n            });\r\n            document.getElementById('app').innerHTML=postView;\r\n            var bes = document.getElementsByClassName('btn_email');\r\n    \r\n            for (i= 0; i < bes.length; i++) {\r\n                bes[i].addEventListener('click',showProfile);\r\n            }\r\n\r\n            \r\n\r\n            document.getElementById('app').innerHTML=postView;\r\n            document.getElementById('btn_like').addEventListener('click',function(){\r\n                putLikes(idPost)\r\n            });\r\n\r\n\r\n\r\n        })\r\n    .catch(err=> {\r\n        console.log(err);\r\n    })\r\n}\r\n\r\n\r\n\r\nfunction showProfile(){ // MUESTRA LOS DATOS DEL USUARIO ------------------------------------------\r\n    console.log('Show Profile');\r\n\r\n    var ueObject = event.target;\r\n    console.log('SHOW profile: ' + ueObject.textContent);\r\n\r\n    var idUser = ueObject.getAttribute('data-userid');\r\n    console.log('User Id = ' +idUser);\r\n\r\n    fetch('http://itla.hectorvent.com/api/users/'+idUser,{\r\n        headers: {\r\n            'Authorization': `Bearer 5755db3e-3413-4723-bcc9-1451bea8be95`\r\n        }\r\n    })\r\n    .then(res => res.json())\r\n    .then(res=> {\r\n       console.log(res);\r\n        var profileView = '';\r\n       \r\n            profileView = profileView +\r\n            userTemplate.replace('{{NAME}}', res.name)\r\n            .replace('{{EMAIL}}', res.email)\r\n            .replace('{{USERID}}', res.id)\r\n            .replace('{{POSTS}}', res.posts);\r\n\r\n        document.getElementById('app').innerHTML=profileView;\r\n        document.getElementById('btn_post').addEventListener('click',function(){\r\n            showMyPost(idUser)\r\n        });\r\n    })\r\n.catch(err=> {\r\n    console.log(err);\r\n\r\n})\r\n   \r\n   \r\n}\r\n\r\n\r\n\r\nfunction putLikes(){ // Agrega Likes al Post ------------------------------------------\r\n    console.log('Agregando Like');\r\n\r\n    var ueObject = event.target;\r\n    console.log('SHow SOmething: ' + ueObject.textContent);\r\n\r\n    var idPost= ueObject.getAttribute('data-postid');\r\n    console.log('Post Id = ' +idPost);\r\n\r\n    fetch('http://itla.hectorvent.com/api/post/'+idPost,{\r\n        headers: {\r\n            'Authorization': `Bearer 5755db3e-3413-4723-bcc9-1451bea8be95`\r\n        }\r\n    })\r\n    .then(res => res.json())\r\n    .then(res=> {\r\n       console.log(res);\r\n        var profileView = '';\r\n       \r\n            profileView = profileView +\r\n            userTemplate.replace('{{NAME}}', res.name)\r\n            .replace('{{EMAIL}}', res.email)\r\n            .replace('{{USERID}}', res.id)\r\n            .replace('{{POSTS}}', res.posts);\r\n\r\n        document.getElementById('app').innerHTML=profileView;\r\n        document.getElementById('btn_post').addEventListener('click',function(){\r\n            showMyPost(idUser)\r\n        });\r\n    })\r\n.catch(err=> {\r\n    console.log(err);\r\n\r\n})\r\n   \r\n   \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.onload = function(){\r\n  console.log(\"Working\");\r\n\r\n  if(localStorage.getItem(\"Token\")) {\r\n    console.log('Token')\r\n\r\n\r\n    console.log(\"Working\");\r\n    \r\n\r\n    document.getElementById(\"post_view\").addEventListener('click', showPost);\r\n    document.getElementById(\"mypost_view\").addEventListener('click', showMyPost);\r\n    document.getElementById(\"profile_view\").addEventListener('click', showProfile);\r\n\r\nshowPost();\r\n  }else{\r\n    \r\n\r\nwindow.location=\"page.html\";\r\n}\r\n\r\n\r\n\r\n\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlLmpzPzdlMTQiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5mdW5jdGlvbiBzaG93VXNlclByb2ZpbGUoZXZlbnQpe1xyXG4gICAgdmFyIHVlT2JqZWN0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgY29uc29sZS5sb2coJ1NIT1cgcHJvZmlsZTogJyArIHVlT2JqZWN0LnRleHRDb250ZW50KTtcclxuXHJcbiAgICB2YXIgaWRVc2VyID0gdWVPYmplY3QuZ2V0QXR0cmlidXRlKCdkYXRhLXVzZXJpZCcpO1xyXG4gICAgY29uc29sZS5sb2coJ1VzZXIgSWQgPSAnICtpZFVzZXIpO1xyXG59XHJcblxyXG52YXIgcG9zdFRlbXBsYXRlID1cclxuYDxkaXY+ICAgXHJcbjxoMyBjbGFzcz1cIm10LTRcIj4ge3tUSVRMRX19PC9oMz5cclxuPGg1IGNsYXNzPVwibGVhZFwiPiBieToge3tOQU1FfX0gLSA8c3BhbiBzdHlsZT1cImNvbG9yOiBncmV5XCI+IDxhIGhyZWY9XCIjXCIgZGF0YS11c2VyaWQ9XCJ7e1VTRVJJRH19XCIgY2xhc3M9IFwiYnRuX2VtYWlsXCI+IHt7RU1BSUx9fSA8L2E+IDwvc3Bhbj4gPC9oNT5cclxuPHAgY2xhc3M9XCJsZWFkXCI+IHt7Qk9EWX19PC9wPlxyXG48aHI+XHJcblxyXG5cclxuXHJcbjwvZGl2PmBcclxuXHJcblxyXG52YXIgdXNlclRlbXBsYXRlID1cclxuYDxkaXY+ICAgXHJcbjxoMT4ge3tOQU1FfX08L2gxPlxyXG48aDQ+IHt7RU1BSUx9fSAtIElEOiB7e1VTRVJJRH19IDwvaDQ+XHJcbjxoND4gSEEgUFVCTElDQURPIC0gPHNwYW4gc3R5bGU9XCJjb2xvcjogYmx1ZVwiPiA8YSBocmVmPVwiI1wiICBkYXRhLXVzZXJpZD1cInt7VVNFUklEfX1cIiBpZD0gXCJidG5fcG9zdFwiPiB7e1BPU1RTfX0gIFBPU1RTIDwvYT4gPC9zcGFuPiA8L2g0PlxyXG48aHI+XHJcbjwvZGl2PmBcclxuXHJcblxyXG52YXIgdXNlclBvc3RUZW1wbGF0ZSA9XHJcbmA8ZGl2PiAgIFxyXG48aDE+IHt7VElUTEV9fSA8L2gxPlxyXG48aDQ+IENyZWF0ZWQgKEVTVE8gSEFZIFFVRSBBUlJFR0xBUkxPKSB7e0ZFQ0hBfX0gPC9oND5cclxuPHA+IHt7Qk9EWX19IDwvcD5cclxuPGg0PiBPT0ggPHNwYW4gc3R5bGU9XCJjb2xvcjogYmx1ZVwiPiA8YSBocmVmPVwiI1wiICBkYXRhLXBvc3RpZD1cInt7UE9TVElEfX1cIiAgaWQ9IFwiYnRuX2xpa2VcIj4gTUUgR1VTVEEgPC9hPiA8L3NwYW4+IDwvaDQ+XHJcbjxoNT4gYnk6IHt7TkFNRX19IDxoNT5cclxuPGg2PiBUYWdzOiB7e1RBR1N9fSAtICBMaWtlczoge3tMSUtFU319IC0gIENvbW1lbnRzOiB7e05DT01NRU5UU319IC0gIFZpZXdzOiB7e1ZJRVdTfX0gPGg1PlxyXG48aHI+XHJcbjxkaXYgY2xhc3M9XCJjYXJkIG15LTRcIj5cclxuICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtaGVhZGVyXCI+RGVqZSBzdSBjb21lbnRhcmlvOjwvaDU+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiByb3dzPVwiM1wiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5FbnZpYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG48L2Rpdj5gXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNob3dQb3N0KCl7ICAvLyBNVUVTVFJBIFRPRE9TIExPUyBQT1NUUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGNvbnNvbGUubG9nKCdTaG93IFBvc3RzJyk7XHJcbiAgICBmZXRjaCgnaHR0cDovL2l0bGEuaGVjdG9ydmVudC5jb20vYXBpL3Bvc3QnLHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciA1NzU1ZGIzZS0zNDEzLTQ3MjMtYmNjOS0xNDUxYmVhOGJlOTVgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgdmFyIHBvc3RWaWV3ID0gJyc7XHJcbiAgICAgICAgcmVzLmZvckVhY2gocCA9PntcclxuICAgICAvLyAgY29uc29sZS5sb2cocCk7XHJcbiAgICAgICAgICAgIHBvc3RWaWV3ID0gcG9zdFZpZXcgK1xyXG4gICAgICAgICAgICBwb3N0VGVtcGxhdGUucmVwbGFjZSgne3tCT0RZfX0nLCBwLmJvZHkpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7e05BTUV9fScsIHAudXNlck5hbWUpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7e0VNQUlMfX0nLCBwLnVzZXJFbWFpbClcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3t7VVNFUklEfX0nLCBwLnVzZXJJZClcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3t7VElUTEV9fScsIHAudGl0bGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKS5pbm5lckhUTUw9cG9zdFZpZXc7XHJcbiAgICAgICAgdmFyIGJlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J0bl9lbWFpbCcpO1xyXG5cclxuICAgICAgICBmb3IgKGk9IDA7IGkgPCBiZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYmVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxzaG93UHJvZmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuLmNhdGNoKGVycj0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbn0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dNeVBvc3QoaWRVc2VyKXsgIC8vIE1VRVNUUkEgTE9TIFBPU1RTIERFTCBVU1VBUklPIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgY29uc29sZS5sb2coJ1Nob3cgQUxMIFBvc3RzIEZST00gVVNFUicpO1xyXG4gICAgXHJcblxyXG4gICAgZmV0Y2goJ2h0dHA6Ly9pdGxhLmhlY3RvcnZlbnQuY29tL2FwaS9wb3N0Lz91c2VySWQ9JytpZFVzZXIse1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgNTc1NWRiM2UtMzQxMy00NzIzLWJjYzktMTQ1MWJlYThiZTk1YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgdmFyIGlkUG9zdCA9IHJlcy5pZDtcclxuICAgICAgICAgICAgdmFyIHBvc3RWaWV3ID0gJyc7XHJcbiAgICAgICAgICAgIHJlcy5mb3JFYWNoKHAgPT57XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKHApO1xyXG4gICAgICAgICAgICAgICAgcG9zdFZpZXcgPSBwb3N0VmlldyArXHJcbiAgICAgICAgICAgICAgICB1c2VyUG9zdFRlbXBsYXRlLnJlcGxhY2UoJ3t7Qk9EWX19JywgcC5ib2R5KVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3t7TkFNRX19JywgcC51c2VyTmFtZSlcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7e0VNQUlMfX0nLCBwLnVzZXJFbWFpbClcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7e1VTRVJJRH19JywgcC51c2VySWQpXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne3tUSVRMRX19JywgcC50aXRsZSlcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd7e0xJS0VTfX0nLCBwLmxpa2VzKVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3t7VEFHU319JywgcC50YWdzKVxyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3t7VklFV1N9fScsIHAudmlld3MpXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne3tOQ09NTUVOVFN9fScsIHAuY29tbWVudHMpXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne3tGRUNIQX19JywgcC5jcmVhdGVkQXQpXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgne3tQT1NUSUR9fScsIHAuaWQpXHJcbiAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykuaW5uZXJIVE1MPXBvc3RWaWV3O1xyXG4gICAgICAgICAgICB2YXIgYmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnRuX2VtYWlsJyk7XHJcbiAgICBcclxuICAgICAgICAgICAgZm9yIChpPSAwOyBpIDwgYmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBiZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHNob3dQcm9maWxlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykuaW5uZXJIVE1MPXBvc3RWaWV3O1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuX2xpa2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHB1dExpa2VzKGlkUG9zdClcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgfSlcclxuICAgIC5jYXRjaChlcnI9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2hvd1Byb2ZpbGUoKXsgLy8gTVVFU1RSQSBMT1MgREFUT1MgREVMIFVTVUFSSU8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBjb25zb2xlLmxvZygnU2hvdyBQcm9maWxlJyk7XHJcblxyXG4gICAgdmFyIHVlT2JqZWN0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgY29uc29sZS5sb2coJ1NIT1cgcHJvZmlsZTogJyArIHVlT2JqZWN0LnRleHRDb250ZW50KTtcclxuXHJcbiAgICB2YXIgaWRVc2VyID0gdWVPYmplY3QuZ2V0QXR0cmlidXRlKCdkYXRhLXVzZXJpZCcpO1xyXG4gICAgY29uc29sZS5sb2coJ1VzZXIgSWQgPSAnICtpZFVzZXIpO1xyXG5cclxuICAgIGZldGNoKCdodHRwOi8vaXRsYS5oZWN0b3J2ZW50LmNvbS9hcGkvdXNlcnMvJytpZFVzZXIse1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyIDU3NTVkYjNlLTM0MTMtNDcyMy1iY2M5LTE0NTFiZWE4YmU5NWBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIHZhciBwcm9maWxlVmlldyA9ICcnO1xyXG4gICAgICAgXHJcbiAgICAgICAgICAgIHByb2ZpbGVWaWV3ID0gcHJvZmlsZVZpZXcgK1xyXG4gICAgICAgICAgICB1c2VyVGVtcGxhdGUucmVwbGFjZSgne3tOQU1FfX0nLCByZXMubmFtZSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3t7RU1BSUx9fScsIHJlcy5lbWFpbClcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3t7VVNFUklEfX0nLCByZXMuaWQpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7e1BPU1RTfX0nLCByZXMucG9zdHMpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykuaW5uZXJIVE1MPXByb2ZpbGVWaWV3O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5fcG9zdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBzaG93TXlQb3N0KGlkVXNlcilcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbi5jYXRjaChlcnI9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG5cclxufSlcclxuICAgXHJcbiAgIFxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHB1dExpa2VzKCl7IC8vIEFncmVnYSBMaWtlcyBhbCBQb3N0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgY29uc29sZS5sb2coJ0FncmVnYW5kbyBMaWtlJyk7XHJcblxyXG4gICAgdmFyIHVlT2JqZWN0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgY29uc29sZS5sb2coJ1NIb3cgU09tZXRoaW5nOiAnICsgdWVPYmplY3QudGV4dENvbnRlbnQpO1xyXG5cclxuICAgIHZhciBpZFBvc3Q9IHVlT2JqZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3N0aWQnKTtcclxuICAgIGNvbnNvbGUubG9nKCdQb3N0IElkID0gJyAraWRQb3N0KTtcclxuXHJcbiAgICBmZXRjaCgnaHR0cDovL2l0bGEuaGVjdG9ydmVudC5jb20vYXBpL3Bvc3QvJytpZFBvc3Qse1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyIDU3NTVkYjNlLTM0MTMtNDcyMy1iY2M5LTE0NTFiZWE4YmU5NWBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIHZhciBwcm9maWxlVmlldyA9ICcnO1xyXG4gICAgICAgXHJcbiAgICAgICAgICAgIHByb2ZpbGVWaWV3ID0gcHJvZmlsZVZpZXcgK1xyXG4gICAgICAgICAgICB1c2VyVGVtcGxhdGUucmVwbGFjZSgne3tOQU1FfX0nLCByZXMubmFtZSlcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3t7RU1BSUx9fScsIHJlcy5lbWFpbClcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3t7VVNFUklEfX0nLCByZXMuaWQpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7e1BPU1RTfX0nLCByZXMucG9zdHMpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykuaW5uZXJIVE1MPXByb2ZpbGVWaWV3O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5fcG9zdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBzaG93TXlQb3N0KGlkVXNlcilcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbi5jYXRjaChlcnI9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG5cclxufSlcclxuICAgXHJcbiAgIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcclxuICBjb25zb2xlLmxvZyhcIldvcmtpbmdcIik7XHJcblxyXG4gIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG9rZW5cIikpIHtcclxuICAgIGNvbnNvbGUubG9nKCdUb2tlbicpXHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiV29ya2luZ1wiKTtcclxuICAgIFxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9zdF92aWV3XCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1Bvc3QpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteXBvc3Rfdmlld1wiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dNeVBvc3QpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9maWxlX3ZpZXdcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93UHJvZmlsZSk7XHJcblxyXG5zaG93UG9zdCgpO1xyXG4gIH1lbHNle1xyXG4gICAgXHJcblxyXG53aW5kb3cubG9jYXRpb249XCJwYWdlLmh0bWxcIjtcclxufVxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/page.js\n");

/***/ })

/******/ });