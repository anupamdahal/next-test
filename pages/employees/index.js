import { Toolbar } from "../../components/Toolbar"
import styles from "../../styles/Employee.module.css"
import employeesRecord from '../../public/database/employees.json'
import { useRouter } from "next/router"

export const employees = ({employeeList}) => {

  const router = useRouter()

  return(
    <div className='page-container'>
      <Toolbar />
      <div className={styles.main}>
        {
          employeeList.map((name, index) => {
            return(
              <div
                className={styles.employeeNameCard}
                key={index}
                onClick={() => {
                  router.push(`/employees/${name}`)
                }}
              >
                <div
                  className={styles.employeeName}
                >
                  {name}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export const getStaticProps =  async () => {

  const employeeList = Object.keys(employeesRecord);

  return {
    props: {
      employeeList
    }
  }
}

export default employees