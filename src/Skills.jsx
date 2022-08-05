import React from 'react';
import skill_data from './skill_data';

const skill_fun = (val) => {
    return (
        <>
            <h3>{val.sub}</h3>
            <div className='progress'>
                <div className='bar' id={val.id} data-aos="slide-right" data-aos-duration="1000"></div>
            </div>
        </>
    );
}

const Skills = () => {
    return (
        <div className='main-about skill'>
            <p className='p'>Skills</p>
            {skill_data.map(skill_fun)}
        </div>
    );
}

export default Skills;