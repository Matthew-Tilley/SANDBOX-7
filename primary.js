var a = document.getElementById("BOX01")
var b = document.getElementById("BOX02")
var c = document.getElementById("BOX03")
var d = document.getElementById("BOX04")
var e = document.getElementById("BOX05")

var cycler = [a, b, c, d]



$.each(intro_1, function(i, item){
		
		setTimeout(function(){
			$(item)	.delay(2000).fadeIn(1500)
					.fadeOut(1500).delay(2000);
		}, i * 3000);
		
	})



/*$(document).ready(function()
{
	for (i = 0; i < cycler.length; i++)
	{
		$(cycler[i]).fadeTo(1000, .25);
	}
	
	
});*/