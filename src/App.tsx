import { HomePage } from "./components/HomePage"
import { Single } from "./components/Single"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news/:id" element={<Single />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
