function loveCalc(){
var str1 = document.getElementById("name1").value.split('');
var str2 = document.getElementById("name2").value.split('');
var finalstr1 = $(str1).not(str2).get().join('').replace(/\s/g,'');
var finalstr2 = $(str2).not(str1).get().join('').replace(/\s/g,'');
var strlen = finalstr1.length + finalstr2.length; 
var arr = new Array("F", "L", "A", "M", "E", "S");
var stp=1;
for (i=6;i>0;i--) {
	var g=((strlen%i)+stp)-1;
	if (arr.length>1) {
		if(g>i)	{
			g=g%i;
		}
		if(g==0) {
			g=arr.length;
		}
		arr.splice(g-1,1);
		stp=g;
	}
}
switch (arr[i]) {
	case "F":
		document.getElementById("result").innerHTML = "Friendship";
		break;
	case "L":
		document.getElementById("result").innerHTML = "Love";
		break;
	case "A":
		document.getElementById("result").innerHTML = "Affection";
		break;
	case "M":
		document.getElementById("result").innerHTML = "Marriage";
		break;		
	case "E":
		document.getElementById("result").innerHTML = "Enmity";
		break;
	case "S":
		document.getElementById("result").innerHTML = "Sisterhood";
		break;			
}
document.getElementById("result").style.display="block";
return false;
}
