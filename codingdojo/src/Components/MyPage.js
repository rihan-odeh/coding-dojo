import React from "react";
function List(props) {
    return <li> { props.name }</li>;
  }
function MyPage(){
    
        const ListItems =[
            {id:1, name:'Travel'}, 
            {id:2, name:'Eat'},
            {id:3, name:'Be Happy'}, 
            {id:4, name:'Succeed'}
        ];
    
    return (
        <div className="App">
         <h1>Hello Dojo!</h1>
         <h3>Things in my to do list:</h3>
         <ul>
        {ListItems.map((item) => <List  key ={item.id} name={item.name} />)}
      </ul>
        </div>
      );


}

export default MyPage