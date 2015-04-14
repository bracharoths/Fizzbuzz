$(document).ready(function() {
    console.log( 'ready!' );
});

// fizzbuzz: takes a number and returns fizz, buzz, or fizzbuzz (or the number)
 var fizzbuzz = function(number) {
 	if (number % 3 === 0 && number % 5 === 0) {
 		return 'fizz buzz';
 	}

 	else if (number % 3 === 0) {
 			return 'fizz';

 		} 
 	else if (number % 5 === 0) {
 			return 'buzz';
 		} 

 	else {
 			return number;
 		}
 }

//
 $('form').submit(function(e) {
 	var number = $('#enter-number').val();
 	$('.output').empty();
 	while (number <= 100) {
 		$('.output').append("<div>" + fizzbuzz(number) + "</div>");
 		number++;
 	}
 	e.preventDefault();
 }); 
  

