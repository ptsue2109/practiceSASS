$(document).ready(function () {
    
    $('.menu-mobile').click(function (e) { 
        e.preventDefault();
        $('.nav-bar').addClass('active')
    });

    $('.nav-x').click(function (e) { 
        e.preventDefault();
        $('.nav-bar').removeClass('active')
    });

    $('.down-btn-mobile').click(function (e) { 
        e.preventDefault();
        $('.right-header').toggle('show')
    });

    $('.feedback-slider').slick({
        dots: true,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000,
    });  
    let handleScroll = () => {
        if(window.scrollY >= 100) {
            $('header').css("background-color", "#000");
        } else {
            $('header').css("background-color", "rgba(0, 0, 0, 0.6)");
        }
    }
    
    window.addEventListener('scroll', handleScroll)
});

