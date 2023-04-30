import React from 'react'
import {BrowserRouter } from "react-router-dom";
import AppRouter from './Router/AppRouter';
import ProjectDetailsPage from './pages/ProjectDetailsPage'



function App() {
  return (
    <div>
    <BrowserRouter>
     <AppRouter/>
    
     </BrowserRouter>



  
     
    </div>
  );
}
export default App;
