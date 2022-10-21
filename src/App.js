import classes from "./App.module.css"
import Cards from "./components/Cards";
import Checkout from "./components/Checkout";

function App() {
  
  return (
    <main className={classes.main}>
      <Cards/> 
      <div className={classes.interactiveBox}>
     <Checkout/> 
     </div>
    </main>
  );
}


export default App;

