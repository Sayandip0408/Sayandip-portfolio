import React from 'react';

const hideNav = () => {
    var mob_nav = document.getElementById('mob-nav');
    mob_nav.style.display = 'none';
}

const NavMob = () => {
    return (
        <section id='mob-nav'>
            <div className='page-links'>
                <a href='#home' onClick={hideNav}>Home</a>
                <a href='#about' onClick={hideNav}>About</a>
                <a href='#project' onClick={hideNav}>Projects</a>
                <a href='#contact' onClick={hideNav}>Contact</a>
            </div>
            <div className='social-links'>
                <a href='https://www.instagram.com/sayan.dip7/' onClick={hideNav}><i class="fab fa-instagram"></i></a>
                <a href='https://github.com/Sayandip0408' onClick={hideNav}><i class="fab fa-github"></i></a>
                <a href='https://www.facebook.com/sayandip.adhikary.96' onClick={hideNav}><i class="fab fa-facebook"></i></a>
                <a href='https://www.linkedin.com/in/sayandip-adhikary-7359a8199' onClick={hideNav}><i class="fab fa-linkedin"></i></a>
            </div>
        </section>
    );
}

export default NavMob;