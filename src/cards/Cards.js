import '../cards/Cards.css';
import React, { useState, useEffect } from 'react';
import data from '../projects.json'; 
export default function Cards(){
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(data); 
    }, []);
    return (
       <div>
            <h1>Projects</h1>
            <div id="project" class="project_section">
                {items.map((item) => (
                    <div class="project" key={item.id}>
                        <img src={item.image_path} alt={item.title} class="project_img" />
                        <hr/>
                        <h2 class="project_title">{item.title}</h2>
                        <p class="project_desc">{item.description}</p>
                        <button type="button">View More</button>
                    </div>
                ))}
            </div>
       </div>
    );
}