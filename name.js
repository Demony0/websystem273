const name=document.querySelector("#introduction");
const word=name.textContent;
const letter=word.split("");
console.log(letter);
name.textContent="";

for (let i=0;i<letter.length;i++){
	name.innerHTML+="<span>"+letter[i]+"</span>"
}

let char=0;
let timer=setInterval(onTick,50);

function onTick(){
	const span = name.querySelectorAll('span')[char];
	span.classList.add('jump');
	char++;
	if (char === letter.length){
		complete();
		return;
	}
}

function complete(){
	clearInterval(timer);
	timer=null;
}

