import { NavLink } from "react-router-dom"
import styles from "./style.module.css"

export const LoginPage = () => {
  return (
    <>
      <div className={styles.main}>
        <h1>Вход в личный кабинет</h1>  
        <div>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input type="text" id="email" className={styles.inputField} />
        </div>
        <div>
          <label htmlFor="password" className={styles.label}>
            Пароль
          </label>
          <input type="text" id="password" className={styles.inputField} />
        </div>
        <button className={styles.btn}>
          Войти
        </button>
        <span>Впервые в Соковищнице?</span>
        <NavLink to="/register" className={styles.register}>
          Создайте аккаунт
        </NavLink>
      </div>
    </>
  )
}
