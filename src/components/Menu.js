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
          <div className="projects">
            <Project
              name="Weather App"
              description="A page that was purely code in JS, html, CSS. It uses API manadgement to show the weather of a city in real time."
              link="https://cbonchan.github.io/Weather-Page/"
              image="/images/clima.jpg"
            />
            <Project
              name="Gold-hunt Game"
              description="Its a point and click game, It can be played only by installing it in your local machine. I was in charge of the API and database development, and some parts of the game logic."
              link="https://github.com/Cbonchan/gold-hunt"
              image="/images/duckgame.jpg"
            />
            <Project
              name="Balatro"
              description="A recreated version of the game following the principles of Object-Oriented Programming (OOP), we used Java and JavaFX for the development. Currently, the game can only be executed directly from the development environment by pressing the 'Run' button in the IDE. "
              link="https://github.com/Cbonchan/Balatro"
              image="/images/balatro.jpg"
            />
            <Project
              name="Binary Search Tree"
              description="A program written in C with the purpose of creating a Binary Search Tree (BST) and performing operations on it. The program is executed in the terminal and the user can interact with it through the console."
              link="https://github.com/Cbonchan/tda-abb/tree/entrega"
              image="/images/arbol.jpg"
            />
            <Project
              name="Hash Table"
              description="Also written in C, is a closed hash table with open addressing. The program is executed in the terminal and the user can interact with it through the console."
              link="https://github.com/Cbonchan/tda-abb/tree/entrega"
              image="/images/hash.jpg"
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
          <h2 className='t2'>Computer engineering student</h2>
          <p className='textaboutme'>I am a third-year student at the Faculty of Engineering, University of Buenos Aires (FIUBA), looking for opportunities to gain hands-on experience in the tech field. I am passionate about programming, proactive, and always eager to learn new technologies and improve my skills. I thrive in collaborative environments and am committed to continuous growth, whether in software development or other technology-related roles.
          </p>
          <h2 className='t2'>Knowledge</h2>
          <p className='textaboutme'> I have a strong foundation in structured, object-oriented, and functional programming. I also have experience in both front-end and back-end development, including working with SQL databases and connecting these systems. My university projects have provided me with valuable teamwork and collaborative development skills.
          </p>
          <h2 className='t2'>Technologies</h2>
          <p className='textaboutme'>
          I am experienced in Java, JavaFX, C, JavaScript, HTML, CSS, Python, Assembly, and SQL databases. Currently, I am learning React and planning to explore Node.js.
          </p>
          <h2 className='t2'>Experience</h2>
          <p className='textaboutme'>
            Movistar Argentina 2022 - I worked on the sales sector, providing customer service and support. I also collaborated with the technical team to solve problems and improve the service.
          </p>

        </div>
      )
    },
    { 
      id: 'contact', 
      title: 'Contact', 
      content: (
        <div id='contact'>
          <h2 className='t2'>Contact Me</h2>
          <ul className='list'>
            <label for='email' >Email</label>
            <li id='email'>basterrasebastian@gmail.com</li>
            <label for='phone'>Phone</label>
            <li id='phone'> +54 11 5038 1538</li>
            <label for='github'>GitHub</label>
            <li id='github'><a href="https://github.com/Cbonchan" target="_blank" rel="noopener noreferrer">Cbonchan</a></li>
          </ul>
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
      <button onClick={() => goToSection(2)} className="carousel-button next">
        Contact
      </button>
      <div className="carousel-content">
        {sections[currentIndex].content}
      </div>
    </div>
  );
};

export default Menu;