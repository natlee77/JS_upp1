/* import   {write ,  validateInputLength }   from './models/function.js'

*/
import Person from './models/Person.js';
$(document).ready(function() {
/* 
    $(".flip").click(function(){
          $(".panel").slideToggle("slow");
      });
    
}) */
$("body").delegate(".flip", "click", function(){
	$('.panel').not($(this).next(".panel").slideToggle("slow")).slideUp("slow");
  });
  
  
	$("#button").click(function() {
		$("#users").append(`<div class="flip">click me</div><div class="panel">whats up</div>`);
    
    });
    
   $("#btn_delete").click(function() {
		$("#users").delete.Person()
    
});
});