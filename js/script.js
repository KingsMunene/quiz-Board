$(document).ready(function() {
  $(".btn").submit(function(event){
    event.preventDefault();
    var answer1 = parseInt($("input:radio[name = input1]:checked").val());
    var answer2 = parseInt($("input:radio[name = input2]:checked").val());
    var answer3 = parseInt($("input:radio[name = input3]:checked").val());
    var answer4 = parseInt($("input:radio[name = input4]:checked").val());
    var answer5 = parseInt($("input:radio[name = input5]:checked").val());

    var total = answer1 + answer2 +answer3 +answer4 + answer5;
    document.getElementById('result').innerHTML ="Your score is" + total;
    });
  });
