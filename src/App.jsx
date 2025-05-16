import './App.css';
import './reset.css';
import bpl1Hero from './assets/bpl1Hero.png';
import cajaProducto from './assets/caja.png';
import logo1 from './assets/logo1.png';
import logo2 from './assets/logo2.png';
import logo3 from './assets/logo3.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUtensils, faChartLine, faHeartbeat, faShieldAlt, faMale, faFemale } from '@fortawesome/free-solid-svg-icons';
import Benefits from './components/benefices';
import CustomAccordion from './components/Faq';

// Añade los iconos que usarás a la biblioteca
library.add(faUtensils, faChartLine, faHeartbeat, faShieldAlt, faMale, faFemale);

function App() {

  return (
    <>
      <main>

        {/* Section One */}

        <section className='cnt-sectionOne'>
          <div className='cnt-h1p'>
            <h1 className='titleH1'>Revoluciona tu bienestar con BPL1</h1>
            <p className='textTitle'>Con Bifidobacterium lactis BPL1 diseñado para apoyar tu salud digestiva y metabólica.</p>
            <button className='btn-Title'>Pruebalo Hoy</button>
          </div>
          <div className='cnt-img'>
            <img className='bpl1Hero' src={bpl1Hero} alt="imgHero"></img>
          </div>
        </section>

        {/* Section Two */}

        <section className='cnt-sectionTwo'>
          <div>
            <h2 className='titleH2'>¿Qué es BPL1?</h2>
            <p className='textH2'>BPL1 es un suplemento probiótico con Bifidobacterium lactis BPL1, diseñado para apoyar el equilibrio intestinal, contribuir a la salud metabólica y mejorar el bienestar general. Ideal para quienes buscan una solución fácil, efectiva y respaldada científicamente.</p>
          </div>
          <div className='cnt-imgCaja'>
            <img className='imgCaja' src={cajaProducto} ></img>
          </div>
        </section>

        {/* Section Three */}

        <section>
          <Benefits />
        </section>

        {/* Section Four */}

        <section className='sectionLogos'>
          <div className='cnt-imgLogo'>
            <img className="imgLogo" src={logo1}></img>
            <img className="imgLogo" src={logo2}></img>
            <img className="imgLogo" src={logo3}></img>
          </div>
        </section>

        {/* Section Five */}

        <section className='sectionFAQ'>
          <div>
            <h3 className='titleFAQ'>Preguntas más frecuentes</h3>
          </div>
          <CustomAccordion />
        </section>

        {/* Section Six */}

        <section className='secctionCTA'>
          <div className='cnt-Cta'>
            <h4 className='titleCTA'>¿Quieres ser distribuidor?</h4>
            <a href="tel:+573208030913" className="btn-CTA">¡Llámanos!</a>
          </div>
        </section>

        {/* Section Seven */}

        <footer>
          <div className='cnt-Footer'>
            <p className='textFooter'>Copyright @ 2025 BPL1FE. All right reserved.</p>
          </div>
        </footer>
      </main>
    </>
  )
};

export default App
