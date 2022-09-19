function set() {
	let fname = document.getElementById("fname");
	if(!fname.value) {
		fname.style = "background-color: red;";
	} else {
		fname.style = "background-color: white;";
	}
	let lname = document.getElementById("lname");
	if(!lname.value) {
		lname.style = "background-color: red;";
	} else {
		lname.style = "background-color: white;";
		
	}
	let email = document.getElementById("email");
	if(!email.value) {
		email.style = "background-color: red;";
	} else {
		email.style = "background-color: white;";
		
	}
	let password = document.getElementById("password1");
	if(!password.value) {
		password.style = "background-color: red;";
	} else {
		password.style = "background-color: white;";
	}
	let checkbox1 = document.getElementById("checkbox1").checked;
	if(!checkbox1) {
		alert("hay checkbox1");
	}
	let checkbox2 = document.getElementById("checkbox2").checked;
	if(!checkbox2) {
		alert("hay checkbox2");
	}

}


let myButton = document.getElementById('registerButton');
myButton.onclick = () => {
  set();
}