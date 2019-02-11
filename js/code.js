





/*********************************************/
$('#prodct').owlCarousel({
    loop:true,
	dots:false,
	autoplay:true,
autoplayTimeout:1000,
autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }

})

/****************************************/
$('#single-prodct').owlCarousel({
    loop:true,
	dots:false,
	autoplay:true,
autoplayTimeout:1000,
autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }

})

/****************************************/
$('#exp').owlCarousel({
    loop:true,
	dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})