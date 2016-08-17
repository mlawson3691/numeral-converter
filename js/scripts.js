/////////////back end/////////////
var vowels = ["a", "e", "i", "o", "u", "y"];
var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z"];
var allLetters = vowels.concat(consonants);
var firstLetter, punctuation, translatedWord;
var hasPunctuation = false;



var translate = function(word) {
  hasPunctuation = false;
  if (/\W/.test(word.charAt(word.length-1))) {
    punctuation = word.charAt(word.length-1);
    word = word.slice(0, word.length-1);
    hasPunctuation = true;
  }
  if (word.charAt(0) === "q" && word.charAt(1) === "u") {
    firstLetter = "qu";
    word = word.slice(2, word.length);
    translatedWord =  word + firstLetter + "ay";

    if(hasPunctuation === true) {
      return translatedWord + punctuation;
    } else {
      return translatedWord;
    }
  }
  else if ((consonants.indexOf(word.charAt(0)) >= 0) || (word.charAt(0) === "y")) {
    for (var i = 1; i<word.length; i++) {
      if (vowels.indexOf(word.charAt(i)) >= 0) {
        firstLetter = word.slice(0,i);
        word = word.slice(i,word.length);
        translatedWord =  word + firstLetter + "ay";
        if(hasPunctuation === true) {
          return translatedWord + punctuation;
        } else {
          return translatedWord;
        }
      }
    }
    translatedWord = word + "ay";
    if(hasPunctuation === true) {
      return translatedWord + punctuation;
    } else {
      return translatedWord;
    }
  }
  else if (vowels.indexOf(word.charAt(0)) >= 0) {
    translatedWord = word + "ay";
    if(hasPunctuation === true) {
      return translatedWord + punctuation;
    } else {
      return translatedWord;
    }
  }
  else {
    translatedWord = word;
    if(hasPunctuation === true) {
      return translatedWord + punctuation;
    } else {
      return translatedWord;
    }
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
    results = results.charAt(0).toUpperCase() + results.slice(1,results.length);
    $('#results').text(results);
  })

})
