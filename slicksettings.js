$(document).ready(function () {
	$('.carousel').slick({
		arrows: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2500,
		mobileFirst: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
		nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
	});
});
