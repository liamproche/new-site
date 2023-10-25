const $navLinksContainer = $('#nav-links-container');
const $hamburger = $('.menu-image');
const $sideNav = $('.side-nav');
const $x = $('.x');
const $textBox = $('.text-box');

//NAV MENU
$($hamburger).on('click', ()=>{
    $($sideNav).toggleClass('show-nav');
    $($hamburger).css('opacity', '0')
});

$($x).on('click', ()=>{
    $($sideNav).toggleClass('show-nav');
    $($hamburger).css('opacity', '1');
});

console.log("check")