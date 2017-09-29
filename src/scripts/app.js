function setHeight() {
	var max_height = screen.height;
	var content 			= document.querySelector(".container");
	content.style.height = max_height;
}

document.addEventListener("DOMContentLoaded", function() {

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

	validation_voucher.addEventListener("click", function() {
		
		var first_number = document.querySelector(".first-numbers").value
		var last_number = document.querySelector(".last-numbers").value

		var number_voucher = first_number.concat(last_number);
	})
});
