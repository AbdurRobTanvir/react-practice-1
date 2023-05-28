import "./App.css";
import Header from "./components/Header";
import CardLists from "./products/CardLists";
import "./assets/myStyles.css";
const App = () => {
  return (
    <div className="App">
      <Header />
      <CardLists />
    </div>
  );
};

export default App;
