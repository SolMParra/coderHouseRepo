import React from 'react';
import styles from '../Components/NavBar.module.css';
import logo from '../img/logo.svg';


const NavBar = (props) => {

    return (
        <div>
            <div class="navbar-fixed">
                <nav>
                    <div class="nav-wrapper">
                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                        <a href="#!" className={styles.brandlogo}> <img className={styles.imgme} src={logo} alt=""></img></a>
                        <ul id="nav-mobile"  class="left hide-on-med-and-down">
                            <li><a href="sass.html"><i class="material-icons black-text">search</i></a></li>
                            <li><a href="sass.html"><i class="material-icons black-text">person</i></a></li>
                            <li><div className={styles.count} className='black-text'><span>{props.pedidos}</span></div></li>
                            <li><a href="sass.html"><i class="material-icons black-text"> add_shopping_cart</i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;