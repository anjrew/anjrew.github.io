import React from 'react';
import { transform } from '@babel/core';

export default class ProjectImage extends React.Component{

    constructor(){
        super();
        this.state = {
            showText: false
        };
    }

    render(){
        const imageContainerStyle = {
            // '-webkit-box-reflect':  "below 0px -webkit-gradient(linear, 0% 0%, 0% 100%, from(transparent), color-stop(0.7, transparent), to(rgba(250, 250, 250, 0.4)))",
            width: '300px', 
            height: '300px',
            margin: '3px',
            overflow: 'hidden',
            display: 'flex',
            placeContent: 'center center'
        };

        return (
            <div 
                style={imageContainerStyle}
                onMouseEnter={() =>{ this.setState({ showText: true }); } }
                onMouseLeave={() =>{ this.setState({ showText: false  }); } }
            >
                <h2 style={{
                    position: 'absolute',
                    zIndex:'10',
                    alignSelf: 'center',
                    color: 'white',
                    // fontSize: this.state.showText || 0,
                    transition: 'opacity 800ms',
                    opacity: this.state.showText ? 1 : 0,
                }}>{this.props.name}</h2>
                <img className='project' src={this.props.imageUrl || this.props.src}/>
            </div>
        );
    }
}

