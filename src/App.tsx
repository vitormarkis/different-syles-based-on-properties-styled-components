import Button from "./components/atoms/Button"

function App() {

  return (
    <div className="App">
      <h1>Compares</h1>
      <Button>Enviar</Button>
      <Button heavy>Enviar</Button>
      <Button heavy outlined>Enviar</Button>
      <Button outlined color="danger">Send</Button>
      <Button outlined color="safe">Send</Button>
    </div>
  )
}

export default App
