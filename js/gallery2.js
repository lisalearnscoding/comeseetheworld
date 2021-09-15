
function upDate(preview){
   document.getElementById('image').innerHTML = preview.alt;
   document.getElementById('image').style.backgroundColor="#CCEECC";
   document.getElementById('image').style.backgroundImage="url('"+ preview.src + "')";

	}

	function unDo(){
   document.getElementById('image').innerHTML= 'Hover over an image below to display here.';
   document.getElementById('image').style.backgroundImage="url('')";
	document.getElementById('image').style.backgroundColor="#8e68ff";
	}