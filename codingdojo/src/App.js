
import './App.css';
import MyPage from'./Components/MyPage.js'
import PersonCard from './Components/PersonCard';
import MyComponent from './Components/MyComponent';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';
import UseRef from './Components/UseRef';
function App() {
  return (
    <div className="App">
    <MyPage/>
    <PersonCard firstName={'Rihan'} lastName={'Odeh'} age={25} hairColor={'Brown'}/>
   < PersonCard firstName={'Tamer'} lastName={'Mansour'} age={20} hairColor={'Brown'}/>
   <PersonCard firstName={'Mohammad'} lastName={'Husseini'} age={23} hairColor={'Brown'}/>
   < PersonCard firstName={'Ward'} lastName={'Qweida'} age={20} hairColor={'Brown'}/>
   <Header />
   <Navigation />
   <Main  header={ "Header Prop" }>
   
            <SubContents />
            <SubContents />
            <SubContents />
            <Advertisement />
        </Main>
   
      

   


    </div>
  );
}

export default App;
