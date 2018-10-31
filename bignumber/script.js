//This will print the greatest number in the console
	
		
function greaterNumber(){
	let number1 = parseInt(prompt('Please enter your 1st number:'));
	let number2 = parseInt(prompt('Please enter your 2nd number:'));
	let number3 = parseInt(prompt('Please enter your 3rd number:'));

	if ((number1 > number2) && (number1 > number3)){
		console.log(number1 + " is the greatest number")
	}else if ((number2 > number3) && (number2 > number1)){
		console.log(number2 + " is the greatest number");
	}else{
		console.log(number3 + " is the largest number");
	}
}