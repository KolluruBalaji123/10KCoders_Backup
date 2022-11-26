function editUser(i){
    var newUser=users[i]
    gIndex=i
    for (a in newUser){
        document.getElementById(a).value=newUser[a];
    }
    document.getElementById("updateBtn").style.display="block"
    document.getElementById("AddressBtn").style.display="none"

}
function updateAddress(){
    var user=ReadUserFromForm();
    users[gIndex]=user;
    localStorage.setItem("mydata",JSON.stringify(users))
    displayUsers(users);
ClearForm();

    document.getElementById("updateBtn").style.display="none"
    document.getElementById("AddressBtn").style.display="block"

}