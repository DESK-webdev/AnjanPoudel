

const responsive={
    0:{
        items:2    },
    421:{
        items:3
    },
    470:{
        items:4
    },
    630:{
        items:5
    },
    905:{
        items:6
    },
    1120:{
        items:7
    },
    1320:{
        items:8
    },
    1550:{
        items:9
    },
    1650:{
        items:10
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
