var App = App || {};

// App.formValidation = (function () {

function validateLogin(login) {
		if (/^[a-zA-Z1-9]+$/.test(login) === false) {
			alert('The login must contain only latin letters');
			return false;
		} 
		if (login.length < 4 || login.length > 20) {
			alert('The login must contain 4 to 20 symbols');
			return false;
		} 
		if (parseInt(login.substr(0, 1))) {
			alert('The login must begin with a letter');
			return false;
		}
	// or just one code line
		// if(/^[a-zA-z]{1}[a-zA-Z1-9]{3,20}$/.test(login) === false)
	 //    {alert('It is an appropriate login'); return false;}
		else {
			openAccount();
			return false;
			//после вызова функции  openAccount() назначить return false; тогда submit не срабатывает и функция все-равно вызывается и переходит на другую страницу
		}

}

function openAccount() {
	window.location = "SPA.html";
  // window.location.assign("SPA.html");
  // window.open("SPA.html", "menubar=yes,toolbar=yes,scrollbars=yes,resizable=yes");
}



 App.main = (function () {

 var toggler  = document.querySelectorAll(".myToggler");
 var collapseIn = ".collapse.in";
 var scopeToggler  = document.querySelectorAll(".scopeButtStyle");
 var scopeCollapseIn = ".scope.collapse.in";

  function initListeners () {
  	toggle(toggler, collapseIn);
 	toggle(scopeToggler, scopeCollapseIn);
  }

  function toggle (arg, arg2) {
 	this.arg = arg;
 	this.arg2 = arg2;
 	for(var i=0; i < arg.length; i++) {
 		arg[i].addEventListener("click", function (e) {
            arg2NodeList = document.querySelectorAll(arg2);
 			for(var j = 0; j < arg2NodeList.length; j++) {
 				if (arg2NodeList[j].id !== this.getAttribute("href").substr(1)) {
 					arg2NodeList[j].classList.remove("in");
 				} else if (arg2NodeList.length === 1) {
                    this.classList.remove("in");
                }
 			}
 			console.log(e); 
 		})
 	}
 }

 return {
   initListeners: initListeners
 }

 })();

App.main.initListeners();


//toggle the registration form
$(document).ready(function(){
	$(".toggle").click(function(){
		$(".formDataWrapper").toggle();
	})
});	



// var App = App || {};

// // App.formValidation = (function () {

// function validateLogin(login) {
// 		if (/^[a-zA-Z1-9]+$/.test(login) === false) {
// 			alert('The login must contain only latin letters');
// 			return false;
// 		} 
// 		if (login.length < 4 || login.length > 20) {
// 			alert('The login must contain 4 to 20 symbols');
// 			return false;
// 		} 
// 		if (parseInt(login.substr(0, 1))) {
// 			alert('The login must begin with a letter');
// 			return false;
// 		}
// 	// or just one code line
// 		// if(/^[a-zA-z]{1}[a-zA-Z1-9]{3,20}$/.test(login) === false)
// 	 //    {alert('It is an appropriate login'); return false;}
// 		else {
// 			// return clickToLogin.innerHTML='<a href="SPA.html">Login<br><span>as a member</span></a>';
// 			return openAccount();
// 		}

// }

// function openAccount() {
//   window.open("SPA.html", "menubar=yes,toolbar=yes,scrollbars=yes,resizable=yes");
//   // window.location.assign("SPA.html");

// }

// // 	return {
// // 		validateLogin: validateLogin
// // 	}

// // })()



// (function toggleNav () {
// var toggler  = document.querySelectorAll(".myToggler");
// 	for(var i=0; i< toggler.length; i++) {
// 		toggler[i].addEventListener("click", function () {
// 			var collapseIn = document.querySelectorAll(".collapse.in");
// 			for(var j = 0; j < collapseIn.length; j++) {
// 				if (collapseIn[j].classList.display == "block") {
// 					collapseIn[j].style.display = "block";
// 				} else {
// 					collapseIn[j].classList.remove("in"); //почему пришлось убирать класс с текущего же j, а не со всех остальных
// 				}
// 			} 
// 		})
// 	}
// })()




// (function toggleScope () {
// var scopeToggler  = document.querySelectorAll(".scopeButtStyle");
// 	for(var i=0; i< scopeToggler.length; i++) {
// 		scopeToggler[i].addEventListener("click", function () {
// 			var scopeCollapseIn = document.querySelectorAll(".scope.collapse.in");
// 			for(var j = 0; j < scopeCollapseIn.length; j++) {
// 				if (scopeCollapseIn[j].classList.display == "block") {
// 					scopeCollapseIn[j].style.display = "block";
// 				} else {
// 					scopeCollapseIn[j].classList.remove("in");
// 				}
// 			} 
// 		})
// 	}
// })()

// App.main = (function () {

// var toggler  = document.querySelectorAll(".myToggler");
// var collapseIn = document.querySelectorAll(".collapse.in");
// var scopeToggler  = document.querySelectorAll(".scopeButtStyle");
// var scopeCollapseIn = document.querySelectorAll(".scope.collapse.in");

//  function initListeners () {
//  	toggle(toggler, collapseIn);
// 	toggle(scopeToggler, scopeCollapseIn);
//  }

//  function toggle (arg, arg2) {
// 	this.arg = arg;
// 	this.arg2 = arg2;
// 	for(var i=0; i < arg.length; i++) {
// 		arg[i].addEventListener("click", function (e) {
// 			for(var j = 0; j < arg2.length; j++) {
// 				if (arg2.classList.display == "block") {
// 					arg2.style.display = "block";
// 				} else {
// 					arg2.classList.remove("in"); //почему пришлось убирать класс с текущего же j, а не со всех остальных
// 				}
// 			}
// 			console.log(e); 
// 		})
// 	}
// }

// return {
//   initListeners: initListeners
//   // toggle: toggle
// }

// })();













