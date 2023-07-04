
function enviar(){
	let val_arroa = 0;
	let val_punto = 0;

	let x = document.getElementById("campo_texto").value;
	if (x.length==0) {
		window.alert("Please write an email");

	}
	else{

		if (x.indexOf("@") < x.lastIndexOf(".") )
		{ 
			document.getElementById("env").style.display="block";
			document.getElementById("con").style.display="none";
			let correo = document.getElementById('texto_correo');
			correo.innerHTML = x;
		}
		else
			{
			document.getElementById("campo_texto").style.backgroundColor="hsla(4, 100%, 67%,0.1)";
			document.getElementById("campo_texto").style.color="hsl(4, 100%, 67%)";
			document.getElementById("campo_texto").style.border="1px solid hsl(4, 100%, 67%)";
			document.getElementById("idreq").style.display="block";
			}
		}
}

function regresar(){
	document.getElementById("env").style.display="none";
	document.getElementById("con").style.display="flex";
}