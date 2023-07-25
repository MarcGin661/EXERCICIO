import { useState } from 'react'
import CardAdicionar from './CardAdicionar'
import './App.css'

const App = () => {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (novaTarefa) => {
    setTarefas([...tarefas, novaTarefa])
  }
  return (
    <div>
      { }
      <CardAdicionar adicionarTarefa={adicionarTarefa} />
    </div>
  )
}
function App() {
  const [count, setCount] = useState(0)
}

export default App
