import React from 'react';

const styles = {
  card: {
    background: '#DFF6FF',
  },
  heading: {
    fontSize: '1.2rem',
    color: 'black',
    padding: '20px',
  },
  content: {

  },
};


function Card() {
  return (
    <div style={styles.card}>
      <h3 style={styles.heading}>About Me</h3>
      
      <div style={styles.content}>
        My name is Lanay Brown, I am a Georgia Tech bootcamp graduate. 
      </div>
      <h3 style={styles.heading}>Work</h3>
      <div style={styles.content}>
      <ul>           
        <li><a href="https://lanayb.github.io/dope-horoscope/"> This is the link to one of my projects!!</a></li>
        <li><a href="https://gamer-gabble.herokuapp.com/"> This is the link to another one of my projects!!</a></li>
         <li><a href="https://lanayb.github.io/password-generator/">Homework 1</a></li>
         <li><a href="https://lanayb.github.io/daily-planner/">Homework 2</a></li>
      </ul>
      </div>
      <h3 style={styles.heading}>Resume</h3>
      <div style={styles.content}>
      </div>
      <h3 style={styles.heading}>Contact Me</h3>
      <div style={styles.content}>
        <ul>
        <li><a href='https://github.com/lanayb'>Github</a></li>
        <li><a href='https://www.linkedin.com/in/lanay-brown-601b59228/'>LinkedIn</a></li>
        <li><a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'>lanayb.03@gmail.com</a></li>
        </ul>
      </div>
      
    </div>
  );
}

export default Card;
