import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { BrowserRouter, HashRouter } from "react-router-dom";
import { AppRouter } from './router/AppRouter'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter basename='psa-new-calculator'>
      <AppRouter />
    </BrowserRouter>
  // </React.StrictMode>,
)
