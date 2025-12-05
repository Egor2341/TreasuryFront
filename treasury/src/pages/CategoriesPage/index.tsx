import styles from "./style.module.css"
import { MdDelete } from "react-icons/md"
import { FaEdit } from "react-icons/fa"
import { MdOutlineExitToApp } from "react-icons/md"
import { useCategories } from "../../hooks/useCategories"
import authService from "../../api/authService"
import { useEffect, useState } from "react"
import categoryService from "../../api/categoryService"

export const CategoriesPage = () => {
  const { categories, loading, error } = useCategories()
  const [ecategory, setEcategory] = useState<string>("")
  const [errorLabel, setErrorLabel] = useState<string>("")
  const [expenses, setExpenses] = useState<string[]>(categories.expenses)

  useEffect(() => {
    if (categories) {
      setExpenses(categories.expenses)
    }
  }, [categories])

  if (loading) {
    return <div>Загрузка...</div>
  }

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>
  }

  const handleAddExpenseButtonClick = async () => {
    setErrorLabel("")
    if (ecategory) {
      try {
        await categoryService.addCategory({ name: ecategory, type: "expenses" })
        window.location.href = "/categories"
      } catch (err) {
        if (err instanceof Error) {
          if (err.message.includes("422")) {
            setErrorLabel("Такая категория уже есть")
          }
        } else {
          setErrorLabel("Ошибка при попытке добавить категорию")
        }
        console.log("Error:", err)
      }
    } else {
      setErrorLabel("Нельзя добавить пустое значение")
    }
  }

  return (
    <>
      <div className={styles.page}>
        <h1>Категории</h1>
        <div style={{ color: "red" }}>{errorLabel}</div>
        <div className={styles.main}>
          <div className={styles.part}>
            <div className={styles.left_title}>
              <h1>Расходы</h1>
            </div>
            <div className={styles.add}>
              <input
                type="text"
                className={styles.input}
                value={ecategory}
                onChange={(e) => setEcategory(e.target.value)}
              />
              <button className={styles.left_btn} onClick={handleAddExpenseButtonClick}>
                Добавить
              </button>
            </div>
            <div className={styles.scroll}>
              {expenses.map((category, index) => (
                <div key={index} className={styles.category}>
                  <input
                    type="text"
                    className={styles.input}
                    value={category}
                    onChange={(e) => {
                      setExpenses([...expenses.slice(0, index), e.target.value, ...expenses.slice(index + 1)])
                    }}
                  />
                  <button
                    className={styles.category_button}
                    onClick={async () => {
                      try {
                        await categoryService.editCategory({
                          old_name: categories.expenses[index],
                          new_name: category,
                          type: "expenses",
                        })
                        window.location.href = "/categories"
                      } catch (err) {
                        setErrorLabel("Ошибка при попытке обновить категорию")
                        console.log("Error:", err)
                      }
                    }}
                  >
                    <FaEdit size={30} />
                  </button>
                  <button
                    className={styles.category_button}
                    onClick={async () => {
                      try {
                        await categoryService.deleteCategory({ name: category, type: "expenses" })
                        window.location.href = "/categories"
                      } catch (err) {
                        setErrorLabel("Ошибка при попытке удалить категорию")
                        console.log("Error:", err)
                      }
                    }}
                  >
                    <MdDelete size={30} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.part}>
            <div className={styles.right_title}>
              <h1>Доходы</h1>
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
