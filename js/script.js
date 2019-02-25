$(document).ready(function() {
  $("button#btn").click(function results(event){
    var marks = 0;
    $("input:radio[name=ans2]:checked,input:radio[name=ans12]:checked,input:radio[name=ans23]:checked,input:radio[name=ans34]:checked,input:radio[name=ans15]:checked").each(function(){
      count=marks += parseInt($(this).val());
      percentage = (count/50)*100;
    });
  });
