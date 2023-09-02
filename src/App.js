import "./App.css";
import Body from "./components/BodyContainer/Body";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./utility/Store/store";

function App() {
  return (
    <Provider store={store}>
    <div>
      <Header />
      <Body />
    </div>
    </Provider>
  );
}

export default App;
