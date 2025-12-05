import styles from "./style.module.css"
import { MdDelete } from "react-icons/md"
import { FaEdit } from "react-icons/fa"
import { MdOutlineExitToApp } from "react-icons/md"
import { useCategories } from "../../hooks/useCategories"
import authService from "../../api/authService"


export const CategoriesPage = () => {

  const { categories, loading, error } = useCategories();

  const handleButtonClick = () => {
    authService.logout();
  }

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return (
    <>
      <div className={styles.page}>
        <h1>Категории</h1>
        <div className={styles.main}>
          <div className={styles.part}>
            <div className={styles.left_title}>
              <h1>Расходы</h1>
            </div>
            <div className={styles.add}>
              <input type="text" className={styles.input} />
              <button className={styles.left_btn}>Добавить</button>
            </div>
            <div className={styles.scroll}>
              {categories.expenses.map((category, index) => (
                <div key={index} className={styles.category}>
                  <h2>{category}</h2>
                  <button className={styles.category_button}>
                    <FaEdit size={30} />
                  </button>
                  <button className={styles.category_button}>
                    <MdDelete size={30} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.part}>
            <div className={styles.right_title}>
              <h1>Расходы</h1>
            </div>
            <div className={styles.add}>
              <input type="text" className={styles.input} />
              <button className={styles.right_btn}>Добавить</button>
            </div>
            <div className={styles.scroll}>
              {categories.incomes.map((category, index) => (
                <div key={index} className={styles.category}>
                  <h2>{category}</h2>
                  <button className={styles.category_button}>
                    <FaEdit size={30} />
                  </button>
                  <button className={styles.category_button}>
                    <MdDelete size={30} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
      <button className={styles.btn_exit} onClick={handleButtonClick}>
        <MdOutlineExitToApp size={40} />
      </button>
    </>
  )
}
