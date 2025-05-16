import './App.css';
import './reset.css';
import bpl1Hero from './assets/bpl1Hero.png';
import cajaProducto from './assets/caja.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUtensils, faChartLine, faHeartbeat, faShieldAlt, faMale, faFemale } from '@fortawesome/free-solid-svg-icons';
import Benefits from './components/benefices';
import CustomAccordion from './components/Faq'

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
          <div>
            <img className='imgCaja' src={cajaProducto} ></img>
          </div>
        </section>

        {/* Section Three */}

        <section>
          <Benefits />
        </section>

        {/* Section Four */}

        <section className='sectionFAQ'>
          <div>
            <h3 className='titleFAQ'>Preguntas mas frecuentes</h3>
          </div>
          <CustomAccordion />
        </section>

        {/* Section Five */}

        <section className='secctionCTA'>
          <div className='cnt-Cta'>
            <h4 className='titleCTA'>¿Quieres ser distribuidor?</h4>
            <a href="tel:+1234567890" className="btn-CTA">¡Llámanos!</a>
          </div>
        </section>

        {/* Section Five */}

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
