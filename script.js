// Initialize Firebase
  var config = {
    apiKey: "AIzaSyB4ur0sNEEW2GJJHobI92Xga8Ie640ZM3g",
    authDomain: "contactform-d5e27.firebaseapp.com",
    databaseURL: "https://contactform-d5e27.firebaseio.com",
    projectId: "contactform-d5e27",
    storageBucket: "contactform-d5e27.appspot.com",
    messagingSenderId: "178752657982"
  };
  firebase.initializeApp(config);

let messagesRef = firebase.database().ref();

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e){
	e.preventDefault();
	let name = getInputVal("name");
	let company = getInputVal("company");
	let email = getInputVal("email");
	let phone = getInputVal("phone");
	let message = getInputVal("message");

	saveMessage(name, company, email, phone, message);
	document.querySelector(".alert").style.display = "block";
	setTimeout(function(){
		document.querySelector(".alert").style.display = "none";
	}, 3000)
	document.getElementById("contactForm").reset();
}

function getInputVal(id){
	return document.getElementById(id).value;
}

function saveMessage(name, company, email, phone, message) {
	let newMessageRef = messagesRef.push();
	newMessageRef.set({
		name: name,
		company: company,
		email: email,
		phone: phone,
		message: message,
	});
}