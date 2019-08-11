import React, {Component} from 'react';
import colors from '../../config/styles';
import {Card, CardBody, CardImg, CardText, CardTitle, Row} from 'reactstrap';
import {Link} from 'react-router-dom';

import BASENAME from '../../config'

const items = [
    {
        img: BASENAME+"/media/cuisine.JPG",
        headline: "Tu es créative",
        text: "Tu trouve toujours une nouvelle façon de travailler, de jouer, d'être une artiste."
    },
    {
        img: BASENAME+"/media/folies.JPG",
        headline: "Tu me rends fou",
        text: "Tu m'inspires à faire de folies."
    },
    {
        img: BASENAME+"/media/interdit.JPG",
        headline: "Tu t'en fiche",
        text: "Peu t'importe les régles d'une bonne communauté."
    },{
        img: BASENAME+"/media/interdit2.JPG",
        headline: "Tu n'as pas peur",
        text: "Tu veux toujours aller au-delà. Même si ce n'est pas recommandé."
    },
    {
        img: BASENAME+"/media/sushi.JPG",
        headline: "Tu es moitié sushi",
        text: "Et peu t'importe qu'un inconnu nous observe."
    },
    {
        img: BASENAME+"/media/zombi.JPG",
        headline: "Ma zombi",
        text: "Tu es le seule zombi que j'aime."
    },{
        img: BASENAME+"/media/betes2.JPG",
        headline: "Tu es une artiste",
        link: "/Artisto"
    },{
        img: BASENAME+"/media/decouverte3.JPG",
        headline: "Tu me fait découvrir",
        text: "La vie, l'amour et le monde entier."
    }
]

export default class Cherie extends Component {

    render(){
    
        var rows = []
        for(var i = 0; i < items.length; i+=3){
            let subArray = items.slice(i, i+3 >= items.length? items.length : i+3)
            rows.push(
                subArray.map((el,i) =>
                <Card className="col-sm-4" key={el.img}>
                    <CardImg top width="100%" src={el.img} alt="Card image cap" />
                    <CardBody>
                    <CardTitle className="headline">{el.headline}</CardTitle>
                    {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                    {el.text != undefined ?
                        <CardText>{el.text}</CardText>
                        :
                        <Link to={el.link}>Regarde ici</Link>
                    }
                    </CardBody>
                </Card>)
            )
        }

        return (
            <div className="cherie">
                <section style={{
                    backgroundColor: colors.primary,
                    color: colors.fifht
                }}>
                    <h1>
                        Ce que j'aime chez toi
                    </h1>

                    {rows.map( (el,i) => <Row key={i}> {el} </Row>)}

                </section>
            </div>
        )
    }
}