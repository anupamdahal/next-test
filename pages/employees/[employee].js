import styles from '../../styles/Employee.module.css'
import { Toolbar } from "../../components/Toolbar"

export const employee = ({ employee }) => {
  
  const { name, image, phone, about } = employee

  return (
    <div className='page-container'>

      <Toolbar />

      <div
        className={styles.main}
      >
        <h1>
          Say hello to our valuable member
        </h1>
        
        <div
          className={styles.employeeCard}
        >
          <h3>{name}</h3>
          <img src={`http://localhost:3000/${image}`}/>
          <h4>Contact Info: {phone}</h4>
          <p>{about}</p>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps =  async ( { params } ) => {
  const employeesRecord = await fetch('http://localhost:3000/database/employees.json')
    .then (data => data.json())

  return {
    props: {
      employee: employeesRecord[params.employee]
    }
  }
}

export const getStaticPaths = async () => {
  const employeesRecord = await fetch('http://localhost:3000/database/employees.json')
    .then (data => data.json())
  
  const paths = Object.keys(employeesRecord).map(employee => {
    return { params: {
      employee
    }}
  })
  
  return {
    paths,
    fallback: false
  }
}

export default employee