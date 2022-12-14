import { Component } from "react";

class Address extends Component {
  constructor() {
    super();
    this.state = {
      address: {
        street: "",
        empty: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
      },
      allAddress: [
        {
            street:"kolluru1",
            empty:"empty1",
            city:"guntur1",
            state:"ap1",
            zipcode:"522324",
            country:"India2"

        },
        {
            street:"kolluru2",
            empty:"empty2",
            city:"guntur2",
            state:"ap4",
            zipcode:"123",
            country:"India2"

        }



      ],
      editIndex:null
    };
  }
  addAddress = () => {
    // console.log (this.state.address)
    var newallAddress = [...this.state.allAddress];
    newallAddress.push(this.state.address);
    this.setState({allAddress:newallAddress});
    this.clearForm();
  };
  handleChange = (e) => {
    var newAddress = {...this.state.address};
    // console.log(e.target.name)
    // console.log(e.target.value)
    newAddress[e.target.name] = e.target.value;
    this.setState({address:newAddress});
  };
  clearForm = () => {
    var newForm = {
      street: "",
      empty: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
    };
    this.setState({ address: newForm });
  };
  editUser=(addr,i)=>{
    // console.log(addr)
    this.setState({address:addr,editIndex:i})

  }
  deleteUser=(addr)=>{
    // console.log(addr)
    var latestAddress=this.state.allAddress.filter((myaddress)=> myaddress.city !==addr.city)
    this.setState({allAddress:latestAddress})

  }
  updateAddress=()=>{
    var latestAddress=[...this.state.allAddress];
    latestAddress[this.state.editIndex]=this.state.address;
    this.setState({allAddress:latestAddress,editIndex:null})
    this.clearForm();

  }
  render() {
    const { street, empty, city, state, zipcode, country } = this.state.address;
    return (
      <div>
        <form>
          <h2>Address</h2>
          <hr />
          <label htmlFor="">Street</label>
          <input
            type="text"
            name="street"
            value={street}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">empty</label>
          <input
            type="text"
            name="empty"
            value={empty}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">City,State</label>

          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <input
            type="text"
            name="state"
            value={state}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">zipcode</label>
          <input
            type="number"
            name="zipcode"
            value={zipcode}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
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
          />
          <br />
          <br />
          {this.state.editIndex !==null? <button
            type="button"
            className="btn btn-secondary"
            onClick={this.updateAddress}
          >
        UpdateAddress
          </button>:<button
            type="button"
            className="btn btn-primary"
            onClick={this.addAddress}
          >
            Ok
          </button>}
          {/* <button
            type="button"
            className="btn btn-primary"
            onClick={this.addAddress}
          >
            Ok
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.updateAddress}
          >
        UpdateAddress
          </button> */}
        </form>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th>street</th>
              <th>Empty</th>
              <th>city</th>
              <th>state</th>
              <th>zipcode</th>
              <th>Country</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allAddress.map((addr,i) => (
              <tr key={i}>
                <td>{addr.street}</td>
                <td>{addr.empty}</td>
                <td>{addr.city}</td>
                <td>{addr.state}</td>
                <td>{addr.zipcode}</td>
                <td>{addr.country}</td>
                <td>
                    <button className="btn btn-warning" onClick={()=>{this.editUser(addr,i)}}>Edit</button>
                </td>
                <td>
                    <button className="btn btn-danger"onClick={()=>{this.deleteUser(addr)}} >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Address;
