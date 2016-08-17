/////////////back end/////////////
var vowels = ["a", "e", "i", "o", "u", "y"];
var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z"];
var allLetters = vowels.concat(consonants);
var firstLetter;

var translate = function(word) {
  if (word.charAt(0) === "q") {
    firstLetter = "qu";
    word = word.slice(2, word.length);
    return word + firstLetter + "ay";
  }
  else if ((consonants.indexOf(word.charAt(0)) >= 0) || (word.charAt(0) === "y")) {
    for (var i = 1; i<word.length; i++) {
      if (vowels.indexOf(word.charAt(i)) >= 0) {
        firstLetter = word.slice(0,i);
        word = word.slice(i,word.length);
        return word + firstLetter + "ay";
      }
      else {
        return word + "ay";
      }
    }
  }
  else if (vowels.indexOf(word.charAt(0)) >= 0) {
    return word + "ay";
  }
  else {
    return word;
  }
}


/////////////front end/////////////

$(function(){
  $("#textInputButton").click(function(event){
    event.preventDefault();
    var textInput = $('#textInput').val().toLowerCase();
    var textArray = textInput.split(" ");

    for (var i = 0; i<textArray.length; i++) {
      textArray[i] = translate(textArray[i]);
    }


    var results = textArray.join(" ");
    $('#results').text(results);
  })

})
