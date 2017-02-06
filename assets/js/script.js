$(document).ready(function(){

	/*header menu start*/
		var $menu = $("#menu");

		$(window).scroll(function(){
			if ( $(this).scrollTop() > 300 && $menu.hasClass("default") ){
				$menu.removeClass("default").addClass("fixed");
			} else if($(this).scrollTop() <= 300 && $menu.hasClass("fixed")) {
				$menu.removeClass("fixed").addClass("default");
			}
        });//scroll

	/*header menu end*/


	/*slider1 start*/
	$('.my-slider').slick({
		'arrows': false, 
		'draggable': false,
		'autoplay': true, 
		'autoplaySpeed': 3000,
		'dots':true, 
		'slidesToShow': 1 
	});
	
	$(document).on('click', '.my-slider-prev', function(e){
		e.preventDefault();
		$('.my-slider').slick('slickPrev');
	});
	
	$(document).on('click', '.my-slider-next', function(e){
		e.preventDefault();
		$('.my-slider').slick('slickNext');
	});
	/*slider1 end*/

	/*slider asNavFor start*/
	$('.slider-asNavFor').slick({
		'arrows': false, 
		'draggable': true,
		'autoplay': false, 
		//'autoplaySpeed': 4000, 
		'asNavFor': '.slider',
		'slidesToShow':1 
	});

	$('.slider').slick({
		'arrows': false, 
		'centerMode':false,
		'draggable': true,
		'autoplay': true, 
		'autoplaySpeed': 4000,
		'asNavFor': '.slider-asNavFor', 
		'focusOnSelect': true,
		'slidesToShow':4 
	});

	/*swith start*/
	$(document).on('click', '.prev', function(e){
		e.preventDefault();
		$('.slider').slick('slickPrev');
	});
	
	$(document).on('click', '.next', function(e){
		e.preventDefault();
		$('.slider').slick('slickNext');
	});
	/*swith end*/

	/*slider asNavFor end*/
/*tabs work start*/
	$(document).on('click', '.tabs-menu li', function() {
		$('.all_tabs .active').removeClass('active');
		$(this).addClass('active');
		var tab = $(this).attr('data-tab');
		$('.tab-content[data-tab = '+ tab +']').addClass('active');
	});
/*tabs work end*/

/*tabs contact start*/
	$(document).on('click', '.contact-tabs-menu li', function() {
		$('.contact-tabs .active').removeClass('active');
		$(this).addClass('active');
		var tab = $(this).attr('data-tab');
		$('.contact-tab-content[data-tab = '+ tab +']').addClass('active');
	});
/*tabs contact end*/

/*to check the form start*/
function isStrEmpty(str){
	return (str.length == 0);
}

$(document).on('keyup', '.validate', function(e){

	if ( isStrEmpty( $(this).val() ) ){
		$(this).addClass('error');        
	} else {
		$(this).removeClass('error');
	}

});

$(document).on('click', '#submit-login', function(e){

	e.preventDefault();

	var user_name_input     = $('#user-name'), 
	user_phone_input    = $('#user-phone'),
	user_email_input     = $('#user-email');

	var user_name        	= user_name_input.val().trim(), 
	user_phone      	= user_phone_input.val().trim(),
	user_email       	= user_email_input.val().trim(); 

	user_name_input.val(user_name);
	user_phone_input.val(user_phone);
	user_email_input.val(user_email);

	var validated = true;
	$('.error-msg').html('');

	if ( isStrEmpty(user_name) ){
		user_name_input.addClass('error');
		validated = false;
	} else {
		user_name_input.removeClass('error');
	}

	if ( isStrEmpty(user_phone) ){
		user_phone_input.addClass('error');
		validated = false;
	} else {
		user_phone_input.removeClass('error');
	}

	if ( isStrEmpty(user_email) ){
		user_email_input.addClass('error');
		validated = false;
	} else {
		user_email_input.removeClass('error');
	}

	if (validated){
		console.log('User Name: ' + user_name);
		console.log('Your Phone: ' + user_phone);
		console.log('User Email: ' + user_email);
		$(this).html('SENT');
	} else {
		$('.error-msg').html('<p style="color: #97d1eb; font-weight: 400;">You have not completed all fields</p>');
	}

});

/*to check the form end*/

});



