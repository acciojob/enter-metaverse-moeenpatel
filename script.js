//your JS code here. If required.
var para = document.getElementById("status");
var button =  document.getElementById("enterBtn");

button.addEventListener('click', ()=>{
	
	let h1 = document.createElement("h1");
	h1.textContent = "Entered Metaverse";
	para.parentNode.replaceChild(h1,para);
 
	
});