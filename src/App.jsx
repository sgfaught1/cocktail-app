import Diy from "./Components/Diy/Diy"
import Hero from "./Components/Hero/Hero"
import './App.css'
import CrowdPleasers from "./Components/CrowdPleasers/CrowdPleasers"
import Cod from "./Components/Cod/Cod"
import Pricing from "./Components/Pricing/Pricing"
import Footer from "./Components/Footer/Footer"
import './App.css'



function App() {


  return (
    <div className="scroller">
      <section>
        <Hero />
      </section>
      <section>
        <Diy />
      </section>

      <section>
        <Cod />
      </section>

      <section>
        <CrowdPleasers />
      </section>

      <section> 
        <Pricing />
      </section>

      <section>
        <Footer />
      </section>

    </div>

  )
}

export default App



// ANCHOR TAGS FOR SCROLLING TO NEXT PAGE
