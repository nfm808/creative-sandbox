import React from 'react'
import AbsoluteWrapper from '../AbsoluteWrapper/AbsoluteWrapper';
import Hero from '../Hero/Hero';
import about from '../../assets/img/about.jpg';
import Values from '../Values/Values';
import Card from '../Card/Card';
import './About.css';
import Copyright from '../Copyright/Copyright';

export default function About() {
  return (
    <AbsoluteWrapper>
      <main className='About'>
        <Hero 
          heading='About Us'
          text={"A glimpse into our culture and values."}
          imgSrcUrl={about}
          classText='white'
        />
        <h2 style={{lineHeight: '2rem', padding: '2rem'}}>Our <span className='orange'>Values</span></h2>
        <Values >
          <Card 
            classText='blue'
            heading='Total Transparency'
            text='At every step of the way we maintain an open dialogue and 
                  full disclosure. The only wrong question is the one unasked.'
          />
          <Card 
            classText='blue'
            heading='Your Mission is our Mission'
            text='When we partner with a client their vision becomes our vision.'
          />
          <Card 
            classText='blue'
            heading='Outcomes over Features'
            text='We focus on creating solutions that generate the maximum value
                  for all stakeholders involved.'
          />
          <Card 
            classText='blue'
            heading='Always Learning and Growing'
            text='To ensure we offer our partners the best possible outcomes,
                  our team dedicates 20% of their week to their continued
                  education.'
          />
          <Card 
            classText='blue'
            heading='Build With Purpose'
            text="A deep understanding of our partner's unique enterprise
                  architecture and stakeholders drives us to develop the perfect
                  solution for our clients."
          />
          <Card 
            classText='blue'
            heading='People Are Primary'
            text='Our success is measured in how easily the solutions we 
                  architect are adopted by the people engaging them and 
                  the resultant value created.'
          />
        </Values>
        <Copyright />
      </main>
    </AbsoluteWrapper>
  )
}
