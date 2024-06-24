import first from '../../Images/icon-plane.png';
import second from '../../Images/icon-map.png';
import third from '../../Images/icon-travel.png';
import './Services.css';

export default function Services() {
    return (
        <div id="services"><br />
            <h1>SERVIÇOS</h1>

            <div className="card-container">
                <div className="card">
                    <img src={first} alt="pic" className="card-img-top" />
                    <div className="card-body">
                        <h2 className="card-title">SEGURO VIAGEM</h2>
                        <p className="text">Oferecimento de planos de seguro para cobrir emergências médicas, cancelamentos de viagem, perda de bagagem, entre outros.</p>
                    </div>
                </div>

                <div className="card">
                    <img src={second} alt="pic" className="card-img-top" />
                    <div className="card-body">
                        <h2 className="card-title">PASSEIOS E EXCURSÕES</h2>
                        <p className="text">Organização de passeios locais e excursões guiadas em diferentes destinos.</p>
                    </div>
                </div>

                <div className="card">
                    <img src={third} alt="pic" className="card-img-top" />
                    <div className="card-body">
                        <h2 className="card-title">TRANSPORTE TERRESTRE</h2>
                        <p className="text">Aluguel de carros, traslados de/para aeroportos, e transporte terrestre entre destinos.</p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}
