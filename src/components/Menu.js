import React, { useState } from 'react';
import '../App.css'; 
import Project from './project';


const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSection = (index) => {
    setCurrentIndex(index);
  };
  
  const sections = [
    { 
      id: 'project', 
      title: 'Project', 
      content: (
        <div>
          <h2 id='pr_title'>Some of my Projects</h2>
          <div className="projects">
            <Project
              name="Weather App"
              description="A page that was purely code in JS, html, CSS. It uses API manadgement to show the weather of a city in real time."
              link="https://cbonchan.github.io/Weather-Page/"
              image="images/clima.jpg"
            />
            <Project
              name="Gold-hunt Game"
              description="Its a point and click game, It can be played only by installing it in your local machine. I was in charge of the API and database development, and some parts of the game logic."
              link="https://github.com/Cbonchan/gold-hunt"
              image="images/duckgame.jpg"
            />
            <Project
              name="Balatro"
              description="A recreated version of the game following the principles of Object-Oriented Programming (OOP), we used Java and JavaFX for the development. Currently, the game can only be executed directly from the development environment by pressing the 'Run' button in the IDE. "
              link="https://github.com/Cbonchan/Balatro"
              image="images/balatro.jpg"
            />
            <Project
              name="Binary Search Tree"
              description="A program written in C with the purpose of creating a Binary Search Tree (BST) and performing operations on it. The program is executed in the terminal and the user can interact with it through the console."
              link="https://github.com/Cbonchan/tda-abb/tree/entrega"
              image="images/arbol.jpg"
            />
            <Project
              name="Hash Table"
              description="Also written in C, is a closed hash table with open addressing. The program is executed in the terminal and the user can interact with it through the console."
              link="https://github.com/Cbonchan/tda-abb/tree/entrega"
              image="images/hash.jpg"
            />
          </div>
        </div>
      )
    },
    { 
      id: 'about', 
      title: 'About', 
      content: (
        <div>
          <h2>Sobre Mí</h2>
          <p>Aquí va tu información personal y profesional:</p>
          <p>Detalles sobre tu experiencia, habilidades y logros.</p>
          {/* Añade más información según sea necesario */}
        </div>
      )
    }
  ];


  return (
    <div className="carousel">
      <button onClick={() => goToSection(0)} className="carousel-button prev">
        Projects
      </button>
      <button onClick={() => goToSection(1)} className="carousel-button next">
        About Me
      </button>
      <div className="carousel-content">
        {sections[currentIndex].content}
      </div>
    </div>
  );
};

export default Menu;