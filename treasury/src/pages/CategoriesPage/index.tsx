import styles from "./style.module.css"
import { MdDelete } from "react-icons/md"
import { FaEdit } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { MdOutlineExitToApp } from "react-icons/md"

interface ListItem {
  id: number
  title: string
  summ: string
}

export const CategoriesPage = () => {
  const items: ListItem[] = [
    { id: 1, title: "Интернет", summ: "1800.00" },
    { id: 2, title: "Интернет", summ: "1500.00" },
    { id: 3, title: "Интернет", summ: "10000.00" },
    { id: 4, title: "Интернет", summ: "10000.00" },
    { id: 5, title: "Интернет", summ: "10000.00" },
    { id: 6, title: "Интернет", summ: "10000.00" },
    { id: 7, title: "Интернет", summ: "10000.00" },
    { id: 8, title: "Интернет", summ: "10000.00" },
  ]

  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate("/welcome")
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
              {items.map((item) => (
                <div key={item.id} className={styles.category}>
                  <h2>{item.title}</h2>
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
              {items.map((item) => (
                <div key={item.id} className={styles.category}>
                  <h2>{item.title}</h2>
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
