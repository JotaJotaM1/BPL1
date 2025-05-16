import { useState } from 'react';
import './faq.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const CustomAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "1. ¿Qué es BPL1FE?",
            answer: "It's more than a drink—it's your go-to solution for living life to the fullest. Packed with 100% natural ingredients, Full Ready helps you enjoy your nights and still wake up ready to conquer your day. It's not just a product; it's the balance you've been looking for.",
        },
        {
            question: "2. ¿Cómo actúa en el organismo?",
            answer: "Optimiza la gestión energética y favorece la absorción eficiente de nutrientes.",
        },
        {
            question: "3. ¿Dónde se consigue BPL1FE?",
            answer: "Actualmente, BPL1FE está disponible exclusivamente a través de nuestro equipo de proveedores autorizados. Contáctanos directamente para coordinar tu pedido.",
        },
        {
            question: "4. ¿Cómo tomar BPL1FE para ver resultados?",
            answer: "Because you deserve a product that works as hard as you play. Full Ready is scientifically designed to help your body recover while you enjoy yourself. No more sacrificing your mornings for your nights.",
        },
        {
            question: "5. ¿Es seguro?",
            answer: "Fabricado bajo certificaciones internacionales que garantizan calidad y seguridad en cada dosis",
        },
    ];

    return (
        <div className="accordion-container">
            {faqData.map((item, index) => {
                const formattedAnswer =
                    item.question === "How Do I Take Full Ready?"
                        ? item.answer
                            .replace("Step 1:", "<strong>Step 1:</strong>")
                            .replace("Step 2:", "<strong>Step 2:</strong>")
                        : item.answer;

                return (
                    <div key={index} className="accordion-item">
                        {/* Pregunta */}
                        <div
                            className={`accordion-header ${activeIndex === index ? "active" : ""}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="accordion-header-content">
                                <span className="accordion-question">{item.question}</span>
                            </div>
                            <i
                                className={`accordion-toggle bi ${activeIndex === index ? "bi-chevron-down" : "bi-chevron-up"}`}
                            ></i>
                        </div>

                        {/* Respuesta */}
                        <div
                            className="accordion-content"
                            style={{
                                maxHeight: activeIndex === index ? "300px" : "0",
                            }}
                        >
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: formattedAnswer,
                                }}
                            ></p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CustomAccordion;