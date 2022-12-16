import { Component } from "react";

export default class ImageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
      
          <img
            src="https://filmfare.wwmindia.com/content/2022/may/telugufilmfraternitycomestogethertowishjrntrontheoccasionofhisbirthday41653046470.jpg"
            alt=""
            style={{ width: 100 }}
          />
      
      </div>
    );
  }
  componentWillUnmount(){
    console.log("this component  is going to remove from DOM ")
  }

 
}
