function deleteUser(i){//For Deletin the data
    console.log("Deletecalled "+i) //so we hve to use Filter
   users=users.filter((usr,index)=>i!==index)
    localStorage.setItem("myuser",JSON.stringify(users));
    displayUsers(users);
    
}