import React from "react";

const Hoc = (Component) => {
  return class extends React.Component {
    state ={
        auth:true
    }
    render() {
      return (
        <div>
        {this.state.auth ? <Component name="my name is Balaji"/>:<h1>Plaese Login First</h1>}
        </div>
      );
    }
  };
};

export default Hoc;
