import React from 'react';
import project_data from './project_data';

const project_fun = (val) => {
    return (
        <div className='project-cls' data-aos="fade-down" data-aos-duration="1000">
            <p className='project-heading'>{val.heading}</p>
            <p className='project-desc'>{val.desc} <a href={val.link}>{val.read}<i class="fas fa-external-link-alt"></i></a></p>
            <p className='project-details'>{val.pupose}<br />{val.prog}<br />{val.gui}<br />{val.library}</p>
        </div>
    );
}

const Project = () => {
    return (
        <section id='project'>
            <h1>Projects I've done<br />so far...</h1>
            <div id='project-div'>
                {project_data.map(project_fun)}
                <p className='project-heading project-more'>Find more interesting projects developed by me in my GitHub repository  <a href='https://github.com/Sayandip0408?tab=repositories'><i class="fas fa-external-link-alt"></i></a></p>
            </div>
        </section>
    );
}

export default Project;