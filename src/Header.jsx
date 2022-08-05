import React from 'react';
import Nav from './Nav';
import NavMob from './Nav-mob';
import FirstSec from './FirstSec';

const Header = () => {
    return (
        <header id='home'>
            <Nav />
            <NavMob />
            <FirstSec />
        </header>
    );
}

export default Header;