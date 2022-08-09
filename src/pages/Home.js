import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const Home = () => {
  // state
  const [students, setStudents] = useState([])

  //didMount
  useEffect(() => {
    getStudents()
    // eslint-disable-next-line
  }, [])

  // methodes
  const getStudents = async () => {
    const request = await fetch("http://localhost:5000/students")
    const response = await request.json()
    setStudents(response)
  }

  return (
    <>
      <header>
        <nav>
          <Link to="/form"> Form </Link>
        </nav>
      </header>
      <main>
        <h1>List of Students</h1>
        <section>
          <ul>
            {students.map((student) => {
              return <li key={student.name}>{student.name}</li>
            })}
          </ul>
        </section>
      </main>
    </>
  )
}

export default Home
