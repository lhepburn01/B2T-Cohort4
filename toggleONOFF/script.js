let toggleButton = document.getElementById('toggleButton');

function changeToggleButton(){
	if (toggleButton.value === 'ON') {
		toggleButton.value = 'OFF';
	}else{
		toggleButton.value = 'ON';
	}
}

document.getElementById('toggleButton').addEventListener('click', changeToggleButton);


let myBox = document.getElementById('myBox');

function changeBoxColor(){
	
	if(toggleButton = 'ON' && myBox.style.backgroundColor === 'red'){
		myBox.style.backgroundColor = 'green';
	} else {
		myBox.style.backgroundColor = 'red';
	}
}

document.getElementById('myBox').addEventListener('mouseover', changeBoxColor);
document.getElementById('myBox').addEventListener('mouseleave', changeBoxColor);