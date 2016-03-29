$(function() {

  $("#count").click(function(){
    count()
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


});
