fetch("http://localhost:3000/doctors")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    // displayAllDoctors(data);
    displayDynamicDoctors(data)
  });

function displayDynamicDoctors(data){
   data.forEach((doctor,index)=>{
    var div1 = document.createElement("div");
    div1.setAttribute("class","col-lg-6")

    var mydiv2 = document.createElement("div")
    mydiv2.setAttribute("class","member d-flex align-items-start")
    div1.appendChild(mydiv2)

    var mydiv3 = document.createElement("div");
    mydiv3.setAttribute("class","pic")
    mydiv2.appendChild(mydiv3)

    var myImge = document.createElement("img");
    myImge.setAttribute("class","img-fluid doctorImage")
    myImge.setAttribute("src","./assets/img/doctors/"+ data[index].pic+".jpg")
    mydiv3.appendChild(myImge)

    var mydiv4 = document.createElement("div");
    mydiv4.setAttribute("class","member-info")
    mydiv2.appendChild(mydiv4);

    var doctorHeading = document.createElement("h4");
    doctorHeading.innerHTML = data[index].doctorname;
    mydiv4.prepend(doctorHeading);

    var doctorPosition = document.createElement("span");
    doctorPosition.innerHTML = data[index].position;
    mydiv4.append(doctorPosition)

    var doctorDescription = document.createElement("p");
    doctorDescription.innerHTML = data[index].description;
    mydiv4.append(doctorDescription)

    var mydiv5 = document.createElement("div");
    data[index].socialIcons.forEach((val)=>{
        var anchorElement = document.createElement("a")
        anchorElement.setAttribute("href","")
        var iconElement = document.createElement('i')
        iconElement.setAttribute("class",val)
        anchorElement.appendChild(iconElement)
        mydiv5.appendChild(anchorElement)
    })
    mydiv5.setAttribute("class","social")
    mydiv4.append(mydiv5)
    document.getElementById("doctorsDetails").appendChild(div1)
   })
}

// function displayAllDoctors(data) {
//   var memberInfo = document.getElementsByClassName("member-info");
//   var socialIcons = [...document.getElementsByClassName("social")];
//   var doctorImages = [...document.getElementsByClassName("doctorImage")];
//   [...memberInfo].forEach((value, index) => {
//     var doctorHeading = document.createElement("h4");
//     doctorHeading.innerHTML = data[index].doctorname;
//     value.prepend(doctorHeading);

    // var doctorPosition = document.createElement("span");
    // doctorPosition.innerHTML = data[index].position;
//     var parentElement = socialIcons[index].parentElement;
//     parentElement.insertBefore(doctorPosition, socialIcons[index]);

    // var doctorDescription = document.createElement("p");
    // doctorDescription.innerHTML = data[index].description;
//     parentElement.insertBefore(doctorDescription, socialIcons[index]);

//     doctorImages[index].setAttribute("src","./assets/img/doctors/"+ data[index].pic+".jpg")
//   });

  //  [...memberInfo].map((value,index)=>{
  //     var doctorHeading = document.createElement("h4")
  //     doctorHeading.innerHTML = data[index].doctorname
  //     value.prepend(doctorHeading)
  // })

  //  [...memberInfo].find((value,index)=>{
  //     var doctorHeading = document.createElement("h4")
  //     doctorHeading.innerHTML = data[index].doctorname
  //     value.prepend(doctorHeading)
  // })

  //  [...memberInfo].filter((value,index)=>{
  //     var doctorHeading = document.createElement("h4")
  //     doctorHeading.innerHTML = data[index].doctorname
  //     value.prepend(doctorHeading)
  // })

  // [...memberInfo].some((value,index)=>{
  //     var doctorHeading = document.createElement("h4")
  //     doctorHeading.innerHTML = data[index].doctorname
  //     value.prepend(doctorHeading)
  // })

  // [...memberInfo].every((value,index)=>{
  //     var doctorHeading = document.createElement("h4")
  //     doctorHeading.innerHTML = data[index].doctorname
  //     value.prepend(doctorHeading)
  // })
  // [...memberInfo].reduce((value,index)=>{
  //     var doctorHeading = document.createElement("h4")
  //     doctorHeading.innerHTML = data[index].doctorname
  //     value.prepend(doctorHeading)
  // })
  // for (const a of [...memberInfo].keys()) {
  //     console.log(a)
  //     // var index = a ;
  //     var element = [...memberInfo][a]
  //     console.log(element)
  // var doctorHeading = document.createElement("h4")
  // doctorHeading.innerHTML = data[index].doctorname
  // element.prepend(doctorHeading)
  // }
//   console.log(memberInfo);
// }
