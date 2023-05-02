		// AJAX code to check input field values when onblur event triggerd.
		function validate() {

		var full_name = document.getElementById("full_name1").value;
		var email = document.getElementById("email1").value;
		var phone = document.getElementById("phone1").value;
		var subject = document.getElementById("subject1").value;
		var message = document.getElementById("message1").value;

		//alert(subject);

		var xmlhttp;
		if (window.XMLHttpRequest) { // for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
		} else { // for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState != 4 && xmlhttp.status == 200) {
		document.getElementById("formoutput").innerHTML = "Validating..";
		} else if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		document.getElementById("formoutput").innerHTML = xmlhttp.responseText;
		} else {
		document.getElementById("formoutput").innerHTML = "<h2 class='text-danger'>Validating...</h2>";
		}
		}
		xmlhttp.open("GET", "validation.php?full_name=" + full_name + "&email=" + email + "&phone=" + phone + "&subject=" + subject + "&message=" + message , true);
		xmlhttp.send();
		}