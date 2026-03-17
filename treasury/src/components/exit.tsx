import authService from "../api/authService"
import styles from "./exit.module.css"
import { MdOutlineExitToApp } from "react-icons/md"

export const Exit = () => {
  return (
    <button
      className={styles.btn_exit}
      onClick={() => {
        authService.logout()
      }}
    >
      <MdOutlineExitToApp size={40} />
    </button>
  )
}
