function Footer() {
    return React.createElement('footer', {
        style: {
            padding: '24px 32px',
            backgroundColor: '#2c3e50',
            color: 'white',
            textAlign: 'center',
            borderTop: '3px solid #3498db',
            marginTop: 'auto'
        }
    }, [

        React.createElement('div', {
            key: 'footer-content',
            style: {
                maxWidth: '1200px',
                margin: '0 auto'
            }
        }, [

            React.createElement('p', {
                key: 'copyright',
                style: {
                    margin: '0 0 8px 0',
                    fontSize: '16px',
                    fontWeight: 'bold'
                }
            }, '© 2024 Krakenshop - Tu tienda de juegos de mesa'),

            React.createElement('p', {
                key: 'rights',
                style: {
                    margin: '0 0 16px 0',
                    fontSize: '14px',
                    opacity: '0.8'
                }
            }, 'Todos los derechos reservados'),

            React.createElement('div', {
                key: 'footer-links',
                style: {
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '24px',
                    marginTop: '16px'
                }
            })
        ])
    ]);
}