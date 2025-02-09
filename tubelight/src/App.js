import Body from "./components/Body";
import Head from "./components/Head";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./Utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchPage from "./components/SearchPage";

export const appRouter=createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[
    {
      path:'/',
      element:<MainContainer/>
    },
  {
    path:'/watch',
    element:<WatchPage/>
  },
  {
    path:'/search',
    element:<SearchPage/>
  }
  ]

}])
const App=()=> {
  
  return (
    <Provider store={store}>
    
    
    <Head/>
    <RouterProvider router={appRouter}/>
   
    </Provider>
  );
}

export default App;
