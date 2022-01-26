import './App.css';
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <Card bankName={"Big Bank, Inc."} creditcardNumber={"1234 5678 8765 4321"} expirationDate={"08/19"} personName ="Cardholder Name"/>

    </div>
  );
}

export default App;
