/*drag the button*/
$(document).ready(function() {
	$('.btn').draggable();
	$('.modal').draggable();

});

/*work with wow js*/
new WOW().init();

$(document).ready(function(){
$('.carousel').carousel({
carouselWidth:930,
carouselHeight:330,
directionNav:true,
shadow:true,
buttonNav:'bullets'
});
});
