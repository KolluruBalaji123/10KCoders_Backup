function deleteUser(i){
    // console.log("deleting"+i)
    details=details.filter((usr,index)=>i!==index)
    localStorage.setItem("User",JSON.stringify(details))
    DisplayUser(details)

}