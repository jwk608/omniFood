$(document).ready(function(){ 


	//for the sticky navigation
	$('.js--section-features').waypoint(function(direction) {
		if(direction == "down"){
			$('nav').addClass('sticky');
		}
		else{
			$('nav').removeClass('sticky');}

	})

	// Scroll on buttons

	





});