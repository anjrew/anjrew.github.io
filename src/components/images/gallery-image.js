import React from 'react';
import { Overlay } from '../graphics/overlay';


export default class GalleryImage extends React.Component{

    constructor(){
        super();
        this.state = {
            showPicture: false,
            hoverImage: false,
        };
    }

    render(){
        const data = this.props.data;
        const size = this.props.size || '300px';
        const width = size;
        const height = size;

        const imageContainerStyle = {
            position: this.state.showPicture ? 'fixed' : 'relative',
            top: this.state.showPicture && '50%',
            left: this.state.showPicture && '50%',
            transform: this.state.showPicture ? 'translate(-50%, -50%) scale(2)' :'scale(1)',
            zIndex: this.state.showPicture && '500',
            width: width, 
            height: height,
            margin: '3px',
            overflow: this.state.showPicture ? 'visable': 'hidden',
            display: 'flex',
            placeContent: 'center center',
        };
		
        const imageStyle ={
            width: '100%',
            height: '100%',
            transformOrigin: 'center center', 
            objectFit: data.screenShot ? 'contain' : 'cover', //this.props.contain ? 'contain' : 'cover',
            transition: 'all 500ms',
            transform: this.state.hoverImage || this.state.showPicture ? 'scale(0.9)': 'scale(1)',
        };

        return (
            <div 
                style={imageContainerStyle}
                onMouseEnter={() =>{ this.setState({ hoverImage: true }); } }
                onMouseLeave={() =>{ this.setState({ hoverImage: false  }); } }
                onClick={() =>{ this.setState({ showPicture: !this.state.showPicture}); } }
            >
                <img style={imageStyle} src={data.imageUrl || data.src} alt={data.description}/>
            </div>
        );
    }
}



