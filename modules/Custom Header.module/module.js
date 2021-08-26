// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 6;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
        $('#headerContentMain').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
            $('#headerContentMain').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

// Mobile Menu
// const targetDiv = document.getElementById("menuMobileContent");
// const btn = document.getElementById("mobileHamburguer");
// btn.onclick = function () {
//   if (targetDiv.style.display !== "none") {
//     targetDiv.style.display = "none";
//   } else {
//     targetDiv.style.display = "flex";
//   }
// };







// $('a.mobile-trigger').click(function() {
//   $(this).next('.hs-menu-flow-horizontal').slideToggle(250);
//   $('body').toggleClass('mobile-open');
//   $('span.child-triggerm').removeClass('child-open');
//   $('.hs-menu-children-wrapper').slideUp(250);
//   return false;
// });

//     $('.mainmenu span.child-triggerm').click(function() {
//         $(this).parent().siblings('.hs-item-has-children').find('span.child-triggerm').removeClass('child-open');
//         $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
//         $(this).next('.hs-menu-children-wrapper').slideToggle(250);
//         $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
//         $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('span.child-triggerm').removeClass('child-open');
//         $(this).toggleClass('child-open');
//         return false;
//     });

