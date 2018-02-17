//GetSinger.js FILE WILL RANDOMLY SELECT A SINGER FOR THE PLAYER


//console.log("GetSinger.js is loaded");

function GetSinger() {

    singerArr = ["adele", "beatles", "beyonce", "jenniferl", "prince", "springsteen", "zeppelin"];
    sing = singerArr[Math.floor(Math.random() * singerArr.length)];
    //console.log(sing); 
}

GetSinger();

//Exports singer for other files to use. 
module.exports = {singer: sing};
