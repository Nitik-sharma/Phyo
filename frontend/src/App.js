import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      {/* Site Header */}
      <header>
        <Header />
        <Navbar />
      </header>

      {/* Main Content (VERY IMPORTANT FOR SEO) */}
      <main className="pt-[140px]">
        <section id="home">
          <Home />
        </section>

        <section id="services">
          <Service />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="team">
          <Team />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Site Footer */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
