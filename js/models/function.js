
/* export  function validateInputLength(e) {
    if(e.target.value.length < 3) {
      console.log(e.target.value.length)
        document.getElementById('result').innerText = 'For short text ' + e.target.id
        document.getElementById('btn_submit').disabled = true
    }
    else {
       document.getElementById('result').innerText = ''
       //be able press button efter 
        document.getElementById('btn_submit').disabled = false
    }
    
  
}  */
export  function validateInputLength(e) {
  
  if(e.target.value.length < 3) {       
    document.getElementById(`${e.target.id}-error`).innerText = 'For short text ' + e.target.id
    document.getElementById('btn_submit').disabled = true
  }
  else {   
  //  document.getElementById(`${e.target.id}-error`).innerText = ''    
    document.getElementById('btn_submit').disabled = false
  }
}  
export function validateEmail(email) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(regform.email.value))
  {
    return (true)
  }
    
    document.getElementById('result').innerText = 'invalid email ' + e.target.id
    document.getElementById('submit').disabled = false
} 

 
export function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var result = Math.random() * 16 | 0, value = c == 'x' ? result : (result & 0x3 | 0x8);
        return value.toString(16);
    });
} 
