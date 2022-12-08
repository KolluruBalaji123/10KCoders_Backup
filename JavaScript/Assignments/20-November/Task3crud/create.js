var AddressInfo={//Creating Object here
    street:"",
    empty:"",
    city:"",
    state:"",
    zip:"",
    country:""
    
}
var Address2=JSON.parse(localStorage.getItem("myaddress"));
if(Address2==null){
    Address2=[];
}
var gIndex=0;
//var Address2=[];//taking an empty array
function addAddress(){
    var Address= ReadUserFromForm();
  
    Address2.push(Address)//push the Object into the array
    //Storing all users in the local storage
    localStorage.setItem("myaddress",JSON.stringify(Address2))
    displayUsers(Address2)//It will display the added and current data
    console.log("Address",Address)
    console.log("Address2",Address2)
    ClearForm();
}
function ClearForm(){
    for( a in AddressInfo){
        document.getElementById(a).value=""//it will caear the form once the form is clicked 
    }
}

// Read User froim Form
function ReadUserFromForm(){
    var Address={...AddressInfo}
for(a in Address){
    Address[a]=document.getElementById(a).value
}
return Address;
}