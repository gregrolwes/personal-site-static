var speed = 70; /* The speed/duration of the effect in milliseconds */

var name = "greg rowleslwes.";

i=0;
function confusedTypeWriter() {
    if (i < 11) {
        document.getElementById("name").innerHTML += name.charAt(i);
    } else if (i >= 11  && i < 15) {
        var current = document.getElementById("name").innerHTML;
        document.getElementById("name").innerHTML = current.slice(0, current.length - 1);
    } else {
        document.getElementById("name").innerHTML += name.charAt(i-4);
    }
    i++;
    if (i < name.length+12) {
        var long_pause = [11,15,19];
        var short_pause = [];

        if (long_pause.includes(i)) {
            setTimeout(confusedTypeWriter, speed+500);
        } else if (short_pause.includes(i)) {
            setTimeout(confusedTypeWriter, speed+50);
        } else {
            setTimeout(confusedTypeWriter, speed);
        }
    }
}