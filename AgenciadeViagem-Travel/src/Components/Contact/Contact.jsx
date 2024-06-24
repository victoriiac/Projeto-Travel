import './Contact.css';

export default function Contact() {
    return (
        <div id="contact">
            <form>
                <h1>CONTATO</h1>
                <div className="contactUs">
                    {/* FORM */}
                    <div className="form-grid">
                        <div className="form-group">
                            <p>Nome:</p>
                            <input type="text" placeholder="Nome" className="form-control" required="required" />
                        </div>

                        <div className="form-group">
                            <p>Sobrenome:</p>
                            <input type="text" placeholder="Sobrenome" className="form-control" required="required" />
                        </div>

                        <div className="form-group full-width">
                            <p >Email:</p>
                            <input type="email" placeholder="example@mail.com" className="form-control" required="required" />
                        </div>


                        <div className="form-group full-width">
                            <p>Comentários / Perguntas:</p>
                            <textarea rows="5" placeholder="Sua mensagem..." className="form-control" />
                        </div>
                    </div>
                    
                    {/* FORM BUTTON */}
                    <div className="contact-button">
                        <button className="btn" id="mysubmit">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
