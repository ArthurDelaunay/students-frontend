import { BrowserRouter, Routes, Route } from "react-router-dom"
import Form from "./pages/Form"
import Success from "./pages/Success"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/success/:name" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
