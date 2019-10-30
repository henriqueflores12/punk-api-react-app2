import React from "react";
class Comments extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: "",
        items: []
      };
    }
    //  toggle=()=>{
    //    this.setState({isOn: !this.state.isOn});
    //  }
  
    inputUpDate = event => {
      this.setState({ input: event.target.value });
    };
  
    formSubmit = event => {
      console.log("***this is state***", this.state.items);
      event.preventDefault();
      this.setState({
        items: [...this.state.items, this.state.input]
      });
    };
  
    render() {
      console.log("***this is state***", this.state.items);
  
      return (
        <div className="comments">
         
            <h3>if you would like to leave some comments</h3>
  
            <form onSubmit={this.formSubmit}>
              <input value={this.state.input} onChange={this.inputUpDate} />
              <button>post comments</button>
            </form>
            <ul>
              {this.state.items.map((items, index) => {
                return <li key={index}>{this.state.items[index]}</li>;
              })}
            </ul>
          
        </div>
      );
    }
  }
  
  export default Comments;