function singBottlesOfBeer() {
    var i = 99;
    while (i > 0) {
        if (i === 1) {
            console.log(i + " bottle of beer on the wall, " + i + " bottle of beer.");
            console.log("Take one down and pass it around, no more bottles of beer on the wall.");
        } else {
            console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
            if (i - 1 === 1) {
                console.log("Take one down and pass it around, " + (i - 1) + " bottle of beer on the wall.");
            } else {
                console.log("Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.");
            }
        }
        i--;
    }
    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
}

singBottlesOfBeer();
