
import './App.css';
import PersonCard from './MyComponent';
function App() {
  return (
 <div>
   <PersonCard firstName="Rihan" lastName="Odeh" age={ 25 } hairColor="Brown" />
   < PersonCard firstName={'Tamer'} lastName={'Mansour'} age={20} hairColor={'Brown'}/>
   <PersonCard firstName={'Mohammad'} lastName={'Husseini'} age={23} hairColor={'Brown'}/>
   < PersonCard firstName={'Ward'} lastName={'Oweida'} age={20} hairColor={'Brown'}/>
    </div>
  );
}

export default App;
