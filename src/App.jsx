import {useState} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Servicesn from './components/Services'
import PortfolioSection from './components/Portfolio'

function App() {
	const [count, setCount] = useState(0)

	return (<>
		<Navbar/>
		<Hero/>
		 <About/>
		<Servicesn/>
		<PortfolioSection/>
  
	</>)
}

export default App
