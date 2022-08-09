import { useParams, Link } from "react-router-dom"

const Success = () => {
  const params = useParams()

  return (
    <main>
      <h1>Success</h1>
      <p>You added well {params.name}</p>

      <Link to="/">
        <button>Return Home</button>
      </Link>
    </main>
  )
}

export default Success
