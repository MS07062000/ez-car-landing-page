import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Appointment from './Components/Appointment/Appointment';
import ContactUs from './Components/ContactUs/ContactUs';
import Blog from './Components/Blog/Blog';
import Services from './Components/Services/services';
import './App.css'
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <About/>
      <Services />
      <Blog />
      <Appointment />
      <ContactUs />
      <Footer/>
    </div> 
  )
}

export default App;
