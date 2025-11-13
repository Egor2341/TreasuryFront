import { NavLink } from "react-router-dom"
import styles from "./style.module.css"

export const RegisterPage = () => {
  return (
    <>
      <div className={styles.main}>
        <h1>Регистрация</h1>  
        <div>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input type="text" id="email" className={styles.inputField} />
        </div>
        <div>
          <label htmlFor="name" className={styles.label}>
            Имя
          </label>
          <input type="text" id="name" className={styles.inputField} />
        </div>
        <div>
          <label htmlFor="password" className={styles.label}>
            Пароль
          </label>
          <input type="text" id="password" className={styles.inputField} />
        </div>
        <button className={styles.btn}>
          Создать личный кабинет
        </button>
      </div>
    </>
  )
}
