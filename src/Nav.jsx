import React from 'react';

const showNav = () => {
    var mob_nav = document.getElementById('mob-nav');
    if (mob_nav.style.display == 'none')
        mob_nav.style.display = 'block';
    else
        mob_nav.style.display = 'none';
}

const Nav = () => {
    return (
        <>
            <nav>
                <button className='nav-btn-logo' id='nav-btn-logo'>S/A</button>
                <button className='nav-btn-logo-long' id='nav-btn-logo-long'><span>SayanDip</span> Adhikary</button>
                <div className='nav-links' id='nav-links'>
                    <a href='#home'>home</a>
                    <a href='#about'>about</a>
                    <a href='#project'>projects</a>
                    <a href='#contact'>Contact</a>
                </div>
                <div className='nav-social-links' id='nav-social-links'>
                    <a href='https://www.instagram.com/sayan.dip7/'><i class="fab fa-instagram"></i></a>
                    <a href='https://github.com/Sayandip0408'><i class="fab fa-github"></i></a>
                    <a href='https://www.facebook.com/sayandip.adhikary.96'><i class="fab fa-facebook"></i></a>
                    <a href='https://www.linkedin.com/in/sayandip-adhikary-7359a8199'><i class="fab fa-linkedin"></i></a>
                </div>
                <button id='menu-btn' onClick={showNav}><i class="fas fa-bars"></i></button>
            </nav>
        </>
    );
}

export default Nav;