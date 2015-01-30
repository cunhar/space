var controls = { "left": 0, "right": 0, "up": 0, "down": 0, "shoot": 0 };

$(window).keydown(function (e) {
    var key = e.which;
    if (key == 32) {
        controls["shoot"] = 1;
    }
    if (key == 39) {
        controls["right"] = 1;
    }
    if (key == 37) {

        controls["left"] = 1;
    }
    if (key == 38) {

        controls["up"] = 1;
    }
    if (key == 40) {

        controls["down"] = 1;
    }
});
$(window).keyup(function (e) {
    var key = e.which;

    if (key == 32) {
        controls["shoot"] = 0;
    }
    if (key == 39) {
        controls["right"] = 0;
    }
    if (key == 37) {

        controls["left"] = 0;
    }
    if (key == 38) {

        controls["up"] = 0;
    }
    if (key == 40) {

        controls["down"] = 0;
    }
});