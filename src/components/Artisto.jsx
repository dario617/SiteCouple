import React, {Component} from 'react';
import colors from '../config/styles';
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';

import BASENAME from '../config'

export default class Artisto extends Component{
    render(){

        const firstOne = {
            backgroundImage: "url("+BASENAME+"/media/smile.JPG)",
            backgroundBlenMode: "",
            height: "600px",
            backgroundSize: "cover",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width:"100%",
            position: 'relative'
        }

        const el = []
        return (
            <div className="Artisto">
                <section style={firstOne}>
                    <span className="first">Cynthia est une artiste inspirante</span>
                </section>
                <section style={{
                        backgroundColor: colors.fourth,
                        padding: '2em'
                        }}>
                    <h2 style={{
                        margin: '1em'
                        }}>
                        Cynthia faisait partie du BDA : elle est une Artistocrate!
                    </h2>
                    
                    <div className="row" style={{
                        backgroundColor: colors.third, color: colors.fifht, borderRadius: "5px"}}>
                        <Card className="col-sm-4 cardPad">
                            <CardImg top width="100%" src={BASENAME+"/media/musique.JPG"} alt="Card image cap" />
                            <CardBody>
                            <CardTitle className="headline">Elle joue l'arpe</CardTitle>
                            {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                            <CardText>Parfois elle paraît un ange quand elle joue des morceaux tout douces.</CardText>
                            </CardBody>
                        </Card>
                        <Card className="col-sm-4 cardPad">
                            <CardImg top width="100%" src={BASENAME+"/media/Creadance.JPG"} alt="Card image cap" />
                            <CardBody>
                            <CardTitle className="headline">Elle dance</CardTitle>
                            {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                            <CardText>Cynthia est une type étrange d'éuropénne qui sait dancer salsa et elle n'a pas peur de faire n'importe quoi.</CardText>
                            </CardBody>
                        </Card>
                        <Card className="col-sm-4 cardPad">
                            <CardImg top width="100%" src={BASENAME+"/media/piano.JPG"} alt="Card image cap" />
                            <CardBody>
                            <CardTitle className="headline">Elle joue le piano et en plus elle chante!</CardTitle>
                            {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                            <CardText>C'est vraiment un talent jouer le piano quand on lis les partitions et en plus on chante.</CardText>
                            </CardBody>
                        </Card>
                    </div>


                    <h2 style={{
                        margin: '1em'
                        }}>
                        Attendez il y a plus!
                    </h2>

                    <div style={{
                        backgroundColor: colors.third,
                        borderRadius: "5px", textAlign: 'center', fontSize: '1.5em'}}>
                        
                        Cynthia en plus adore faire des activités manuelles comme:
                        <ul>
                            <li>
                                <b>Dessiner</b>: elle se forme avec un livre qui détail les techniques pour devenir une professionnelle.
                            </li>
                            <li>
                                <b>Accuarelle</b>: elle étude l'accuarelle avec son copain c; dans leurs soirées romantiques.
                            </li>
                            <li>
                                <b>Origami</b>: une fois elle a fait des oiseaux (grullas en espagnol) pour tous ses collègues avant de terminer le stage. C'est aussi son symbole dans ses cartes de présentation.

                            </li>
                        </ul>

                    </div>
                
                    

                </section>
            </div>
        )
    }
}