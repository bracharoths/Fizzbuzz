$(document).ready(function() {
    console.log( 'ready!' ); //ensures that whole page is loaded before js runs 
});

// fizzbuzz: takes a number and returns fizz, buzz, or fizzbuzz (or the number)
 var fizzbuzz = function(number) { //defines the variable fizzbuzz to funtion 
 	if (number % 3 === 0 && number % 5 === 0) { //logic to game. If #/3 and /5 and no remainder, then return fizzbuzz 
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
 	var number = $('#enter-number').val(); //assigns number user starts with to variable number and retrieves the value from form. 
 	$('.output').empty(); //empties the li's 
 	while (number <= 100) { //when the value/# is less than or equal to 100
 		$('.output').append("<div>" + fizzbuzz(number) + "</div>"); //numbers should append according to fizzbus funtion. Why need (number)?
 		number++; //numbers increase until reaches 100. 
 	}
 	e.preventDefault(); //what is the default action here that we're preventing? 
 }); 
  

