import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  // new Array(anecdotes.length) crea un array de igual tamaño al array "anecdotes", lo llena de 0 con fill.(0)
  // y el resultado de esto se pasa como argumento al hook 'useState', que crea una variable de estado llamada 'votes'
  // y le asigna el array de 0 como valor inicial.
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  // guardo en newAnecdote un numero random que tenga como numero maximo el numero de longitud de la misma array,
  // para seleccionar en el indice del array de anecdotas una anecdota,
  // actualizo el estado selected con setSelected. 
  const selectRandomAnecdote = () => {
    const newAnecdote = Math.floor(Math.random() * anecdotes.length);
    setSelected(newAnecdote);
  }

  // guardo en newVotes lo que habia en el estado votes, se incrementa el contador de votos correspondiente a la anecdota actual
  // y se actualiza el estado votes con setVotes.
  const voteForAnecdote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  }

  const maxVoted = votes.reduce((acc, val) => val > acc ? val : acc, 0);

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <button onClick={voteForAnecdote}>Vote</button>
      <button onClick={selectRandomAnecdote}>New Anecdote</button>
      <h2>Anecdote with most votes</h2>
      {anecdotes[votes.indexOf(maxVoted)]}
      <p>has {maxVoted} votes</p>
    </div>
  )
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)