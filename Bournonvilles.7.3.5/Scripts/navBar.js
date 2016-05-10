$(document).ready(function () {
    $('.dropdown-submenu>a').unbind('mouseover').mouseover(function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});

