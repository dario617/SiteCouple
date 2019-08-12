import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Import the components
import Header from './Header'
import Footer from './Footer'
import colors from '../config/styles'
import Home from './Home';
import Stories from './Stories';
import Cherie from './Stories/Cherie'
import Artisto from './Artisto';

// Import config
import BASENAME from '../config';


const NotFound = ({location}) => (
    <div style={{
        backgroundImage: "url("+BASENAME+"/media/betes.jpg)",backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width:"100%",
        height: "600px",
        position: 'relative'}}
        >
        <div style={{
            backgroundColor: colors.third,
            padding: "3em",
            borderRadius: "1em",
            marginTop: "2em",
            position: 'absolute',
            top: "40%",
            left: '20%'}}>
            <h1>
                404 - Je suis désolé Chérie, je n'ai pas encore terminé<br/>
                C'est pas grave je t'aime
            </h1>
            <h2>The website {location.pathname} does not exists</h2>
        </div>
    </div>
)

const Layout = () => (
    <Router basename={BASENAME}>
        <Header/>
        <div id='content'>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Stories" component={Stories} />
            <Route path={"/Stories/Cherie"} component={Cherie}/>
            <Route path={"/Stories/Artisto"} component={Artisto}/>
            <Route path={"/Places"} component={NotFound} />
            <Route component={NotFound} />
        </Switch>
        </div>
        <Footer/>
    </Router>);

export default Layout;