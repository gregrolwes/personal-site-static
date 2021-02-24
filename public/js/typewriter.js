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
        document.getElementById("name").innerHTML += name.charAt(i-5);
    }
    i++;
    if (i < name.length+12) {
        var long_pause = [11,18,21,25];
        var short_pause = [19];

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