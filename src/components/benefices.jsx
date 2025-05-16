import './benefices.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUtensils,
    faChartLine,
    faHeartbeat,
    faShieldAlt,
    faMale
} from '@fortawesome/free-solid-svg-icons';

const Benefits = () => {
    const benefitsData = [
        {
            icon: faUtensils,
            title: "Genera saciedad",
            description: "Reduce niveles de grelina al controlar el apetito"
        },
        {
            icon: faChartLine,
            title: "Disminuye azúcar",
            description: "Regula los niveles de glucosa en sangre"
        },
        {
            icon: faHeartbeat,
            title: "Mejora colesterol",
            description: "Reduce triglicéridos y colesterol LDL"
        },
        {
            icon: faShieldAlt,
            title: "Efecto antioxidante",
            description: "Protege las células del daño oxidativo"
        },
        {
            icon: faMale,
            title: "Reduce grasa visceral",
            description: "Combate la adiposidad abdominal"
        }
    ];

    return (
        <section className="benefits-section">
            <div className="benefits-container">
                <h2 className="benefits-main-title">Beneficios Clave</h2>

                <div className="benefits-grid">
                    {benefitsData.map((benefit, index) => (
                        <div key={index} className="benefit-card">
                            <div className="benefit-icon">
                                <FontAwesomeIcon
                                    icon={benefit.icon}
                                    style={{ color: '#FF8C00', fontSize: '65px' }}
                                />
                            </div>
                            <h3 className="benefit-title">{benefit.title}</h3>
                            <p className="benefit-description">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;