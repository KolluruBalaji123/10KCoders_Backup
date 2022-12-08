function editUser(i) {
    var newuser=users[i]
    gIndex=i

    for (a in newuser){
        if(a!=="status" && a!=="subjects"){
            document.getElementById(a).value=newuser[a]
        }else if(a== "status"){
            allStatus.forEach((status)=>{
                if(status.value==newuser[a]){
                    status.checked=true
                }
            })
        }else if( a == "subjects"){
            allCheckBoxes.forEach((cb)=>{
                var check=newuser[a].find((subject)=> subject === cb.value)
                if(check){
                    cb.checked=true
                }
            })
        }

    }
    document.getElementById("UpdateUserBtn").style.display="block"
    document.getElementById("addUserBtn").style.display="none"

}
function updateUser(){
    var user=readUserFromForm()
    users[gIndex]=user
    localStorage.setItem("mydata",JSON.stringify(users))
    displayUsers(users)
    clearForm();

document.getElementById("UpdateUserBtn").style.display="none"
    document.getElementById("addUserBtn").style.display="block"

}