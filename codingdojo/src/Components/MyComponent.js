import React, {Component} from "react";

   
class MyComponent extends Component{
    constructor(props){
        super(props); 
        this.state={
            message:"Welcome"
        }
    }
    logout = (e) =>{
        this.setState({message:"GoodBye "});
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.logout}>Leave</button>
                <h1>
                    { this.props.header }
                </h1>
                { this.props.children }

                <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
            </div>
        );
    }
}
export default MyComponent
/* App Class

*/