(function($) {
	const menu = $('.nav-menu');
	const btn_menu = $('.btn-menu');
	const btn_close = $('.btn-close');

	const closeMenu = (event) => {
		$(menu).css('display', 'none');
		$(event.target).css('display', 'none');
		$(btn_menu).css('display', 'block');
	}

	const openMenu = (event) => {
		$(menu).css('display', 'flex');
		$(btn_close).css('display', 'block');
		$(event.target).css('display', 'none');

		$(btn_close).on('click', closeMenu);
	}

	$(btn_menu).on('click', openMenu);

	const scrollToContent = (event) => {
		const scroll_el = $(event.target).attr('href');

		 $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
	}

	$('.main-menu a[href^="#"]').on('click', scrollToContent);
})(jQuery)