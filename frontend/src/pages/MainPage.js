
import React, { Component } from 'react';
import Button from '../components/MainInfo/Button';
import ContainerW50 from '../components/MainInfo/ContainerW50';
import InfoSection from '../components/MainInfo/InfoSection';

class MainPage extends Component {
  render() {
    return (
      <article data-name="article-full-bleed-background">
        <div className="cf">
          <ContainerW50 float='fl' head='MAZDAK NAZEMI'>
            <InfoSection/>
          </ContainerW50>
          <ContainerW50 float='fr' head='Skill-set TillToday:'>
            <Button text='CorelDraw' color='bg-black'/>
            <Button text='HTML5' color='bg-red'/>
            <Button text='CSS3' color='bg-orange'/>
            <Button text='SASS' color='bg-green'/>
            <Button text='JavaScript' color='bg-navy'/>
            <Button text='Git' color='bg-purple'/>
            <Button text='Webpack' color='bg-light-blue'/>
            <Button text='ReactJs' color='bg-navy'/>
            <Button text='Redux' color='bg-navy'/>
            <Button text='MongoDB' color='bg-dark-green'/>
            <Button text='Nodejs' color='bg-dark-blue'/>
            <Button text='Express' color='bg-dark-blue'/>
            <Button text='GraphQl' color='bg-dark-blue'/>
            <Button text='SSR' color='bg-light-red'/>
            <Button text='OOP & FP' color='bg-gold'/>
            <Button text='& ...' color='bg-dark-red'/>
          </ContainerW50>    
        </div>
      </article>
    );
  }
}

export default MainPage;

