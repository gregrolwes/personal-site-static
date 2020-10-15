var speed = 200; /* The speed/duration of the effect in milliseconds */

var name = "greg rowlesrolwes";
var typo = "rowles"
var last = "rolwes";

i=0;
function typeWriter() {
    if (i < 11) {
        document.getElementById("name").innerHTML += name.charAt(i);
    } else if (i >= 11  && i < 17) {
        var current = document.getElementById("name").innerHTML;
        document.getElementById("name").innerHTML = current.slice(0, current.length - 1);
    } else {
        document.getElementById("name").innerHTML += name.charAt(i-6);
    }
    i++;
    if (i < name.length+6) {
        setTimeout(typeWriter, speed);
    }
}