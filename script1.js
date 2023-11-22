    function printLyrics(){
         var bottles_of_beer = 99
         var lyricsBox = document.getElementById("lyrics");
         for (var i = bottles_of_beer;i>=0;i--){
            if (i>2) {
                lyricsBox.innerHTML += i + " bottles of beer on the wall, " + i + " bottles of beer<br>" +
                        "Take one down and pass it around, " + (i-1) + " bottles of beer on the wall<br><br>";
            }

            else if (i==2) {
                lyricsBox.innerHTML += i + " bottles of beer on the wall, " + i + " bottles of beer<br>" +
                        "Take one down and pass it around, 1 bottle of beer on the wall<br><br>";
            }

            else if  (i==1) {
                    lyricsBox.innerHTML += i + " bottle of beer on the wall, " + i + " bottle of beer<br>" +
                            "Take one down and pass it around, no more bottles of beer on the wall<br><br>";
                }

            else if (i==0) {
                    lyricsBox.innerHTML += "No more bottles of beer on the wall, no more bottles of beer<br>" +
                            "Go to the store and buy some more, 99 bottles of beer on the wall<br><br>";
                }
            }
    }