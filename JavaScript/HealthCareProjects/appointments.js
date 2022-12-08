function makeAppointment() {
   fetch("http://localhost:3000/appointments",{
    method:"POST",
    body:JSON.stringify(captureAppointment()),
    headers:{
        "Content-Type":"application/json"
    }
   }).then((res)=> res.json())
   .then((response)=>{
    console.log("Appointment Posted Successfully")
   })
}

function captureAppointment(){
    var appointment = {
        name:"",
        email:"",
        phone:"",
        date:"",
        doctor:"",
        department:"",
        description:""
    }

    for(a in appointment){
        appointment[a]=document.getElementById(a).value
    }
    return appointment
}