import React from 'react'
import hotBg from "../assests/hot.jpg"
import coldBg from "../assests/cold.jpg"
import "./weather.css"

const Weather = () => {
  return (
    <div className='weather' style={{background:`url(${coldBg})`}}>
    <div className="overlay">
        <div className="container">
            <div className="section section__inputs">
                <input type={"text"} name="city" placeholder='enter city'/>
                <button>oF</button>
            </div>
            <div className="section section__temperature">
            <div className="icon">
            <h3>London,GB</h3>
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAwFBMVEUAAADy8vHsbkzm5uXz///gaEjZZUbCwsHrVy/y9fTscVDy8/NmLyHAWT4rFA6qTzcTCQbW1tY1NTXNX0LrUSjrVSzsa0junIXul39FRUUsLCvsZUDrXTfe3t0ICAgmEgybSDJgLR+0VDpWKBwfDwo8PDxra2uCgoFzc3IRERGWlpWxurqWNBogICDrinDthmp2Nybxz8VEHxaURTDqQBPvtKPx39hfX1/wv7HvrpxUVFTx6OTx2NCmpqVmKBiNVkfNPYPNAAAB9UlEQVRoge3WaVPCMBCA4SaE0nKIxVIKBUSBlkNEVKri9f//lSnMyNFk2KTiOM6+fveZ7SZRw8AwDMMwDMMw7G92We5VzLxZ6ZXPTiR0r6p023X5/ARG36T75cs/TZz3aLrq4EeNwYXAoNTMupphGEWj5nhj5IUGL4vSihyyLjep8W8lnmO9GP31T8hO0/GNJ0VoRZOYFXYNYuduXTlC9c7YOEf2Y2xeL8oVrQ/mkMOYTdty5U7DGKUMriws+Vou1I2WwCA2a1jy73WvjEQiJBlFjjwoIwUxQoqBZ9X5T5BejvIpHgsNUmL+Y+Avl0s/SG9HeSlNMUJYoxizpNh3D4cxVZEnCWLHNiutR2LP7eBECL+R3yftxc2IzGTIzlBs3tbfSWsVhqKrmBrq4DwrnK6V+PCKkNjb20oVPMUUSnDktbiHQN/hIZxII8BnWPhgyZE317W257gHM7odRcRv+HOv7m0uJfB9hByp3ezk6r82rPUfmeuTDJIopMShRZAowI1Ib/mxeeIgoH2YYbzrIfwde378ABqCP+rgWT6hhqG8kq0SgRHtSQhxwAj40cqCTI7/MlkdMFL7jUkyfK8CHJH993C8EI5oX0f4SjJ8sKYSojfLSM0wjFD5SjorVYM/+OHU6eSgOYWoq25gGIZhGIZh2H/vC3z7JGwevSzKAAAAAElFTkSuQmCC' alt='weatherimage'/>
            <h3>Cloudy</h3>
            </div>
            <div className="temperature">
            <h1>34 oC</h1>
            </div>
            </div>
             {/* bottpmDescription */}
        </div>
    </div>
   

    </div>
  )
}

export default Weather