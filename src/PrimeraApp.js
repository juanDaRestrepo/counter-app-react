import React from "react";
import  PropTypes from "prop-types";

//functional components

const PrimerApp = ({saludo,subtitulo}) => {
    //los fragment sirven para no tener que llenar mi documento pricipal html de divs
    /* const saludo = {
        nombre:'Daniel',
        apellido:'Restrepo'
    }; */
    
    return  <>
                {/*util para imprimir objetos */}
                {/* <pre>{JSON.stringify(saludo,null,3)}</pre> */}
                <h1>{saludo}</h1>
                <p>{subtitulo}</p>
            </>
            ;
}

PrimerApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimerApp.defaultProps ={
    subtitulo: 'Soy un subtitulo'
}
export default PrimerApp;