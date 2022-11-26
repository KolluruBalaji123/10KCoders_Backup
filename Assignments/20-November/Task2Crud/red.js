function DisplayUser(details){
    document.querySelector("tbody").innerHTML="";
    details.forEach((myuser,i)=>{
        var mytr=document.createElement("tr");
        for( a in myuser){
            var mytd =document.createElement("td");
            mytd.innerHTML=myuser[a];
            mytr.appendChild(mytd)
        }
        
        var editTd = document.createElement("td");
        var editBtn = document.createElement("button");
        editBtn.innerHTML = "EDIT";
       editBtn.setAttribute("onclick","editUser("+ i +")");
        editTd.appendChild(editBtn);
        mytr.appendChild(editTd);

        var deleteTd = document.createElement("td");
        var deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("onclick", "deleteUser(" + i + ")");
        deleteBtn.innerHTML = "DELETE";
        deleteTd.appendChild(deleteBtn)
        mytr.appendChild(deleteTd);

        document.querySelector("tbody").appendChild(mytr)
    })
    
}
DisplayUser(details)
