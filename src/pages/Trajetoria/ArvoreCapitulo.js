import React, {Component} from 'react';

import './assets/css/arvore_capitulo.css';


class ArvoreCapitulo extends Component {
    render() {
        return (
            <div className="container">
                <img src={require(`./assets/images/arvore_${this.props.capitulo}.png`)} alt={this.props.capitulo} className={this.props.capitulo} />

            </div>
        );

    }
}

export default ArvoreCapitulo;