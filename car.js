var sedan = document.getElementById("sedan");
var getCar = document.getElementById("getCar");
var position = 0;
var id;

// При снятии наведения
getCar.onmouseover = function(){
	//console.log("over");
	if(id) clearInterval(id);
	id = setInterval(toDriveRight, 2);
	sedan.style.transform = 'scale(1, +1)';
}


// При наведении на элемент
getCar.onmouseout = function(){
	//console.log("out");
	clearInterval(id);
	id = setInterval(toDriveLeft, 2);
}

function toDriveRight(){
	if(position == 500){
		clearInterval(id);
	}else{
		position ++;
		sedan.style.left = position + "px";
	}
}

function toDriveLeft(){
	if(position == 0){
		clearInterval(id)
	}else{}
		position --;
		sedan.style.transform = 'scale(-1, +1)';
		sedan.style.left = position + "px";//зеркально отразить примерно здесь
}