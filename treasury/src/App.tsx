import { WelcomePage } from "./pages/WelcomePage"
import { LoginPage } from "./pages/LoginPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RegisterPage } from "./pages/RegisterPage"
import { MainPage } from "./pages/MainPage"
import { ExpencesPage } from "./pages/ExpencesPage"
import { IncomesPage } from "./pages/IncomesPage"
import { BudgetsPage } from "./pages/BudgetsPage"
import { CategoriesPage } from "./pages/CategoriesPage"
import ProtectedRoute from "./security/ProtectedRoute"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/main"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/expences"
          element={
            <ProtectedRoute>
              <ExpencesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/incomes"
          element={
            <ProtectedRoute>
              <IncomesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/budgets"
          element={
            <ProtectedRoute>
              <BudgetsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/categories"
          element={
            <ProtectedRoute>
              <CategoriesPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
