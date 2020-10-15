var speed = 60; /* The speed/duration of the effect in milliseconds */

var name = "greg rowels rowles rolwes.";

i=0;
function confusedTypeWriter() {
    if (i < 11) {
        document.getElementById("name").innerHTML += name.charAt(i);
    } else if ((i >= 11  && i < 18) || (i >= 25 && i  < 31)) {
        var current = document.getElementById("name").innerHTML;
        document.getElementById("name").innerHTML = current.slice(0, current.length - 1);
    } else if (i < 29) {
        document.getElementById("name").innerHTML += name.charAt(i-7);
    } else {
        document.getElementById("name").innerHTML += name.charAt(i-12);
    }
    i++;
    if (i < name.length+12) {
        var long_pause = [11,18,21,25,31,33];
        var short_pause = [19, 32];

        if (long_pause.includes(i)) {
            setTimeout(confusedTypeWriter, speed+750);
        } else if (short_pause.includes(i)) {
            setTimeout(confusedTypeWriter, speed+50);
        } else if (i == name.length+11) {
            setTimeout(confusedTypeWriter, speed+1000);
        } else {
            setTimeout(confusedTypeWriter, speed);
        }
    }
}