import { MainPage } from "./pages/MainPage"
import { LoginPage } from "./pages/LoginPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}
