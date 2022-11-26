function editUser(i){
    var newDetails=details[i]
    gIndex=i
  
    for(a in newDetails){
    document.getElementById(a).value=newDetails[a]
    }
    document.getElementById("UpdateUserBtn").style.display="block"
    document.getElementById("AddUserBtn").style.display="none"


}
// var Detail=readUserFromForm();

function UpdateUser(){
    var Detail=ReadUserFromform();
    details[gIndex]=Detail;
    localStorage.setItem("User",JSON.stringify(details))
    DisplayUser(details)
    clearForm();

    document.getElementById("UpdateUserBtn").style.display="none"
    document.getElementById("AddUserBtn").style.display="block"


}