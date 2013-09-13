/*!
 * LangSwitch v0.1
 *
 * Copyright 2013 Alberto Villalobos
 * Licensed under the Apache License v2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 */
$(document).ready( function () {
	$(".langSwitch-button").click( function (e) {

		e.preventDefault();		
		// Get attribute 
		var language = $(this).attr("langSwitch-language");
		// console.log(language);

		// Translate function
		$(".langSwitch").each( function (data) {

			// Get the needed phrase
			var phrase = $(this).attr("langSwitch-"+language);

			// Change contents to phrase
			$(this).html(phrase);

			// // Debug to console
			// console.log(this);

		});
	});
});
