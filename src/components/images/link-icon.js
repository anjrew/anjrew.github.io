import React from 'react';

export default class LinkIcon extends React.Component{

    constructor(){
        super();
        this.state = {
            showText: false
        };
    }

    render(){
        const data = this.props.data;
        // const size = data.size || '500px';
        // const width = size;
        // const height = size;
		
        const words = data.name.split(' ');
        var biggestWordLength = 0; 
        for (let index = 0; index < words.length; index++) {
            const word = words[index];
            if ( word.length > biggestWordLength){
                biggestWordLength = word.length;
            }
        }
		
        var fontSize = data.name.length > 15 || biggestWordLength > 6 ? '25px' : '40px';
        if (biggestWordLength > 10 ) {
            fontSize = '20px';
        }


        const imageContainerStyle = {
            // width: width, 
            // height: height,
            height: '60px',
            margin: '3px',
            overflow: 'hidden',
            display: 'flex',
            placeContent: 'center center'
        };
		
        const imageStyle ={
            width: 'auto',
            height: '100%',
            transformOrigin: 'center center', 
            objectFit: 'cover',
            transition: 'all 500ms',
            transform: 'scale(0.9) ',
        };

        return (
            <a href={data.href} alt={data.name}>
                <div 
                    style={imageContainerStyle}
                >
                    <img style={imageStyle} src={data.imageUrl || data.src}/>
                </div>
            </a>
        );
    }
}

