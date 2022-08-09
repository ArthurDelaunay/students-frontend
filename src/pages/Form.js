import { Navigate } from "react-router-dom"
import { useState } from "react"

const Form = () => {
  // states
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [studentName, setStudentName] = useState("")
  // methodes

  const handlerSubmitStudent = async (e) => {
    e.preventDefault()
    const student = {
      name: e.target.firstChild.value,
    }
    const request = await fetch("http://localhost:5000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    })
    const status = request.status
    if (status === 200) {
      setStudentName(student.name)
      setIsSubmitted(true)
    } else if (status === 409) {
      alert("This Student already exist")
      e.target.firstChild.value = ""
    }
  }

  return (
    <main>
      <h1>Add a student to the List</h1>
      {isSubmitted && <Navigate to={`/success/${studentName}`} />}
      <form action="" onSubmit={handlerSubmitStudent}>
        <input type="text" />
        <button type="submit">Add</button>
      </form>
    </main>
  )
}

export default Form
