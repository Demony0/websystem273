document.getElementById("pre").addEventListener("click",pre);
document.getElementById("nxt").addEventListener("click",next);

function pre(){
	window.scrollBy(-100,0);
}

function next(){	
	window.scrollBy(100,0);
}


