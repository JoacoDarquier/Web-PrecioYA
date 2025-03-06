import { useEffect } from 'react';
import '../styles/TerminosCondiciones.css';

function TerminosCondiciones() {
    useEffect(() => {
        // Scroll al inicio cuando se carga la página
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terminos-container">
        <div className="terminos-header">
            <h1>Términos y Condiciones</h1>
            <p>Última actualización: 6 de Marzo de 2025</p>
        </div>

        <div className="terminos-content">
            <section className="terminos-section">
            <h2>1. Introducción</h2>
            <p>
                Bienvenido a PrecioYA. Estos Términos y Condiciones rigen el uso de nuestra aplicación web y servicios relacionados. Al acceder o utilizar PrecioYA, aceptas cumplir y quedar vinculado por estos términos. Si no estás de acuerdo con alguna parte de estos términos, no podrás acceder al servicio.
            </p>
            </section>

            <section className="terminos-section">
            <h2>2. Uso del Servicio</h2>
            <p>
                PrecioYA proporciona información sobre cotizaciones de divisas y criptomonedas con fines informativos únicamente. La información se actualiza periódicamente, pero no garantizamos su precisión, integridad o actualidad en todo momento.
            </p>
            <p>
                Te comprometes a utilizar el servicio solo para fines legales y de manera que no infrinja los derechos de terceros ni restrinja su uso y disfrute del servicio.
            </p>
            </section>

            <section className="terminos-section">
            <h2>3. Limitación de Responsabilidad</h2>
            <p>
                La información proporcionada por PrecioYA es solo para fines informativos y no constituye asesoramiento financiero, de inversión o de otro tipo. No somos responsables de las decisiones que tomes basándote en la información proporcionada por nuestro servicio.
            </p>
            <p>
                En ningún caso PrecioYA, sus directores, empleados o afiliados serán responsables por cualquier daño directo, indirecto, incidental, especial o consecuente que resulte del uso o la imposibilidad de usar el servicio.
            </p>
            </section>

            <section className="terminos-section">
            <h2>4. Propiedad Intelectual</h2>
            <p>
                El servicio y su contenido original, características y funcionalidad son propiedad de PrecioYA y están protegidos por derechos de autor, marcas registradas, patentes, secretos comerciales y otras leyes de propiedad intelectual o derechos de propiedad.
            </p>
            </section>

            <section className="terminos-section">
            <h2>5. Enlaces a Otros Sitios Web</h2>
            <p>
                Nuestro servicio puede contener enlaces a sitios web de terceros que no son propiedad ni están controlados por PrecioYA. No tenemos control ni asumimos responsabilidad por el contenido, políticas de privacidad o prácticas de sitios web de terceros.
            </p>
            </section>

            <section className="terminos-section">
            <h2>6. Cambios en los Términos y Condiciones</h2>
            <p>
                Nos reservamos el derecho de modificar o reemplazar estos términos en cualquier momento. Si realizamos cambios materiales, intentaremos proporcionar un aviso al menos 30 días antes de que los nuevos términos entren en vigor.
            </p>
            </section>

            <section className="terminos-section">
            <h2>7. Contacto</h2>
            <p>
                Si tienes alguna pregunta sobre estos Términos y Condiciones, puedes contactarnos a través de:
            </p>
            <ul className="terminos-contact">
                <li>
                <span className="material-icons">email</span>
                <a href="mailto:mango.itech@gmail.com">mango.itech@gmail.com</a>
                </li>
                <li>
                <span className="material-icons">business</span>
                <a href="https://www.mangoit.com.ar/" target="_blank" rel="noopener noreferrer">MangoIT</a>
                </li>
            </ul>
            </section>
        </div>
        </div>
    );
}

export default TerminosCondiciones; 