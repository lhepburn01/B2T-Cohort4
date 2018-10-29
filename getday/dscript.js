function getDays(){
	//let d = new Date();
	//let q = d.getDay();

	switch (new Date().getDay()){
	case 0:
		alert("It's Sunday");
		break;
	case 1:
		alert("It's Monday");
		break;
	case 2:
		alert("It's Tuesday");
		break;
	case 3:
		alert("It's Wednesday");
		break;			
	case 4:
		alert("It's Thursday");
		break;
	case 5:
		alert("It's Friday");
		break;	
	default:
		alert("It's Saturday");
	}
	
	document.getElementsbyId("displayDay").innerHTML = "Today is " + q;

	}	

