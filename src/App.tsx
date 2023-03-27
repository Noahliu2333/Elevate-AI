import React from "react";
import Giphy from "./component/Giphy.tsx";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import "./App.css";


const router = createBrowserRouter([
{path:"/",element:  <Giphy />},
]);



const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
