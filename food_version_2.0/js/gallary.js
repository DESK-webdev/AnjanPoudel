

const responsive={
    0:{
        items:2    },
    447:{
        items:3
    },
    630:{
        items:4
    },
    905:{
        items:5
    },
    1120:{
        items:6
    },
    1320:{
        items:7
    },
    1550:{
        items:8
    },
    1650:{
        items:9
    }
}

$(document).ready(function(){

    $nav= $('.nav');
    $toggleCollapse= $('.toggle-collapse');

    /* click event on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })
// owl carousel for blog
    $('.owl-carousel').owlCarousel({
        loop:false,
        autoplay:false,
        autoplayTimeout:3000,
        responsive:responsive,
        dots:false,
        nav:true,
    });


    //click to scroll up
    $('.move-up span').click(function(){
        $('html,body').animate({scrollTop:0},5000)

    })


});
