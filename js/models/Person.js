export default class Person {
    constructor(firstname, lastname,email,phone,street,postcode,city) {
       
        this.firstname = firstname
        this.lastname = lastname
        this.email=email
        this.phone=phone
        this.street=street        
        this.postcode=postcode
        this.city=city
        
    }
    get personid(){
       return Date.now().toString()
    }
}
//++person
const persons =[];
let persondata;
let personDiv,flipDiv,panelDiv,idElement,emailElement,phoneElement,streetElement,postcodeElement,cityElement;

document.getElementById('btn_submit').addEventListener('click', () => {
   persondata = new Person(`${fname.value}`, `${lname.value}`, `${email.value}`,`${phone.value}`,`${street.value}`,`${postcode.value}`,`${city.value}`)
   persons.push(persondata)
   document.getElementById('text-output').innerText = "person created!"
   alert("person created!")
   createElement();
   writeInPanel();
})
 function createElement() {
    // CREATE ELEMENT
    personDiv = document.createElement('div')
    flipDiv = document.createElement('div')
    panelDiv = document.createElement('div')
  
    // GER DEM CLASS & ID
    flipDiv.className = "flip"
    panelDiv.className = "panel"
    personDiv.id = `${persondata.id}`
    flipDiv.id = `${persondata.id}-flip`
    panelDiv.id = `${persondata.id}-panel`
  
    
    flipDiv.innerText = `${persondata.firstname}` +' '+ `${persondata.lastname}`
  
    // LÄGGER TILL I DOM:EN
    var currentDiv = document.getElementById('persons');
    currentDiv.appendChild(personDiv)
    personDiv.appendChild(flipDiv)
    personDiv.appendChild(panelDiv)
  }
 function writeInPanel() {
    idElement = document.createElement("p")
    idElement.innerText = `Id: ${persondata.personid}`
  
    emailElement = document.createElement("p")
    emailElement.innerText = `E-mail: ${persondata.email}`
    emailElement.id = `${persondata.id}-email`
  
    phoneElement = document.createElement("p")
    phoneElement.innerText = `Phone: ${persondata.phone}`
    phoneElement.id = `${persondata.id}-phone`
  
    streetElement = document.createElement("p")
    streetElement.innerText = ` ${persondata.street}`
    streetElement.id = `${persondata.id}-street`
  
    postcodeElement = document.createElement("p")
    postcodeElement.innerText = `  ${persondata.postcode}`
    postcodeElement.id = `${persondata.id}-postcode`
  
    cityElement = document.createElement("p")
    cityElement.innerText = ` ${persondata.city}`
    cityElement.id = `${persondata.id}-city`
    // ,street,postcode,city
  
    panelDiv.appendChild(idElement)
    panelDiv.appendChild(emailElement)
    panelDiv.appendChild(phoneElement)
    panelDiv.appendChild(streetElement)
    panelDiv.appendChild(postcodeElement)
    panelDiv.appendChild(cityElement)
  }