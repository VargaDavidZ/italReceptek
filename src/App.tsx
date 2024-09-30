import { useState } from 'react'
import './App.css'
import { Fejlec } from './components/FejlecComp'
import { Recept } from './components/ReceptComp'
import { Lablec } from './components/LablecComp'


function App() {


  return (
    <>
      <Fejlec></Fejlec>

      <Recept myNum={2}  ></Recept>

      <Recept myNum={3}  ></Recept>

      <br />
      <Lablec author='Varga Dávid' timeSpent='20perc' date='2077-03-12' AI_usage='Nem használtam MI-t'   ></Lablec>


    </>
  )
}

export default App
