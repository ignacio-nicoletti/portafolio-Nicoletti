import React from 'react';
import { Container } from './styles';
import cssIcon from '../../assets/css-icon.svg';
import htmlIcon from '../../assets/html-icon.svg';
import jsIcon from '../../assets/js-icon.svg';
import nodeIcon from '../../assets/node-icon.svg';
import reactIcon from '../../assets/react-icon.svg';
import typescriptIcon from '../../assets/typescript-icon.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import profile from '../../assets/profile-image.png';
import materialUI from '../../assets/materialui-icon.svg';
import mongoDb from '../../assets/mongodb-icons.svg';
import redux from '../../assets/redux-icon.svg';
import express from '../../assets/express-icon.svg';

export function About() {
  return (
    <Container id='sobre'>
      <div className='about-text'>
        <ScrollAnimation animateIn='fadeInLeft'>
          <h2>Sobre mi</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInLeft' delay={0.2 * 1000}>
          <p>
            Mi nombre es Ignacio Nicoletti, soy técnico informático con una gran
            pasión por la programación. Me apasiona entregar soluciones que
            agreguen valor a la vida de las personas y al mismo tiempo me
            desafíen. Mejoré mis habilidades como desarrollador Front-End y
            Back-End
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn='fadeInLeft'
          delay={0.4 * 1000}
          style={{ marginTop: '2rem', marginBottom: '2rem' }}
        >
          <p>
            Cuento con mas de 800 horas de práctica, desde chico siempre me
            gusto la programación lo cual siempre tengo motivación para
            perfeccionar mis habilidades y aprender nuevas tecnologías. Me
            egresé del Bootcamp SoyHenry obteniendo como logro que el proyecto
            grupal sea considerado uno de los mejores entre las dos cohortes.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInLeft' delay={0.6 * 1000}>
          <p>
            Soy una persona dedicada que persigue hacer realidad sus sueños,
            trabajadora y orientada a resultados, busco siempre alcanzar mi
            mejor versión.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn='fadeInLeft' delay={0.7 * 1000}>
          <h3>Estas son mis principales habilidades:</h3>
        </ScrollAnimation>
        <div className='hard-skills'>
          <div className='hability'>
            <ScrollAnimation animateIn='fadeInUp' delay={0.1 * 1000}>
              <img src={reactIcon} alt='React' />
            </ScrollAnimation>
          </div>

          <div className='hability'>
            <ScrollAnimation animateIn='fadeInUp' delay={0.3 * 1000}>
              <img src={jsIcon} alt='JavaScript' />
            </ScrollAnimation>
          </div>

          <div className='hability'>
            <ScrollAnimation animateIn='fadeInUp' delay={0.4 * 1000}>
              <img src={htmlIcon} alt='Html' />
            </ScrollAnimation>
          </div>

          <div className='hability'>
            <ScrollAnimation animateIn='fadeInUp' delay={0.5 * 1000}>
              <img src={cssIcon} alt='Css' />
            </ScrollAnimation>
          </div>
          <div className='hability'>
            <ScrollAnimation animateIn='fadeInUp' delay={0.6 * 1000}>
              <img src={nodeIcon} alt='Node' />
            </ScrollAnimation>
          </div>

          <div className='hability'>
            <ScrollAnimation animateIn='fadeInUp' delay={0.7 * 1000}>
              <img src={typescriptIcon} alt='Typescript' />
            </ScrollAnimation>
          </div>
          <div className='hability'>
            <ScrollAnimation animateIn='fadeInUp' delay={0.7 * 1000}>
              <img src={materialUI} alt='materialUI' />
            </ScrollAnimation>
          </div>
          <div className='hability'>
            <ScrollAnimation animateIn='fadeInUp' delay={0.7 * 1000}>
              <img src={mongoDb} alt='MongoDB' />
            </ScrollAnimation>
          </div>
          <div className='hability'>
            <ScrollAnimation animateIn='fadeInUp' delay={0.7 * 1000}>
              <img src={redux} alt='Redux' />
            </ScrollAnimation>
          </div>
          <div className='hability'>
            <ScrollAnimation animateIn='fadeInUp' delay={0.7 * 1000}>
              <img src={express} alt='Express' />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className='about-image'>
        <ScrollAnimation animateIn='fadeInRight' delay={0.6 * 1000}>
          <img src={profile} alt='profileImage' />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
