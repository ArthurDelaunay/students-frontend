import { Navigate } from "react-router-dom"
import { useState } from "react"

const Form = () => {
  // states
  const [name, setName] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  // methodes

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handlerSubmitStudent = async (e) => {
    e.preventDefault()
    const student = {
      name: name,
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
      setIsSubmitted(true)
    } else if (status === 409) {
      alert("This Student already exist")
      setName("")
    }
  }

  return (
    <main>
      <h1>Add a student to the List</h1>
      {isSubmitted && <Navigate to={`/success/${name}`} />}
      <form action="" onSubmit={handlerSubmitStudent}>
        <input type="text" value={name} onChange={handleNameChange} />
        <button type="submit">Add</button>
      </form>
    </main>
  )
}

export default Form
