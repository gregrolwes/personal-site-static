var speed = 90; /* The speed/duration of the effect in milliseconds */

var name = "greg rowelsrowlesrolwes.";

i=0;
function typeWriter() {
    if (i < 11) {
        document.getElementById("name").innerHTML += name.charAt(i);
    } else if ((i >= 11  && i < 17) || (i >= 23 && i  < 29)) {
        var current = document.getElementById("name").innerHTML;
        document.getElementById("name").innerHTML = current.slice(0, current.length - 1);
    } else if (i < 29) {
        document.getElementById("name").innerHTML += name.charAt(i-6);
    } else {
        document.getElementById("name").innerHTML += name.charAt(i-12);
    }
    i++;
    if (i < name.length+12) {
        if (i == 11) {
            setTimeout(typeWriter, speed+850);
        } else if (i == 17) {
            setTimeout(typeWriter, speed+750);
        } else if (i == 23) {
            setTimeout(typeWriter, speed+750);
        } else if (i == 29) {
            setTimeout(typeWriter, speed+750);
        } else if (i == 31) {
            setTimeout(typeWriter, speed+750);
        } else if (i == name.length+11) {
            setTimeout(typeWriter, speed+1000);
        } else {
            setTimeout(typeWriter, speed);
        }
    }
}