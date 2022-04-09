/*drag the button*/
$(document).ready(function () {
	$('.btn').draggable();
	$('.modal').draggable();

});

/*work with wow js*/
new WOW().init();

function dynamic_append(page_name) {
	// e.preventDefault();

	$("#append_bucket").load('asset/views/' + page_name + '.html');
	var all_data = $('a');
	$(all_data).each(function () {
		$(this).removeClass('active');
	});
	$('a#' + page_name).addClass('active');
	// console.log($('a').attr('id'))
	// $(all_data).each(function () {
	// 	// alert($(this).attr('id')==page_name)
	// 	if($(this).attr('id')==page_name){
	// 		console.log($(this).attr('id'))
	// 		$('a#'+)
	// 	}else{
	// 		// $(this).attr('id').removeClass('active');
	// 		// console.log($(this).attr('id'))
	// 	}
	// });
	// var els = Array.prototype.slice.call( document.getElementsByClassName('show'), 0 );
	// console.log(els.indexOf(event.currentTarget));
	// alert(id_get)
}

$(document).ready(function () {
	// $('.carousel').carousel({
	// carouselWidth:930,
	// carouselHeight:330,
	// directionNav:true,
	// shadow:true,
	// buttonNav:'bullets'
	// });

	// function dynamic_append(page) {
	// 	// e.preventDefault();
	// 	// $("#append_bucket").load('asset/views/' + page_name)
	// 	alert(page)
	// }


	// $('#skill').click(function (e) {
	// 	e.preventDefault();
	// 	$("#append_bucket").load('asset/views/skill.html')
	// })
});