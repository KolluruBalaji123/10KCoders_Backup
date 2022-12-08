function deleteUser(i){
    
    
    users =users.filter((usr,index)=>i !==index);
    localStorage.setItem("mydata",JSON.stringify(users));
    displayUsers(users)
}
