import Footer from "./components/footer/Footer"
import Nav from "./components/section1/Nav"
import Section1 from "./components/section1/Section1"
import Section2 from "./components/section2/Section2"
const App = () => {
  return (
    <div>
      
      <Nav/>
      <div>
        <Section1 />
        <Section2 />
        <Footer />
      </div>

    </div>
    
  )
}

export default App
