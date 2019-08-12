import React from 'react'
import {Link} from 'react-router-dom'
import colors from '../config/styles'

import BASENAME from '../config';

const headerStyle = {
    backgroundColor: colors.secondary,
    listStyle: 'none',
}

const Header = () => (
    <nav style={headerStyle}>
        <li id='HomeLI'>
            <Link to="/" id='HomeLink' style={{  backgroundImage: "url('"+BASENAME+"/png-panda-compressed.png')"}}></Link>
        </li>
        <li id='HomeLI'>
            <Link to="/" id='HomeLink' style={{  backgroundImage: "url('"+BASENAME+"/png-panda-compressed.png')"}}></Link>
        </li>
        <li>
            <Link to="/Stories">Stories</Link>
        </li>
        <li>
            <Link to="/Places">Places</Link>
        </li>
        <li>
            <Link to="/BitTorrent">Extensive give for using BitTorrent</Link>
        </li>
        <li>
            <Link to="/cacas">Caca</Link>
        </li>
    </nav>
)

export default Header;