import styles from '../styles/Home.module.css'
import {useState} from 'react'

function  Home() {
  
    const[students, setStudents] = useState([])
    const[student, setStudent] = useState('')

    const getStudents = async () =>{
      const response = await fetch('/api/students')
      const data = await response.json()
      setStudents(data.data)
    }
    const addStudent = async () => {
      let student = prompt("Whats his full name? ")
      const response = await fetch('/api/students', {
        method: 'POST',
        body: JSON.stringify ({student}),
        headers: {
          'content-Type': 'application/json',
        },
        
      })
      const data = await response.json()
      setStudent(student)

    }


    return(
      <>
      <div className ={styles.container}>
          <h1> NEXTJS API </h1>
          <div className={styles.btns}>
              <button onClick= {addStudent}> Add Student </button>
              <button onClick={getStudents} > Show Student List </button>
          </div>
          <div className={styles.studentList}>
            {students.map((student) => {
                  return(
                    <div key={student.id}>
                     <p> id:  {student.id},   fullname :  {student.fullname}  </p>
                      </div>
                  )
                })}
          </div>

      

      </div>
      </>
      );
  }



export default Home