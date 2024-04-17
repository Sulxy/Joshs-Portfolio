import React from 'react';
import '../style/Project.css';

// Project
function Project(props) {
    return (
        <div className='card'>
            <h5 className='card-title'>{props.title}</h5>
            <a href={props.deployedLink} target='_blank' rel='noreferrer'>
                <img src={props.imgSrc} alt={props.imgAlt} className='card-img-top'/>
            </a>
            <div className='card-body'>
                <h5 className='card-title'>{props.title}</h5>
                <p className='card-text'>{props.description}</p>
                <a href={props.deployedLink} target='_blank' rel='noreferrer' className='btn btn-deployed'>Deployed</a>
                <a href={props.githubLink} target='_blank' rel='noreferrer' className='btn btn-repo'>GitHub</a>
            </div>
        </div>
    );
}

export default Project;