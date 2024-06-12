import { useState } from 'react'

import './App.css'
import Input from './components/Input'
import List from './components/List'

function App() {

  let [lists, setList] = useState([])
  let saveDetails = (name,age) => {
    let payload={
      name: name,
      age: age
    }
    
    setList((prev) => {
      const newList = [...prev, payload];
      console.log(newList);
      return newList;
    });
      
    }
  

  return (
    <>
      <Input saveDetails={saveDetails} />
      <List list={lists}/>
    </>
  )
}

export default App
