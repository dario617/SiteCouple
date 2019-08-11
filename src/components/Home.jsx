import React, {Component} from 'react'
import colors from '../config/styles';

import BASENAME from '../config';

export default class Home extends Component{
    render(){
        return (
            <section>
                <div style={{
                    backgroundImage: "url("+BASENAME+"/media/dune.JPG)",
                    backgroundSize: 'cover',
                    padding: '1em'
                    }}>
                    <div className="MessageBox" style={{
                        backgroundColor: colors.third,
                        }}>
                        <h1 style={{fontFamily: 'BunchBlossoms'}}>
                            Bonjour Chérie!
                        </h1>
                        <p>
                            Voici une site qui raconte un peu de histoire, 
                            comment nous nous sommes rencontres et notre parcour ensemble :). C'est un Work in Progress.
                        </p>
                    </div>
                </div>
                <div style={{
                        backgroundColor: colors.fourth,
                        padding: '2em'
                        }}>
                    <h2 style={{
                        margin: '1em'
                        }}>
                        Un petit chanson d'anniversaire &darr;
                    </h2>
                    
                    <iframe  src="https://www.youtube.com/embed/r9LR5gf8kFQ?rel=0" title="Anniversaire video"
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen style={{
                        borderRadius: '5px'
                        }}></iframe>
                </div>
            </section>
        )
    }
}