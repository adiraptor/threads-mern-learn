import { Container } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <Container maxWidth="600px">
      <Routes>
        <Route path="/:username" element={<UserPage />}/>
      </Routes>
    </Container>
  )
}

export default App
