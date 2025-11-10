import React from "react";

function Footer() {
    return React.createElement('footer', {
        key: 'footer',
    }, [

        React.createElement('div', {
            key: 'footer-content',

        }, [

            React.createElement('p', {
                key: 'copyright',

            }, '©️ 2024 Krakenshop - Tu tienda de juegos de mesa'),

            React.createElement('p', {
                key: 'rights',

            }, 'Todos los derechos reservados')
        ])
    ]);
}

export default Footer