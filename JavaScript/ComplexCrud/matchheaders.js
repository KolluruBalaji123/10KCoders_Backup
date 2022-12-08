 async function matchheaders(){
    // fetch(" http://localhost:3000/matchHeader").then((response)=>{
    //     return response .json()
    // }).then((data)=>{
    //     console.log(data.matchId)
    //     fetch("http://localhost:3000/scoreCard/"+ data.matchId).then((matchresponse)=>{
    //         return matchresponse.json()
    //     }).then((matchData)=>{
    //         console.log(matchData)
    //     })
    // })
    var allmatchesHeaders= await(await fetch("http://localhost:3000/matchHeader")).json();
    var matchData=await(await fetch("http://localhost:3000/scoreCard/"+ allmatchesHeaders.matchId)).json();
    console.log(matchData.partnershipsData)
    displaypartnershipsdata(matchData.partnershipsData)

}
function displaypartnershipsdata(data){
    console.log(data)
    Object.values(data).forEach((info,i)=>{
        info.id=i
      
        var mytr=document.createElement("tr");
      
        var td1=document.createElement("td")
        td1.innerHTML=info.id
        var td2=document.createElement("td")
        td2.innerHTML=info.bat1Name
        var td3=document.createElement("td")
        td3.innerHTML=info.bat1Runs

        var td4=document.createElement("td")
        td4.innerHTML=info.bat1fours

        var td5=document.createElement("td")
        td5.innerHTML=info.bat1sixes
        var td6=document.createElement("td")
        td6.innerHTML= info.bat2Name
        var td7=document.createElement("td")
        td7.innerHTML=info.bat2Runs
        var td8=document.createElement("td")
        td8.innerHTML=info.bat2fours
        var td9=document.createElement("td")  
        td9.innerHTML=info.bat2Sixes
        var td10=document.createElement("td")
        td10.innerHTML=info.totalRuns


        
       mytr.appendChild(td1)
       mytr.appendChild(td2)
       mytr.appendChild(td3)
       mytr.appendChild(td4)
       mytr.appendChild(td5)
       mytr.appendChild(td6)
       mytr.appendChild(td7)
       mytr.appendChild(td8)
       mytr.appendChild(td9)
       mytr.appendChild(td10)
        document.querySelector("tbody").appendChild(mytr)
       
        console.log("my info",info)
    })
    // console.log(Object.keys(data))

}
matchheaders(); 