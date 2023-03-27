import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App.tsx";


//import reportWebVitals from "./reportWebVitals";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

     <App />

  </React.StrictMode>
);
