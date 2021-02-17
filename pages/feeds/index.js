import { Toolbar } from "../../components/Toolbar"
import styles from "../../styles/Home.module.css"

export const Feeds = () => {
  return(
    <div className='page-container'>
      <Toolbar />
      <div className={styles.main}>
        <h1> Nothing Here!</h1>
        <h3> Please go to specific feed id to see the classified news</h3>
      </div>
    </div>
  )
}

export default Feeds