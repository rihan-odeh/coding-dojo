import React, {Component} from "react";
class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state={
            Age: this.props.age}
        }
    
  

   IncreaseAge = (e) =>{
   this.setState({Age:this.state.Age+1});

}
   render(){
      return(
          <>
          <div>
             <h1>{this.props.firstName} , {this.props.lastName} </h1> 
             <h5>Age: {this.state.Age} </h5>
             <h5>Hair Color: {this.props.hairColor} </h5>
             <button onClick={this.IncreaseAge}>Birthday of {this.props.firstName} {this.props.lastName}</button>
          </div>
          </>
      );
   } 
}
export default PersonCard