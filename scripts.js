$(function() {

  $("#count").click(function(){
    count()
  });
  $("#words").click(function(){
    words()
  });
  $("#factorial").click(function(){
    factorial()
  });
  $("#palindrome").click(function(){
    palindrome()
  });


  //COUNTING
  var totalOutputTheWorks = [];
  function count() {
    var countTo = parseInt(prompt("this is the number we will count to"));
    var multiple = parseInt(prompt("and this is the multiple we will use"));
    //console.log(multiple / countTo);
    if (multiple / countTo > 0) {
      for (var i = 0; i <= Math.abs(countTo) && i >= -1 * Math.abs(countTo); i += multiple) {
        totalOutputTheWorks.push(i);
        //console.log(i);
        alert(totalOutputTheWorks);
      }
    } else {
      run = confirm("you're an idiot, put in some valid number in! try again?");
      if (run) {
        count();
      }
    }
  }


  //WORD PUZZLE
  function words() {
    var input = prompt("write something").split("");
    var vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];

    for (var v = 0; v < vowels.length; v++) {
      for (var i = 0; i < input.length; i++) {
        if (input[i] === vowels[v]) {
          input[i] = "_";
        }
      }
    }
    alert(input.join(""));
  }

  //FACTORIAL
  function factorial() {
    var number = parseInt(prompt("enter a number to get it's factorial"));
    // var result = 1
    // for (var i = 1; i <= input; i++) {
    //   result *= i;
    // }
    //
    function rFact(input, result) {
    console.log(input + " " + result);
      if (input > 0){
        return rFact(input - 1, result * input);
      } else {
        return result;
      }
    }
    alert(rFact(number, 1));
  }

  //PALINDRONES
  function palindrome() {
    var phrase = prompt("type a word or phrase or whatever").replace(/ /g,"").split("");
    if (phrase.toString() === phrase.reverse().toString()) {
      alert("Its a Palindrome!")
    } else {
      alert("Its not a Palindrome!");
  }
}
});
