
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './component/CoffeeCard'
import { useState } from 'react'

function App() {
    const loadedCoffees = useLoaderData()
    const [coffees, setCoffees]=useState(loadedCoffees);

  return (
    <>
      <h1 className='text-5xl text-purple-500'>Hot Hot Coll Coffee {coffees.length}</h1>
    {
      coffees.map(Acoffee => <CoffeeCard 
        key={Acoffee._id} 
        Acoffee={Acoffee}
        coffees={coffees}
        setCoffees={setCoffees}
        ></CoffeeCard>)
    }
    </>
  )
}

export default App
