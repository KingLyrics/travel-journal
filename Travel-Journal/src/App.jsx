import data from './data'
import Navbar from './Components/Navbar'
import Card from './Components/Card'


function App() {

  return (
    <div className='Container'>

     <Navbar/>
     <Card
      title="The Burj Khalifa"
      location="Dubai"
      googleMapsUrl="#"
      startDate="12 Jan, 2022"
      endDate="24 Jan, 2022"
      description="The Burj Khalifa, known as the Burj Dubai   prior to its inauguration in 2010, is a skyscraper in Dubai, United Arab Emirates. "
      imageUrl="./Images/Burjh1.jpg"
     />
     

    </div>
  )
}

export default App
