import { Component } from "react";

class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myAddress: {
        id: "",
        street: "",
        empty: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
      },
      allAdress: [],
      editIndex:null,
    };
    this.getData=this.getData.bind(this)
  }
  handleChange = (e) => {
    var newAddress = { ...this.state.myAddress };
    newAddress[e.target.name] = e.target.value;
    this.setState({ myAddress: newAddress });
  };
 async getData  ()  {
    // let data = fetch("http://localhost:3201/Address")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((response) => {
    //     this.setState({ allAdress: data });
    //   });
    let data= await (await fetch("http://localhost:3201/Address")).json();
    this.setState({allAdress:data})

  };
  addAddress = () => {
    fetch("http://localhost:3201/Address", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(this.state.myAddress),
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        this.getData();
      });
      this.clearForm();
  };
  deleteAddress=(usr)=>{
    fetch("http://localhost:3201/Address/"+usr.id,{
        method:"DELETE",
    }).then((res)=>{
        this.getData();

    })

  }
  clearForm=()=>{
   var clean={
    id: "",
    street: "",
    empty: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",

    }
    this.setState({myAddress:clean})
  }
  editAddress=(usr ,i)=>{
    this.setState({myAddress:usr, editIndex:i})

  }
  UpdateAddress=()=>{
    fetch("http://localhost:3201/Address/"+this.state.myAddress.id,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.myAddress)

    }).then((res)=>{
        this.getData();
    });
    this.setState({editIndex:null})
    this.clearForm();

  }

  render() {
    const { id, street, empty, city, state, zipcode, country } =
      this.state.myAddress;
    return (
      <div>
        <form>
          <label htmlFor="">Id</label>
          <input
            type="text"
            name="id"
            value={id}
            disabled
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">Street</label>
          <input
            type="text"
            name="street"
            value={street}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">Empty</label>
          <input
            type="text"
            name="empty"
            value={empty}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">city</label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">State</label>
          <input
            type="text"
            name="state"
            value={state}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">Zipcode</label>
          <input
            type="number"
            name="zipcode"
            value={zipcode}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">Country</label>
          <input
            type="text"
            name="country"
            value={country}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <br />
          {this.state.editIndex !==null ?<button
            type="button"
            onClick={this.UpdateAddress}
            className="btn btn-primary"
          >
            UpdateAddress
          </button>:<button
            type="button"
            onClick={this.addAddress}
            className="btn btn-secondary"
          >
            AddAddress
          </button>}
          {/* <button
            type="button"
            onClick={this.addAddress}
            className="btn btn-primary"
          >
            AddAddress
          </button>
          <button
            type="button"
            onClick={this.UpdateAddress}
            className="btn btn-primary"
          >
            UpdateAddress
          </button> */}
        </form>
        <hr />
        <table className="table  mt-3">
          <thead>
            <tr>
              <th>id</th>
              <th>Street</th>
              <th>Empty</th>
              <th>city</th>
              <th>state</th>
              <th>zipcode</th>
              <th>country</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {this.state.allAdress.map((usr,i)=> <tr>
          <td>{usr.id}</td>
          <td>{usr.street}</td>
                <td>{usr.empty}</td>
                <td>{usr.city}</td>
                <td>{usr.state}</td>
                <td>{usr.zipcode}</td>
                <td>{usr.country}</td>
                <td>
                    <button type="button" className="btn btn-warning" onClick={()=>{this.editAddress(usr,i)}}>Edit</button>
                </td>
                <td>
                    <button type="button" className="btn btn-danger" onClick={()=>{this.deleteAddress(usr)}}>Delete</button>
                </td>


          </tr>)}
          
          </tbody>
        </table>
      </div>
    );
  }
  async  componentDidMount() {
    let data= await (await fetch("http://localhost:3201/Address")).json();
    this.setState({allAdress:data})

    // let data = fetch("http://localhost:3201/Address")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((response) => {
    //     this.setState({ allAdress: data });
    //   });
  }
}
export default AddressForm;
