import React from 'react'
import '../App.css';

function Project({ name, description, link, image }) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <img src={process.env.PUBLIC_URL + image} alt={name} />
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">Link</a>
        </div>
    );
}

export default Project;
