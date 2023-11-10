import { Navigate, Route, Routes } from "react-router-dom"
import { SenConverter } from "../pages/SenConverter"
import { App } from "../App"


export const AppRouter = () => {
  return (

  
    <Routes>
        <Route path="/sen" element={<SenConverter />} />
        <Route path="/psa" element={<App />} />
        <Route path="/*" element={<Navigate to="/psa" />} />


      </Routes>

  )
}
