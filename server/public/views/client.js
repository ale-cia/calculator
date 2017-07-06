$(document).ready(function(){
		var numOne = parseInt($("#numOne").val(), 10);
        var numTwo = parseInt($("#numTwo").val(), 10);

      $("button").click(function(e) {
      		var numOne = parseInt($("#numOne").val(), 10);
        	var numTwo = parseInt($("#numTwo").val(), 10);
            var idClicked= e.target.id; 
        
        var operation= function() {	
        	if(idClicked === "add") {        	
        		var addition = numOne + numTwo;
        		return addition;
  				}

  			else if(idClicked === "subtract") {        	
        		var subtract = numOne - numTwo;
        		return subtract;
  				}		
        }

         	$("#submit").on("click", function(){ 
                console.log(operation());
        })
  	});

      $("#clear").on("click", function(){
      		$("#numOne").val(' ');
        	$("#numTwo").val(' ');

 	})
 });
