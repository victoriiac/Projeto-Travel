
import "./Footer.css"
import fb from "../../Images/fb.png"
import ins1 from "../../Images/ins1.jpg"
import lin5 from "../../Images/lin5.png"
import xwit from "../../Images/xwit.jpeg"

export default function Footer() {
    return (

        <div className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h5>Sobre Nós</h5>
                    <p>Na Travel, realizamos sonhos com viagens inesquecíveis. Oferecemos serviços personalizados, garantindo segurança, conforto e satisfação. Explore o mundo com a gente!</p>
                    <a href="https://www.facebook.com/" target="_blank"><img className="redesSociais"src={fb} alt="" /></a>
                    <a href="https://www.instagram.com/" target="_blank"><img className="redesSociais"src={ins1} alt="" /></a>
                    <a href="https://www.linkedin.com/feed/" target="_blank"><img className="redesSociais"src={lin5} alt="" /></a>
                    <a href="https://x.com/?lang=pt-br" target="_blank"><img className="redesSociais"src={xwit} alt="" /></a>
                </div>
                <div className="footer-section">
                    <h5>Navegação</h5>
                    <ul>
                        <li><a href="/">Início</a></li>
                        <li><a href="/pricing">Pacotes</a></li>
                        <li><a href="/services">Serviços</a></li>
                        <li><a href="/contact">Contato</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h5>Contato</h5>
                    <ul>
                        <li><i className="fas fa-map-marker-alt"></i> Rua Padre Eustáquio, Centro, 123</li>
                        <li><i className="fas fa-phone"></i> (99) 91234-5678</li>
                        <li><i className="fas fa-envelope"></i> travel.agencia@gmail.com</li>
                    </ul>
                </div>
                <hr />
            </div>
            <div className="footer-rodape">
                <p>&copy; 2024 Travel. Todos os direitos reservados.</p>
            </div>
        </div>
    )
}