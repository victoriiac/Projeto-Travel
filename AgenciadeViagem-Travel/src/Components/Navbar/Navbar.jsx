import { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const Navbar = () => {

    const location = useLocation();

    // Efeito para rolar para o topo quando a localização muda
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, [location]);


    const [menuOpen, setMenuOpen] = useState(false);
    const [modal, setModal] = useState(false);

    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && !event.target.closest('nav')) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [menuOpen]);

    useEffect(() => {
        if (modal) {
            document.body.classList.add("active-modal");
        } else {
            document.body.classList.remove("active-modal");
        }
    }, [modal]);

    const toggleModal = () => {
        setModal(!modal);
    };

    const closeModal = () => {
        setModal(false);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const emailInput = event.target.querySelector('input[type="email"]');
        const emailValue = emailInput.value.trim();

        if (!emailValue) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter your email address!',
            });
            return;
        } else {
            closeModal();
            setTimeout(() => {
                Swal.fire({
                    title: 'Are you sure?',
                    text: 'Once submitted, you will not be able to change your details!',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, submit it!',
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            'Successfully Subscribed!',
                            'Enjoy Your Subscription',
                            'success'
                        );
                    }
                });
            }, 280); // Atraso para garantir que o modal feche antes do Swal aparecer
        }
    };

    return (
        <>
            <nav>
                <input type="button" id="click" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
                <label htmlFor="click" className="menu-btn">
                    <i className="fas fa-bars"></i>
                    <div id="logo">
                        <Link to="/" className='navbar-brand' onClick={handleMenuItemClick} ><h1>Travel</h1></Link>
                    </div>
                </label>
                <div className='navbar_menu'>
                    <ul>
                        <li><NavLink activeclassname="active" to="/" onClick={handleMenuItemClick}>Inicio</NavLink></li>
                        <li><NavLink to="/about" onClick={handleMenuItemClick}>Sobre</NavLink></li>
                        <li><NavLink to="/services" onClick={handleMenuItemClick}>Serviços</NavLink></li>
                        <li><NavLink to="/pricing" onClick={handleMenuItemClick}>Pacotes</NavLink></li>
                        {/* <li><NavLink to="/team" onClick={handleMenuItemClick}>Equipe</NavLink></li> */}
                        <li><NavLink to="/contact" onClick={handleMenuItemClick}>Contato</NavLink></li>
                    </ul>
                </div>

                <div className='btn-main hide'>
                    <button onClick={toggleModal} className='btn btn-signup hide'>Assinar</button>
                </div>
            </nav>

            {modal && (
                <div className='modal'>
                    <div className='overlay'></div>
                    <div className='modal-content'>
                        <h2 className='h1-1'>Travel</h2>
                        <p className='p-l-1'>Agência de viagens</p>
                        <h2>Assine nossa NewsLetter</h2>
                        <p>
                            A assinatura é GRATUITA, assine e ganhe 20% OFF na primeira compra.
                        </p>
                        <form onSubmit={handleFormSubmit}>
                            <input
                                className='inp'
                                type='email'
                                required
                                placeholder='Seu Email'
                            />
                            <span>
                                <p><input id='same' type='checkbox' required className='in' />
                                    <label className='termos' htmlFor='same'> Eu aceito os termos e condições, política de privacidade e política de cookies</label>
                                </p>
                            </span>
                            <button className='btn-pr' type='submit'>Assine</button>
                        </form>
                        <button className='close-modal' onClick={toggleModal}>
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;