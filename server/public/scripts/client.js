$(document).ready(function(){
		var numOne = parseInt($("#numOne").val(), 10);
        var numTwo = parseInt($("#numTwo").val(), 10);

      $("#operators").click(function() {
      		var numOne = parseInt($("#numOne").val(), 10);
        	var numTwo = parseInt($("#numTwo").val(), 10);

        	var operation = function(numOne,numTwo) {
        		if($("#operators").attr("id") === "add") {
        		  var addition = numOne + numTwo;
        		    return addition;
  				}
  				   else if($("#operators").attr("id") === "subtract") {
        		   var subtract = numOne - numTwo;
        		    return subtract;
          	}
            else {
              console.log("Please enter a number in seach field");
            }

        // 	} else if($("#operators").attr("id") === "multiply") {
        // 		  var multiply = numOne * numTwo;
        // 		    return multiply;
  			// 	}
        //   else if($("#operators").attr("id") === "divide") {
        // 		 var divide = numOne / numTwo;
        // 		   return divide;
  			// 	}
        //
        //  	$("#submit").on("click", function(){
        //         console.log(operation);
        // });

      $("#clear").on("click", function(){
      		$("#numOne").empty();
        	$("#numTwo").empty();
 	  })
   };
  });
 });
