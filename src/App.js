import "./App.css";

//Components
import Body from "./components/BodyContainer/Body";
import Header from "./components/Header/Header";

//Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Redux
import { Provider } from "react-redux";
import store from "./utility/Store/store";
import RightSide from "./components/BodyContainer/RightSide";
import WatchComponent from "./components/WatchContainer/WatchComponent";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<RightSide />} />
            <Route path="/watch" element={<WatchComponent/>}/>
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
