var numbers;

function onScreen(){
	document.getElementById('screen').innerHTML = "";
	numbers = "";
}


function clearScreen(){
	document.getElementById('screen').innerHTML = 0;
	numbers = "";
	console.log(numbers);
}


function numberPress(x){
	document.getElementById('screen').innerHTML += x;
	console.log(numbers);
}

function operationPress(x){
	document.getElementById('screen').innerHTML += x;
}

function getResult(){
			numbers = document.getElementById('screen').innerHTML;
			var result = eval(numbers);
			var final = result.toFixed(3);
			console.log(final);
			document.getElementById('screen').innerHTML = final;


}