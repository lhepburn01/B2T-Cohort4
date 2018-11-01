
let color = ['BLUE', 'GREEN', 'RED', 'ORANGE', 'VIOLET', 'INDIGO', 'YELLOW'];
let o = ['th', 'st','nd','rd'];
console.log(o);
console.log(color);


let colorCount = [];
	for (i = 0; i < color.length; i++) {
		if(i<3){
			document.getElementById("display").innerHTML +=  ` 
		<h4 style="color:${color[i]}">${i+1}  ${o[i+1]} choice is ${color[i]}</h4><br>`;
		}else{
			document.getElementById("display").innerHTML +=  ` 
		<h4 style="color:${color[i]}"> ${i+1}  ${o[0]} 	choice is ${color[i]} </h4><br>`;
		}
		
	}
/* using the `` to get the elements of the color in JS. Both index (color & o) are i<3
no + needed with ``. The font color is controlled by <h4 style="color:${color[i]}">.
*/
