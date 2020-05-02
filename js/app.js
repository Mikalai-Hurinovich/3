$(function () {
	var header = $("#header"),
		introH = $("#intro").innerHeight(),
		scrollOffset = $(window).scrollTop();

		/* Fixed Header */
		checkScroll(scrollOffset);

$(window).on("scroll",function () {
	scrollOffset = $(this).scrollTop();
	checkScroll(scrollOffset);
	
});// при скролле шапка появляется после первого блока


function checkScroll() {
	if(scrollOffset >= introH){
		header.addClass("fixed");
	} else{
		header.removeClass("fixed");
	}
}

		/* Smooth Scroll */
$("[data-scroll]").on("click",function(event) {
	event.preventDefault();

var $this = $(this),
	elementId = $this.data("scroll"),
	elementOffset = $(elementId).offset().top;


	$("#nav a").removeClass('active');
	$this.addClass('active');

	$("html, body").animate({
		scrollTop: elementOffset
	},800)
	});


/*Menu nav toggle*/
$("#nav_toggle").on("click",function(event) {
	event.preventDefault();

	$(this).toggleClass("active");
	$("#nav").toggleClass("active");
})

/*Hide nav toggle*/
$("#nav a").on("click",function(event) {
	event.preventDefault();
	$("#nav").removeClass("active");
	$("#nav_toggle").removeClass("active")
})

/*Collapse*/
$("[data-collapse]").on("click",function(event) {
		event.preventDefault();


	var $this = $(this),
		elementId = $this.data("collapse");


	$(elementId).slideToggle();
	$this.toggleClass('active');
});

// /*Slider*/
// $("[data-slider]").slick({
// infinite: true,
// fade:true,
// slidesToShow: 1,
// slidesToScroll: 1
// });



});