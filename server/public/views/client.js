$(document).ready(function(){
		var numOne = parseInt($("#numOne").val(), 10);
        var numTwo = parseInt($("#numTwo").val(), 10);

      $("#add").click(function() {
      		var numOne = parseInt($("#numOne").val(), 10);
        	var numTwo = parseInt($("#numTwo").val(), 10);
        	var addition = numOne + numTwo;


         	$("#submit").on("click", function(){
                console.log(addition);

        });
  	})
      $("#clear").on("click", function(){
      		$("#numOne").val(' ');
        	$("#numTwo").val(' ');
 	})

   });
