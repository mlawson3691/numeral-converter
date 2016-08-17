// $(function(){
//   $("#submit").click(function(event){
//     event.preventDefault();
//     var input = $("#number1").val();
//     var inputArray = input.split("");
//     var result = 1;
//     for(var i = 1 ; i <inputArray.length; i++){
//       inputArray[i] = parseInt(inputArray[i]);
//       result *= 2;
//       result += inputArray[i];
//     }
//     $("#results").text(result);
//   });
// });

$(function(){
  $("#submitNumeral").click(function(){
    var input = $("#numeral").val();
    var numeralSystem = parseInt($("#numeralSystem").val());
    var inputArray = input.split("");
    var result = parseInt(inputArray[0]);
    for(var i = 1 ; i <inputArray.length; i++){
      inputArray[i] = parseInt(inputArray[i]);
      result *= numeralSystem;
      result += inputArray[i];
    }
    $("#decimal").val(result);
  });
  $("#submitDecimal").click(function(){
    var input = $("#decimal");
    var numeralSystem = parseInt($("#numeralSystem").val());
    var numeralArray = [];
    while(input >= 1) {
      var remainder = input % numeralSystem;
      input -= remainder;
      input /= numeralSystem;
      numeralArray.unshift(remainder);
    }

    $("#numeral").val(result);
  })





});
