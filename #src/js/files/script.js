var mobMenuButton = $('.mobile-menu-button'),
	mobMenuBlock = $('.mobile-menu-block');

// Нажатие по кнопке мобильного меню
$('.mobile-menu').on('click', function (event) {
	mobMenuBlock.toggleClass('mobile-menu-block--show');
});

// Плавный скролл к нужному элементу меню
$('a[href^="#"]').bind("click", function (e) {
	if (mobMenuBlock.hasClass('mobile-menu-block--show')) {
		mobMenuBlock.toggleClass('mobile-menu-block--show');
	}
	var anchor = $(this);

	if ($(window).width() <= '768') {
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr("href")).offset().top
		}, 1000);
	} else {
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr("href")).offset().top - 77 + "px"
		}, 1000);
	}
	e.preventDefault();
	return false;
});

// Фикcированный хедер при скролле
$("#nav-and-logo").removeClass("default");
$("#promo-block").removeClass("promo-block-default");

$(window).scroll(function () {
	if ($(this).scrollTop() > 20) {
		$("#nav-and-logo").addClass("default").fadeIn('fast');
		$("#promo-block").addClass("promo-block-default").fadeIn('fast');
	} else {
		$("#nav-and-logo").removeClass("default", 5000);
		$("#promo-block").removeClass("promo-block-default", 5000);
	};
});

new WOW().init();

$('.slick-slider').slick({
	autoplay: true,
	arrows: false,
	dots: true
});

$('.multiple-items').slick({
	infinite: true,
	dots: true,
	slidesToShow: 3,
	slidesToScroll: 1
 });