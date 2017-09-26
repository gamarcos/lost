document.addEventListener("DOMContentLoaded", function() {
	
	var init 				= document.querySelector(".init-view");
	var validation_qr 		= document.querySelector(".validation-qr");
	var validation 			= document.querySelector(".choose-validation");
	var number_validation 	= document.querySelector(".write-code");
	var validation_code 	= document.querySelector(".validation-code");
	var validation_voucher	= document.querySelector(".button-validation");

    var start = document.querySelector(".button-init");

	start.addEventListener("click", function(){

		validation.style.display = "inherit";
		init.style.display = "none";

	});

	validation_code.addEventListener("click", function() {
		validation.style.display = "none";
		number_validation.style.display = "inherit";

	});

	validation_voucher.addEventListener("click", function() {
		
		var first_number = document.querySelector(".first-numbers").value
		var last_number = document.querySelector(".last-numbers").value

		var number_voucher = first_number.concat(last_number);

		fetch("")
		.then(function(response){
			if(response != 200){
				return response.json()
			}
			throw new Error(response.status)
		}).then(function(data) {
			//code here
		}).map(function(element) {
			//code here
		}).catch(function(err) {  
            console.log('Fetch Error :-S', err);
        }) 
	})
});