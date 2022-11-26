var DetailInfo ={
    Name:"",
    UserName:"",
    Email:"",
    password:"",
    confirmpassword:"",
    message:""

};

 var details =JSON.parse(localStorage.getItem("User"))
 if(details==null){
    details=[]
 }

  
// var details=[];
var gIndex =0;

function AddUser(){
   
var Detail =  ReadUserFromform();
    details.push(Detail)
    //Storing all Details in LOcal Storage
    localStorage.setItem("User" ,JSON.stringify(details))
    DisplayUser(details);
    console.log( "Details",Detail)
    clearForm();
}
function clearForm(){
    for (a in DetailInfo){
        document.getElementById(a).value="";
    }
}
function ReadUserFromform(){
    var Detail={...DetailInfo}
    for (a in Detail){
        Detail[a]=document.getElementById(a).value;
    }
    return Detail
}



























function addUser(){
   
    var mytr=document.createElement("tr")
   
    for( a in Details){
        Details[a]=document.getElementById(a).value
        var  mytd=document.createElement("td");
        mytd.innerHTML=Details[a]
        mytr.appendChild(mytd)

      

    }
document.querySelector("tbody").appendChild(mytr)
}