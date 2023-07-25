import React, { useState } from 'react';


const CardAdicionar = ({ adicionarTarefa }) => {
  const [novaTarefa, setNovaTarefa] = useState('')

  const handleInputChange = (event) => {
    setNovaTarefa(event.target.value)
  }

  const handleAdicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      adicionarTarefa(novaTarefa)
      setNovaTarefa('')
    }
  }
  return (
    <div>
      <input
        placeholder="adicionar tarefa"
        type="text"
        value={novaTarefa}
        onChange={handleInputChange}
      />
      <button onClick={handleAdicionarTarefa}>Adicionar</button>
    </div>
  )
}

export default CardAdicionar