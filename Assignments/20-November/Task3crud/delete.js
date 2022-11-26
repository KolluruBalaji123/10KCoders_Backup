function deleteUser(i){//For Deletin the data
    console.log("Deletecalled "+i) //so we hve to use Filter
    Address2=Address2.filter((usr,index)=>i!==index)
    localStorage.setItem("myaddress",JSON.stringify(Address2));
    displayUsers(Address2);
    
}