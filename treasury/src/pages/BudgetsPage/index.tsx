import styles from "./style.module.css"
import React, { useState } from "react"
import { FaEdit } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { MdOutlineExitToApp} from "react-icons/md"

interface ListItem {
  id: number
  title: string
  summ: string
}

export const BudgetsPage = () => {
  const date = "Ноябрь 2025"
  const summ = "4500.00"

  const [value, setValue] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (/^\d*\.?\d{0,2}$/.test(value) || value === "") {
      setValue(value)
    }
  }

  const items: ListItem[] = [
    { id: 1, title: "Ноябрь 2025", summ: "1800.00" },
    { id: 2, title: "Ноябрь 2025", summ: "1500.00" },
    { id: 3, title: "Ноябрь 2025", summ: "10000.00" },
    { id: 4, title: "Ноябрь 2025", summ: "10000.00" },
    { id: 5, title: "Ноябрь 2025", summ: "10000.00" },
    { id: 6, title: "Ноябрь 2025", summ: "10000.00" },
    { id: 7, title: "Ноябрь 2025", summ: "10000.00" },
    { id: 8, title: "Ноябрь 2025", summ: "10000.00" }
  ]

  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate("/welcome")
  }

  return (
    <>
    <div className={styles.page}>
      <h1>Бюджет</h1>
      <div className={styles.main}>
        <div className={styles.part}>
          <h2>Реальный бюджет</h2>
          <div className={styles.left_total}>
            <div className={styles.part_total}>
              <h2>{date}</h2>
              <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder={summ}
                className={styles.input}
                disabled={true}
              />
            </div>
            <div className={styles.part_total}>
              <h2>Редактировать</h2>
              <button className={styles.left_btn}>
                <FaEdit size={30} />
              </button>
            </div>
          </div>
          <div className={styles.year}>
            <h2>Предыдущие месяцы</h2>
            <h2>Год</h2>
            <select name="selectedYear" className={styles.list}>
              <option value="year">2025</option>
            </select>
          </div>
          <div className={styles.scroll}>
            {items.map((item) => (
              <div key={item.id} className={styles.category}>
                <h2>{item.title}</h2>
                <h2>{item.summ}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.part}>
        <h2>Теоретический бюджет</h2>
          <div className={styles.right_total}>
            <div className={styles.part_total}>
              <h2>{date}</h2>
              <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder={summ}
                className={styles.input}
                disabled={true}
              />
            </div>
            <div className={styles.part_total}>
              <h2>Редактировать</h2>
              <button className={styles.right_btn}>
                <FaEdit size={30} />
              </button>
            </div>
          </div>
          <div className={styles.year}>
            <h2>Предыдущие месяцы</h2>
            <h2>Год</h2>
            <select name="selectedYear" className={styles.list}>
              <option value="year">2025</option>
            </select>
          </div>
          <div className={styles.scroll}>
            {items.map((item) => (
              <div key={item.id} className={styles.category}>
                <h2>{item.title}</h2>
                <h2>{item.summ}</h2>
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
