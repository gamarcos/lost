document.addEventListener("DOMContentLoaded", function() {

	var back 				= document.querySelector("#back");
	var menu 				= document.querySelector("#menu")
	var init 				= document.querySelector(".init-view");
	var validation 			= document.querySelector(".choose-validation");
	var validation_qr 		= document.querySelector(".validation-qr");
	var validation_code 	= document.querySelector(".validation-code");
	var number_validation 	= document.querySelector(".write-code");
	var validation_voucher	= document.querySelector(".button-validation");

	
	validation_code.addEventListener("click", function() {
		validation.style.display = "none";
		number_validation.style.display = "inherit";

	});

	// validation_voucher.addEventListener("click", function() {
		
	// 	var first_number = document.querySelector(".first-numbers").value
	// 	var last_number = document.querySelector(".last-numbers").value

	// 	var number_voucher = first_number.concat(last_number);
	// });
	var forgot = document.querySelector("#txt-forgot");
	forgot.addEventListener("click", function(e) {
		e.preventDefault();
		swal("Write something here:", {
 			 content: "input",
 			 width:  700,
			 height: 500,
		})
	})
	
	back.addEventListener("click", function () {
		number_validation.style.display  = "none";
		validation.style.display = "inherit";

	})

	menu.addEventListener("click", function() {
	    document.querySelector("#mySidenav").style.width = "100%";
	})
	var close = document.querySelector(".closebtn");
	
	close.addEventListener("click", function() {
		document.querySelector("#mySidenav").style.width = "0";
	})



});