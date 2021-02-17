import { Toolbar } from '../components/Toolbar';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='page-container'>
      <Toolbar />
      <div className={styles.main}>
        <h1>Say Bye to Fake News!</h1>
        <h3>Get unbiased unfiltered news! We have no political inclination!</h3>
        <p>HI This is just a test</p>
      </div>
    </div>
  );
}
