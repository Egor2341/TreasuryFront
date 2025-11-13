import styles from "./style.module.css"
import React, { useState } from "react"
import { FaEdit } from "react-icons/fa"
import { MdOutlineExitToApp, MdDelete } from "react-icons/md"
import { useNavigate } from "react-router-dom"

interface ListItem {
  id: number
  title: string
  summ: string 
}

export const ExpencesPage = () => {
  const searchResult = "18000.00"
  const total = "100000.00"

  const [value, setValue] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (/^\d*\.?\d{0,2}$/.test(value) || value === "") {
      setValue(value)
    }
  }

  const items: ListItem[] = [
    { id: 1, title: "Продукты", summ: "1800.00" },
    { id: 2, title: "Интернет", summ: "1500.00" },
    { id: 3, title: "Аренда", summ: "10000.00" },
  ]

  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate("/welcome")
  }

  return (
    <>
      <div className={styles.page}>
        <h1>Расходы</h1>
        <div className={styles.main}>
          <div className={styles.search}>
            <h1>Поиск по категории</h1>

            <select name="selectedCategory" className={styles.category_list}>
              <option value="food">Питание</option>
              <option value="energy">Электроэнергия</option>
              <option value="internet">Интернет</option>
            </select>

            <h1>Период</h1>
            <div className={styles.period}>
              <div className={styles.periodpart}>
                <h2>Год</h2>
                <select name="selectedCategory" className={styles.list}>
                  <option value="year">2025</option>
                </select>
              </div>
              <div>
                <h2>Месяц</h2>
                <select name="selectedCategory" className={styles.list}>
                  <option value="month">Все</option>
                </select>
              </div>
            </div>
            <h2>Результат: {searchResult}</h2>
          </div>

          <div className={styles.info}>
            <div className={styles.add}>
              <select name="selectedCategory" className={styles.list}>
                <option value="category">Интернет</option>
              </select>
              <input type="text" value={value} onChange={handleChange} placeholder="0.00" className={styles.input} />
              <button className={styles.btn}>Добавить</button>
            </div>
            <div className={styles.total}>
              <h1>Расходы за месяц</h1>
              <h1>{total}</h1>
            </div>
            {items.map((item) => (
              <div key={item.id} className={styles.category}>
                <h1>{item.title}</h1>
                <input
                  type="text"
                  value={value}
                  onChange={handleChange}
                  placeholder={item.summ}
                  className={styles.input}
                  disabled={true}
                />
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
      <button className={styles.btn_exit} onClick={handleButtonClick}>
        <MdOutlineExitToApp size={40} />
      </button>
    </>
  )
}
