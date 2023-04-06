/*alert(window.innerWidth);
alert(window.outerWidth);
*/
//window.onload = function()  {
window.addEventListener("resize", myFunction);
function myFunction(){
 if(window.innerWidth<600 )
		{	

			var i = document.getElementById('p').setAttribute('src','img/ideias_voando_pensando.png');

		}
		else{
		  var r = document.getElementById('p').setAttribute('src','img/ideias_voando.png')

		}
		 //alert(window.innerWidth)
	 }

var menu =document.getElementsByClassName('navbar-inverse');
var numpx= '220';

window.addEventListener('scrol', function(){
	if(window.scrollY> numpx){
		menu.classList.add()
	}
	
});

 
