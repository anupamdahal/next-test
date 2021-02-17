import { Toolbar } from "../../components/Toolbar"
import styles from "../../styles/Home.module.css"

export const employees = () => {
  return(
    <div className='page-container'>
      <Toolbar />
      <div className={styles.main}>
        <h1> Nothing Here!</h1>
        <h3> Please go to specific employee directory to see the classified employee data</h3>
      </div>
    </div>
  )
}

export default employees