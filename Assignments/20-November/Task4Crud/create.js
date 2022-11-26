
var userInfo={
    firstName:"",
    LastName:"",
    date:"",
    email:"",
    mobile:""
}


var users=JSON.parse(localStorage.getItem("myuser"));
if(users==null){
    users=[];
}
var gIndex=0;
//var Address2=[];//taking an empty array
function AddUser(){
    var user= ReadUserFromForm();
  
    users.push(user)//push the Object into the array
    //Storing all users in the local storage
    localStorage.setItem("myuser",JSON.stringify(users))
    displayUsers(users)//It will display the added and current data
    console.log("user",user)
    console.log("Address2",users)
    ClearForm();
}
function ClearForm(){
    for( a in userInfo){
        document.getElementById(a).value=""//it will caear the form once the form is clicked 
    }
}

// Read User froim Form
function ReadUserFromForm(){
    var user={...userInfo}
for(a in user){
 user[a]=document.getElementById(a).value
}
return user;
}