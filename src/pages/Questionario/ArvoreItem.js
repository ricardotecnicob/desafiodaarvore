import React, { Component } from 'react';
import arvore_item from './assets/images/arvore_item.png';

class ArvoreItem extends Component {

    render (){
        return (
            <div className="container-item">
                <img src={arvore_item} alt="arvore_item" className="arvore_item" />
                <label className="texto-item">{this.props.opcao}</label>    
            </div>
        );

    }
}

export default ArvoreItem;