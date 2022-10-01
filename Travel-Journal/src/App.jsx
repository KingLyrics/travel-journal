import data from './data'
import Navbar from './Components/Navbar'
import Card from './Components/Card'


function App() {
  const cards = data.map(card =>{
    return(
      <Card
        key={card.id}
        card={card}
      />
    )
  })

  return (
    <div className='Container'>

     <Navbar/>
     {cards}
     
     

    </div>
  )
}

export default App
