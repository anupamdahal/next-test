import { useRouter } from 'next/router'
import styles from '../styles/Toolbar.module.css'

export const Toolbar = () => {
  const router = useRouter()

  return(
    <div className={styles.main}>
      
      <div onClick={() =>{
        router.push('/')
      }}>
        Home
      </div>
      
      <div onClick={() =>{
        router.push('/feeds/1')
      }}>
        Feeds
      </div>
      
      <div onClick={() =>{
        router.push('/employees')
      }}>
        Employees
      </div>

      <div onClick={() =>{
        window.location.href = 'https://twitter.com/'
      }}>
        Twitter
      </div>
      
    </div>
  )
}