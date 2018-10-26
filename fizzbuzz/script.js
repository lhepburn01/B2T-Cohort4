let num = 1;

while(num <= 100){
	if ((num % 5 === 0) && (num % 3 === 0)) {
		console.log('Fizz ' + 'Buzz'); //put this 1st so it will stop after checking multiple 3 & 5
	}else if (num % 5 === 0) {
		console.log('Buzz ');
	}else if (num % 3 === 0){
		console.log('Fizz '); 
	}else {
		console.log(num);
	}
	num++;
}