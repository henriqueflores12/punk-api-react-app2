import React from "react";
class ThumbsDown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }
           
    thumbsDownOnClick = () => {
        this.setState({
           count: this.state.count +1
        });

    }

    render =()=> {
        return (
            <div>  
            <button onClick={this.thumbsDownOnClick}>👎</button>          
            <div>Thumbs Down: {this.state.count}</div>
            </div>
        )
    }
}


export default ThumbsDown;