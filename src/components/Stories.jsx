import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Carousel, CarouselItem, CarouselControl,
     CarouselIndicators, CarouselCaption, Row, Col} from 'reactstrap';

import BASENAME from '../config'

class CustomCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            activeIndex: 0 ,
            items: props.items,
            };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }
  
    onExiting() {
      this.animating = true;
    }
  
    onExited() {
      this.animating = false;
    }
  
    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
  
    render() {
      const { activeIndex, items } = this.state;
  
      const slides = items.map((item) => {
        return (
          <CarouselItem
            className="carouselItemtag"
            tag="div"
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.src}
          >
            <img src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.header} />
          </CarouselItem>
        );
      });
  
      return (
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      );
    }
}

const introItems = [
    {
        src: BASENAME+'/media/couple.JPG',
        altText: 'Des amoureux',
        caption: '',
        header: 'Deux mondes, une couple.'
      },
      {
        src: BASENAME+'/media/cheznous.JPG',
        altText: 'Chateaux',
        caption: 'Bientôt chez nous!',
        header: 'Des voyages'
      },
      {
        src: BASENAME+'/media/defi.JPG',
        altText: 'Une montagne gigantesque',
        caption: 'On travail en équipe.',
        header: 'Ensemble on peut tout faire :)'
      }
]

export default class Stories extends Component{

    render(){
        return (
            <div className='stories'>
                <section>
                    <h1>
                        Introduction
                    </h1>
                    <Row>
                        <Col sm="8">
                            <CustomCarousel items={introItems}/>
                        </Col>
                        <Col sm="3" className="IntroText">
                            Vous ne savez jamais ce que l'avenir peut apporter. Par chance 
                            je suis parti en France, sans spoir, sans argent et je ne connaisait 
                            personne. Heuresement j'ai participé de la compétition inter étage à la résidence
                            de l'école. Et ce soir l'étage est venu manger chez nous...
                        </Col>
                    </Row>
                </section>
                <section>
                    <h1>
                        Le début
                    </h1>

                    <div id="firstTime" style={{  backgroundImage:  "url("+BASENAME+"/media/premierfois.JPG)"}}>
                        <span>Voici notre premier photo ensemble</span>
                    </div>
                    <div id="charlie">
                    <h3>
                        Voici notre premier thème de conversation:
                    </h3>
                    <iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/fZu3P0OsQPk?rel=0" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                    </div>
                </section>
                <section>
                    <h1>
                    <Link to={"/Stories/Cherie"}>J'aime des choses chez cette femme.</Link>
                    </h1>
                </section>
            </div>
        )
    }
}