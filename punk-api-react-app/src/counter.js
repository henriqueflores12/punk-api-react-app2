import React from "react";


class counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }
   
    thumbsUpOnClick = () => {
        this.setState({
           count: this.state.count +1
        });

    }
    
   

    render =()=> {
        return (
            <div>
            <div>Thumbs Up: {this.state.count}</div>            
            <button onClick={this.thumbsUpOnClick}>👍</button>
            </div>
        )
    }
}


export default counter;