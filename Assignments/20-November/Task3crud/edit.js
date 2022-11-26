function editUser(i){
    var newUser=Address2[i]
    gIndex=i
    for (a in newUser){
        document.getElementById(a).value=newUser[a];
    }
    document.getElementById("updateBtn").style.display="block"
    document.getElementById("AddressBtn").style.display="none"

}
function updateAddress(){
    var Address=ReadUserFromForm();
    Address2[gIndex]=Address;
    localStorage.setItem("mydata",JSON.stringify(Address2))
    displayUsers(Address2);
ClearForm();

    document.getElementById("updateBtn").style.display="none"
    document.getElementById("AddressBtn").style.display="block"

}