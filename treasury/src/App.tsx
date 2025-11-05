import { WelcomePage } from "./pages/WelcomePage"
import { LoginPage } from "./pages/LoginPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RegisterPage } from "./pages/RegisterPage"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}
