import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav>
         <div className="nav-wrapper blue">
            <Link to={'/'} className="brand-logo text-decoration-none">Fruit Basket</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link className='text-decoration-none' to={'/event'}>Products</Link></li>
                <li><Link className='text-decoration-none'to={'/about'}>About us</Link></li>
            </ul>
        </div>
    </nav>
)

export default Header; 