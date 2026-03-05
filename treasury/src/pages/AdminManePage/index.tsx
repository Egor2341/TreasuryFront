import styles from "./style.module.css"
import { useNavigate } from "react-router-dom"
import { MdOutlineExitToApp, MdCategory } from "react-icons/md"
import { GiReceiveMoney, GiExpense } from "react-icons/gi"
import { FaPiggyBank } from "react-icons/fa"
import authService from "../../api/authService"

export const AdminMainPage = () => {
  const navigate = useNavigate()

  const handleButtonClickExpences = () => {
    navigate("/expences")
  }

  const handleButtonClickIncomes = () => {
    navigate("/incomes")
  }

  const handleButtonClickCategories = () => {
    navigate("/categories")
  }
  const handleButtonClickBudgets = () => {
    navigate("/budgets")
  }

  return (
    <>
      <div className={styles.main}>

      <div className={styles.item1}>
          <GiExpense size={80} />

          <h1>Статистика расходов</h1>
          <h3>Траты всех пользователей</h3>
          <button className={styles.btn1} onClick={handleButtonClickExpences}>
            Посмотреть{" "}
          </button>
        </div>

        <div className={styles.item2}>
          <GiReceiveMoney size={80} />
          <h1>Статистика доходов</h1>
          <h3>Доходы всех пользователей</h3>
          <button className={styles.btn2} onClick={handleButtonClickIncomes}>
            Посмотреть
          </button>
        </div>

        <div className={styles.item2}>
          <MdCategory size={80} />
          <h1>Изменить права</h1>
          <h3>Можно добавить или отнять права администратора</h3>
          <button className={styles.btn2} onClick={handleButtonClickCategories}>
            Посмотреть
          </button>
        </div>

        <div className={styles.item1}>
          <GiExpense size={80} />

          <h1>Расходы</h1>
          <h3>Контролируйте свои расходы</h3>
          <button className={styles.btn1} onClick={handleButtonClickExpences}>
            Посмотреть{" "}
          </button>
        </div>

        <div className={styles.item2}>
          <GiReceiveMoney size={80} />
          <h1>Доходы</h1>
          <h3>Анализируйте свои доходы</h3>
          <button className={styles.btn2} onClick={handleButtonClickIncomes}>
            Посмотреть
          </button>
        </div>

        <div className={styles.item2}>
          <MdCategory size={80} />
          <h1>Категории</h1>
          <h3>Посмотрите список доступных категорий</h3>
          <button className={styles.btn2} onClick={handleButtonClickCategories}>
            Посмотреть
          </button>
        </div>

        <div className={styles.item1}>
          <FaPiggyBank size={80} />
          <h1>Бюджеты</h1>
          <h3>Планируйте свои финансы</h3>
          <button className={styles.btn1} onClick={handleButtonClickBudgets}>
            Посмотреть
          </button>
        </div>

        
      </div>

      <button
        className={styles.btn_exit}
        onClick={() => {
          authService.logout()
        }}
      >
        <MdOutlineExitToApp size={40} />
      </button>
      
    </>
  )
}
