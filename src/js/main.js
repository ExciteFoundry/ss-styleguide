if ($('.product-card').length > 0) {
	import(/* webpackChunkName: 'product-card' */ '~mod/product-card');
}

if ($('.carousel--scroll').length > 0) {
	import(/* webpackChunkName: 'carousel-scroll' */ '~mod/carousel-scroll');
}
