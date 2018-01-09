$(document).ready(function(){
	if($(window).width() < 991){
		$('.has-child').after().on('click', function(){

	    var selector = $(this).children('ul');

	    if (!selector.hasClass('display')) {
	      selector.addClass('display');
	      $('.navbar ul li ul li ul').addClass('display');
	    } else {
	      selector.removeClass('display');
	    }
	  });
	}
});