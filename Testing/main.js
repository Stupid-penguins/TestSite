window.addEventListener('scroll', function(e) {
    const object = document.querySelectorAll('.square, .circle, .triangle');

    rateObject = object.getAttribute('data-rate');

    var index = 0, length = object.length;
        for (index; index < length; index++) {
            var pos = window.pageYOffset * rateObject;

            object.style.transform = 'translate3d(0px, '+pos+'px, 0px)';
        }
})