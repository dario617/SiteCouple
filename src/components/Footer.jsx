import React from 'react'
import colors from '../config/styles';

const footerStyle = {
    backgroundColor: colors.secondary
}

const Footer = () => (
    <footer style={footerStyle}>
        <span>Un petit footer pour que le site aie l'air professionnel. Joyeux Couple 2019 &copy;</span>
    </footer>
)

export default Footer