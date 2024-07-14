import Header from './components/Header';
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import 'bootstrap-icons/font/bootstrap-icons.css';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
