$(document).ready(function(){
  $("button#answer").click(function marks(event){

    event.preventDefault();
    var input1 = parseInt($("input:radio[name = input1]:checked").val());
    var input2 = parseInt($("input:radio[name = input2]:checked").val());
    var input3 = parseInt($("input:radio[name = input3]:checked").val());
    var input4 = parseInt($("input:radio[name = input4]:checked").val());
    var input5 = parseInt($("input:radio[name = input5]:checked").val());


    var total = input1 + input2 + input3 + input4 + input5;
    totalpercentage=(total/50)*100;

    document.getElementById("result").innerHTML = "Your score is " + totalpercentage + "%";
  });
});
