
import './App.css'
import Navbar from './components/Navbar'
import Chart from './linechart/Chart'
import LineChart from './linechart/LineChart'
import Phone from './phone/phone'
import PriceOption from './priceoption/PriceOption'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <PriceOption></PriceOption>
      <LineChart></LineChart>
      <Chart></Chart>
      <Phone></Phone>
    </>
  )
}

export default App
