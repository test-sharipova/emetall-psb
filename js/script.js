//табы в psb-options
$(function() {
  
    $('ul.psb-tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.psb-tabs').find('div.psb-tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    
});

//маска для телефона

let element = document.querySelectorAll('.phone');
let maskOptions = {
    mask: '+7(000)000-00-00'
};
for (let i = 0; i < element.length; i++) {
    let mask = IMask(element[i], maskOptions);
}

//показ модального окна
$('.consult').on('click', function(){
	$('.overlay, .modal').fadeIn();
	document.body.style.top = `-${window.scrollY}px`;
	if (document.documentElement.clientWidth < 767) {
		document.body.style.top = `-${window.scrollY}px`;
		document.body.style.position = 'fixed';
		document.body.style.width = '100%';
	}
	
});
$('.modal__close, .overlay').on('click', function(){
	$('.overlay, .modal, .thanks').fadeOut(0);
	
	const scrollY = document.body.style.top;
	document.body.style.position = '';
	document.body.style.top = '';
	window.scrollTo(0, parseInt(scrollY || '0') * -1);
	document.body.style.paddingRight = '';
	let header = document.querySelector('header');
	header.style.paddingRight = '';
	document.body.style.width = '';
});