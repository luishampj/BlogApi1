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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nfunction login(){\r\n\r\n    //alert(\"Saludar Persona\"); \r\n    var username = document.getElementById(\"username\").value;\r\n    var password = document.getElementById(\"password\").value;\r\n\r\n    var data = {\r\n        username: username,\r\n        password: password,\r\n        email: username\r\n    };\r\n    console.log(data);\r\n\r\n\r\n   fetch(`${API_PATH}/login`, {\r\n       method: 'POST',\r\n       body: JSON.stringify(data), //data can be string or object\r\n       headers: {\r\n           'Content-Type': 'application/json'\r\n       }\r\n   })\r\n   .then(res => res.json())\r\n //.then(response => console.log('Success:', response))\r\n  //.catch(error => console.error('Error:', error));\r\n  .then(response => {\r\n       if(response.estatus && response.estatus == \"error\"){\r\n           alert(\"PROBLEMA\");          \r\n\r\n             \r\n       }else{\r\n           var usuariodato  = {\r\n               \"id\" : response.id,\r\n               \"username\" : response.name\r\n           };\r\n\r\n        console.log(response.token)\r\n        localStorage.setItem(\"Token\", response.token);\r\n       // sessionStorage.setItem('Token', response.token);\r\n      \r\n\r\n          alert(\"PERFECTO \" + usuariodato.username + \" Te has logueado correctamente, tu id es: \" + usuariodato.id);\r\n         window.location=\"page.html\";\r\n          \r\n       }\r\n   })\r\n   .catch(error => console.error('Error:', error));\r\n\r\n   \r\n\r\n} \r\n\r\n\r\n//window.onload = function(){\r\n    \r\n  //  document.getElementById(\"btnLogin\").addEventListener('click', function(){\r\n    //    login();\r\n    //});\r\n//}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.onload = function(){\r\n\r\n    if(localStorage.getItem(\"Token\")) {\r\n        console.log('Token')\r\n\r\n\r\n        console.log(\"Working\");\r\n        window.location=\"page.html\";\r\n\r\n    //document.getElementById(\"post_view\").addEventListener('click', showPost);\r\n   // document.getElementById(\"mypost_view\").addEventListener('click', showMyPost);\r\n  //  document.getElementById(\"profile_view\").addEventListener('click', showProfile);\r\n\r\n    }\r\n\r\n    else{\r\n\r\n        console.log(\"NO Tenemos un token, hay que loguearse\")\r\n\r\n        document.getElementById(\"btnLogin\").addEventListener('click', function(){\r\n            login();\r\n\r\n            });\r\n\r\n\r\n\r\n\r\n\r\n        }\r\n\r\n\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZnVuY3Rpb24gbG9naW4oKXtcclxuXHJcbiAgICAvL2FsZXJ0KFwiU2FsdWRhciBQZXJzb25hXCIpOyBcclxuICAgIHZhciB1c2VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVcIikudmFsdWU7XHJcbiAgICB2YXIgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkXCIpLnZhbHVlO1xyXG5cclxuICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgICAgZW1haWw6IHVzZXJuYW1lXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG5cclxuICAgZmV0Y2goYCR7QVBJX1BBVEh9L2xvZ2luYCwge1xyXG4gICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgLy9kYXRhIGNhbiBiZSBzdHJpbmcgb3Igb2JqZWN0XHJcbiAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgfVxyXG4gICB9KVxyXG4gICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuIC8vLnRoZW4ocmVzcG9uc2UgPT4gY29uc29sZS5sb2coJ1N1Y2Nlc3M6JywgcmVzcG9uc2UpKVxyXG4gIC8vLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKSk7XHJcbiAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgaWYocmVzcG9uc2UuZXN0YXR1cyAmJiByZXNwb25zZS5lc3RhdHVzID09IFwiZXJyb3JcIil7XHJcbiAgICAgICAgICAgYWxlcnQoXCJQUk9CTEVNQVwiKTsgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICB2YXIgdXN1YXJpb2RhdG8gID0ge1xyXG4gICAgICAgICAgICAgICBcImlkXCIgOiByZXNwb25zZS5pZCxcclxuICAgICAgICAgICAgICAgXCJ1c2VybmFtZVwiIDogcmVzcG9uc2UubmFtZVxyXG4gICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnRva2VuKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVG9rZW5cIiwgcmVzcG9uc2UudG9rZW4pO1xyXG4gICAgICAgLy8gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnVG9rZW4nLCByZXNwb25zZS50b2tlbik7XHJcbiAgICAgIFxyXG5cclxuICAgICAgICAgIGFsZXJ0KFwiUEVSRkVDVE8gXCIgKyB1c3VhcmlvZGF0by51c2VybmFtZSArIFwiIFRlIGhhcyBsb2d1ZWFkbyBjb3JyZWN0YW1lbnRlLCB0dSBpZCBlczogXCIgKyB1c3VhcmlvZGF0by5pZCk7XHJcbiAgICAgICAgIHdpbmRvdy5sb2NhdGlvbj1cInBhZ2UuaHRtbFwiO1xyXG4gICAgICAgICAgXHJcbiAgICAgICB9XHJcbiAgIH0pXHJcbiAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcikpO1xyXG5cclxuICAgXHJcblxyXG59IFxyXG5cclxuXHJcbi8vd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICBcclxuICAvLyAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5Mb2dpblwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAgICBsb2dpbigpO1xyXG4gICAgLy99KTtcclxuLy99XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUb2tlblwiKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbicpXHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIldvcmtpbmdcIik7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uPVwicGFnZS5odG1sXCI7XHJcblxyXG4gICAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvc3Rfdmlld1wiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dQb3N0KTtcclxuICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteXBvc3Rfdmlld1wiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dNeVBvc3QpO1xyXG4gIC8vICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2ZpbGVfdmlld1wiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dQcm9maWxlKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZWxzZXtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJOTyBUZW5lbW9zIHVuIHRva2VuLCBoYXkgcXVlIGxvZ3VlYXJzZVwiKVxyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bkxvZ2luXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgbG9naW4oKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });