import React from 'react';

export default class LinkIcon extends React.Component{

    constructor(){
        super();
        this.state = {
            hover: false
        };
    }

    render(){
        const data = this.props.data;
    
        const imageContainerStyle = {
            // width: width, 
            // height: height,
            height: '60px',
            margin: '3px',
            overflow: 'hidden',
            display: 'flex',
            placeContent: 'center center',
            transition: 'all 500ms',
            transform: this.state.hover ? 'scale(1.08)': 'scale(1.0) ',
        };
		
        const imageStyle ={
            width: 'auto',
            height: '100%',
            transformOrigin: 'center center', 
            objectFit: 'contain',
        };

        return (
            <a href={data.href} alt={data.name} target="_blank" rel="noopener noreferrer">
                <div 
                    style={imageContainerStyle}
                    onMouseEnter={() =>{ this.setState({ hover: true }); } }
                    onMouseLeave={() =>{ this.setState({ hover: false  }); } }
                >
                    <img style={imageStyle} src={data.imageUrl || data.src}/>
                </div>
            </a>
        );
    }
}

