import { Component } from "react";

class Students extends Component {
  constructor() {
    super();
    this.state = {
      showHeading: true,
      showImages: true,
      Welcome: "Hello all Welcome tto my ReactJS Training",
      studentDetails: {
        fname: "Balaji",
        lname: "Kolluru",
        email: "Balu@123.com",
      },
      Subjects: ["HTML", "CSS", "JavaScript", "Ajax", "ReactJS"],
      images: [
        "https://cdn-icons-png.flaticon.com/512/888/888859.png",
        "https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg",
        "https://www.computerhope.com/jargon/j/javascript.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      ],
    };
  }
  render() {
    return (
      <>
        <h2>Welcome to Students Components</h2>
        {this.state.showHeading && <h2>{this.state.Welcome}</h2>}
        <hr />
        <ul>
          <h2>Converting Object To Arrays</h2>
          {Object.values(this.state.studentDetails).map((val, i) => (
            <li key={i}>{val}</li>
          ))}
        </ul>
        <ul>
          <h2>THis is Subject</h2>
          {this.state.Subjects.map((val, i) => {
            return (
              <div key={i}>
                <li>{val}</li>
              </div>
            );
          })}
        </ul>
        <div>
          {/* terinary Operator */}
          {/* {this.state.showImages &&
            this.state.images.map((val, i) => (
              <img
                style={{ width: 100, height: 100 }}
                src={val}
                alt=""
                key={i}
              />
            ))} */}
            {this.state.showImages ? this.state.images.map((imgval,i)=> <img src={imgval} alt="" key={i} style={{width:100,height:100}} />):<p>there are no images</p>}
        </div>
       
      </>
    );
  }
}
export default Students;
