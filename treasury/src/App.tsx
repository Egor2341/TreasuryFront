import { WelcomePage } from "./pages/WelcomePage"
import { LoginPage } from "./pages/LoginPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RegisterPage } from "./pages/RegisterPage"
import { MainPage } from "./pages/MainPage"
import { ExpencesPage } from "./pages/ExpencesPage"
import { IncomesPage } from "./pages/IncomesPage"
import { BudgetsPage } from "./pages/BudgetsPage"
import { CategoriesPage } from "./pages/CategoriesPage"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/expences" element={<ExpencesPage />} />
        <Route path="/incomes" element={<IncomesPage />} />
        <Route path="/budgets" element={<BudgetsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </BrowserRouter>
  )
}
