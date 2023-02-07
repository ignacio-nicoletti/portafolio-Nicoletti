import React from 'react';
import { Container } from './styles';
import reactIcon from '../../assets/react-icon.svg';
import linkedinIcon from '../../assets/linkedin.png';
import githubIcon from '../../assets/github.png';
import instagramIcon from '../../assets/instagram.png';

export function Footer() {
  return (
    <Container className='footer'>
      <a href='/' className='logo'>
        <span>I</span>
        <span>Nicoletti</span>
      </a>
      <div>
        <p>
          Este sitio fue desarrollado con React{' '}
          <img src={reactIcon} alt='React' />
        </p>
      </div>

      <div className='social-media'>
        <a
          href='https://www.linkedin.com/in/ignacio-nicoletti/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={linkedinIcon} alt='Linkedin' />
        </a>

        <a
          href='https://github.com/ignacio-nicoletti'
          target='_blank'
          rel='noreferrer'
        >
          <img src={githubIcon} alt='GitHub' />
        </a>

        <a
          href='https://www.instagram.com/nacho.nicoletti'
          target='_blank'
          rel='noreferrer'
        >
          <img src={instagramIcon} alt='Instagram' />
        </a>
      </div>
    </Container>
  );
}
