import { About, Client, Header, Navbar } from "./Components"
import Features from "./Components/Features"

function App() {

  return (
    <div className="App overflow-x-hidden">
      <Navbar/>
      <Header/>
      <Client/>
      <Features/>
      <About/>
    </div>
  )
}

export default App
