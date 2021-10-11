import NavBar from "./Components/NavBar";
import './App.css';
import ItemCount from "./Components/ItemCount";


 function App() {

  

 
  return (
    <div className="App">
      <section>
        <NavBar  />
      </section>
      <ItemCount value={0}/>
      <section >

       
      </section>

    </div>
  );
}

export default App;
