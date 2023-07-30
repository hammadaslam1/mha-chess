import "./App.css";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import Home from "./components/Home";
import Chess from "./components/chess/ChessTable";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        {/* <Home /> */}
        <Chess />
      </div>
    </Provider>
  );
}

export default App;
