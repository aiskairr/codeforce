
; /* Start:"a:4:{s:4:"full";s:101:"/local/templates/codeforce/components/alex/landing.news.list/bitrix24-products/script.js?1649949162937";s:6:"source";s:87:"/local/templates/codeforce/components/alex/landing.news.list/bitrix24-products/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){
	$(document).on('click', '[data-license-tab]', function(){
		$(this).closest('[data-bitrix-products]').find('[data-license-tab-content="'+$(this).attr('data-license-tab')+'"]').fadeIn().siblings().hide();
		
		
		$(this).closest('[data-bitrix-products]').find('[data-license-tab-offer="'+$(this).attr('data-license-tab')+'"]').prop('selected', true).siblings().prop('selected', false);
	});
});
$(document).on('click', '[data-tariff-type]', function(){
	if( parseInt($(this).attr('data-is-cloud')) === 1 )
		$('.products-bitrix__period').show();
	else
		$('.products-bitrix__period').hide();
});

$(document).on('click', '[data-product-staff-tab]', function () {
	$(this).closest('[data-product]').find('[data-product-price="'+$(this).attr('data-product-staff-tab')+'"]').fadeIn().siblings().hide();
	$(this).closest('[data-product]').find('[name="pid"]').val(  $(this).attr('data-product-staff-tab') );
});
/* End */
;; /* /local/templates/codeforce/components/alex/landing.news.list/bitrix24-products/script.js?1649949162937*/
