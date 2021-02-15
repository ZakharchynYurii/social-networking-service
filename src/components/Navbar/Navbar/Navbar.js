import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return(
        <nav className={'navbar'}>
            <ul className={'navbar-ul'}>
                <li className={'navbar-li'}><a className={'navbar-a'} href="">Головна</a></li>
                <li className={'navbar-li'}><a className={'navbar-a'} href="">Повідомлення</a></li>
                <li className={'navbar-li'}><a className={'navbar-a'} href="">Новини</a></li>
                <li className={'navbar-li'}><a className={'navbar-a'} href="">Музика</a></li>
                <li className={'navbar-li'}><a className={'navbar-a'} href="">Налаштування</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;