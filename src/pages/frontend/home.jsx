import Header from "../../componentes/frontend/header"
import Footer from "../../componentes/frontend/footer"
import Hero from "../../componentes/frontend/hero"
import Why_us from "../../componentes/frontend/why_us"
import About from "../../componentes/frontend/about"
import Counts from "../../componentes/frontend/counts"
import Services from "../../componentes/frontend/services"
import Appointment from "../../componentes/frontend/apointment"
import Departaments from "../../componentes/frontend/departaments"
import Doctors from "../../componentes/frontend/doctors"
import Asked_questions from "../../componentes/frontend/asked_questions"
import Testimonios from "../../componentes/frontend/testimonios"
import Gallery from "../../componentes/frontend/gallery"



function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Why_us/>
      <About/>
      <Counts/>
      <Services/>
      <Appointment/>
      <Departaments/>
      <Doctors/>
      <Asked_questions/>
      <Testimonios/>
      <Gallery/>
      <Footer/>
    </>
  )
}

export default Home
