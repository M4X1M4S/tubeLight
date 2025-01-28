import Body from "./components/Body";
import Head from "./components/Head";
import React from "react";
import Sidebar from "./components/Sidebar";
import { Provider } from "react-redux";
import { store } from "./Utils/store";


const App=()=> {
  return (
    <Provider store={store}>
      <div>
    <Head/>
    <Body/>
    </div>
    </Provider>
  );
}

export default App;
