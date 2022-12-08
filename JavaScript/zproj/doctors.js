fetch("http://localhost:3000/doctors")
.then((response)=>{
    return response.json();
}).then((doctors)=>{
    console.log(doctors)
    displaydoctors(doctors)
})
function displaydoctors(){
    var memberinfo=document.getElementsByClassName("member-info");
    for(const  a of memberinfo){
        console.log(a)
        var doctorheading=document.createElement("h4");
        
    }

}