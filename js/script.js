import Person from './models/Person.js';
import { validateInputLength , validateEmail , uuid}   from './models/function.js'



//validering input text in form
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
    

     
     
})();

//validating for text length value direct -när skriver inne -amount av täcken
let inputs=document.getElementsByTagName('input')
for (let input of inputs) {
    input.addEventListener('keyup', (e) => {
        validateInputLength(e)
    })
}
/* document.getElementById('fname').addEventListener('keyup', (e) => {
    validateInputLength(e)
})
document.getElementById('lname').addEventListener('keyup', (e) => {
    validateInputLength(e)
})
document.getElementById('street').addEventListener('keyup', (e)=>{
    validateInputLength(e)
}) */


$(document).ready(function() {
        
            //_____________slide()
        $(".flip").click(function(){
            $(".panel").slideToggle("slow");            
        });


        
        $('#regform').submit((e) => {
           e.preventDefault();
           let errors = []
   
           for (let element of e.target.elements) {
               switch(element.tagName) {
                   case 'INPUT': 
                       errors.push(validateInputLength(element))
                       break;                   
               }
           }       
           if(!errors.includes(true))
               window.location.replace("result.html");
           
       }); 
 });  
  