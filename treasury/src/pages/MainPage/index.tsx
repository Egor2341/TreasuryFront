import styles from "./style.module.css"
import { useNavigate } from "react-router-dom"
import { MdOutlineExitToApp, MdCategory } from "react-icons/md"
import { GiReceiveMoney, GiExpense } from "react-icons/gi"
import { FaPiggyBank } from "react-icons/fa"

export const MainPage = () => {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate("/welcome")
  }
  return (
    <>
      <div className={styles.main}>
        <div className={styles.item1}>
          <GiExpense size={80} />

          <h1>Расходы</h1>
          <h3>Контролируйте свои расходы</h3>
          <button className={styles.btn1}>Посмотреть</button>
        </div>

        <div className={styles.item2}>
          <GiReceiveMoney size={80} />
          <h1>Доходы</h1>
          <h3>Анализируйте своими доходами</h3>
          <button className={styles.btn2}>Посмотреть</button>
        </div>

        <div className={styles.item2}>
          <MdCategory size={80} />
          <h1>Категории</h1>
          <h3>Посмотрите список доступных категорий</h3>
          <button className={styles.btn2}>Посмотреть</button>
        </div>

        <div className={styles.item1}>
          <FaPiggyBank size={80} />
          <h1>Бюджеты</h1>
          <h3>Планируйте свои финансы</h3>
          <button className={styles.btn1}>Посмотреть</button>
        </div>
      </div>
      <button className={styles.btn_exit} onClick={handleButtonClick}>
        <MdOutlineExitToApp size={40} />
      </button>
    </>
  )
}
