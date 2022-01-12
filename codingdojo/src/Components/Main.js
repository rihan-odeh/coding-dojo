import React, {Component} from "react";

   
class Main extends Component{
 
    render(){
        return(
            <div className="main">
            
                <h1>
                    { this.props.header }
                </h1>
                { this.props.children }
            </div>
        );
    }
}
export default Main
/* App Class

*/