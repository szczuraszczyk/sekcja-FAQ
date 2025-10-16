import { useState } from 'react'
import './App.css'

function App() {

  const data = [
  {
    id: 1,
    question: "Jakie są główne zalety Reacta?",
    answer: "React pozwala na tworzenie reużywalnych komponentów UI, wykorzystuje Virtual DOM dla lepszej wydajności i ma ogromną społeczność oraz ekosystem."
  },
  {
    id: 2,
    question: "Czym jest JSX?",
    answer: "JSX (JavaScript XML) to rozszerzenie składni JavaScript, które pozwala pisać kod przypominający HTML bezpośrednio w plikach JavaScript. Ułatwia to tworzenie i wizualizację struktury komponentów."
  },
  {
    id: 3,
    question: "Czym różni się state od props?",
    answer: "Props (properties) są przekazywane do komponentu z zewnątrz (od rodzica) i są niemutowalne (tylko do odczytu). State to wewnętrzne dane komponentu, które mogą się zmieniać w czasie i powodować ponowne renderowanie komponentu."
  },
  {
    id: 4,
    question: "Do czego służy hook useState?",
    answer: "Hook useState pozwala na dodanie stanu do komponentów funkcyjnych. Zwraca tablicę z dwiema wartościami: aktualną wartością stanu oraz funkcją, która pozwala na jego aktualizację."
  }
];

  return (
    <>
      <h1>Sekcja FAQ</h1>

      <ol>
        <li>pytanie 1</li>
        <li>pytanie 2</li>
        <li>pytanie 3</li>
        <li>pytanie 4</li>
      </ol>
    </>
  )
}

export default App
