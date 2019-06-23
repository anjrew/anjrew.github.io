import React from 'react';
import { transform } from '@babel/core';
import { tsImportEqualsDeclaration } from '@babel/types';

export default class ProjectImage extends React.Component{

    constructor(){
        super();
        this.state = {
            showText: false
        };
    }

    render(){
        const size = this.props.size || '300px';
        const width = size;
        const height = size;
		
        const words = this.props.name.split(' ');
        var biggestWordLength = 0; 
        for (let index = 0; index < words.length; index++) {
            const word = words[index];
            if ( word.length > biggestWordLength){
                biggestWordLength = word.length;
            }
        }
		
        var fontSize = this.props.name.length > 15 || biggestWordLength > 6 ? '50px' : '80px';
        if (biggestWordLength > 10 ) {
            fontSize = '40px';
        }


        const imageContainerStyle = {
            // '-webkit-box-reflect':  "below 0px -webkit-gradient(linear, 0% 0%, 0% 100%, from(transparent), color-stop(0.7, transparent), to(rgba(250, 250, 250, 0.4)))",
            width: width, 
            height: height,
            margin: '3px',
            overflow: 'hidden',
            display: 'flex',
            placeContent: 'center center'
        };
		
        const imageStyle ={
            width: '120%',
            height: '120%',
            transformOrigin: 'center center', 
            objectFit: 'cover',
            transition: 'all 500ms',
            filter: this.state.showText && 'blur(8px) brightness(0.8)',
            transform: this.state.showText ? 'scale(0.9) translateY(-10%)' : 'translateY(-10%)',
        };

        return (
            <div 
                style={imageContainerStyle}
                onMouseEnter={() =>{ this.setState({ showText: true }); } }
                onMouseLeave={() =>{ this.setState({ showText: false  }); } }
            >
                <div
                    style={{
                        display: 'flex',
            			placeContent: 'center center' ,
                        width: width,
                        height:'300px',
                        position: 'absolute',
                        zIndex:'10',
                        alignSelf: 'center',
                        // wordWrap: 'break-word',
                        padding: '10px'
                    }}
                >
                    <h2 
                        style={{  
                            color: 'white',
                            textAlign: 'center',
                            margin: '30px',
                            // wordBreak: 'break-all',
                            fontSize: fontSize,
                            transition: 'opacity 500ms',
                            opacity: this.state.showText ? 1 : 0,
                            alignSelf: 'center',
                        }}
                        onMouseEnter={() =>{ this.setState({ showText: true }); } }
                        onMouseLeave={() =>{ this.setState({ showText: false  }); } }
                    >{this.props.name}</h2>
                </div>
                <img style={imageStyle} src={this.props.imageUrl || this.props.src}/>
            </div>
        );
    }
}

