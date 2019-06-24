import React from 'react';

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
            width: width, 
            height: height,
            margin: '3px',
            overflow: 'hidden',
            display: 'flex',
            placeContent: 'center center',
            transform: this.state.showPicture ? 'scale(2)' : 'scale(1)',
        };
		
        const imageStyle ={
            width: '120%',
            height: '120%',
            transformOrigin: 'center center', 
            objectFit: 'cover',
            transition: 'all 500ms',
            // filter: this.state.showPicture && 'blur(8px) brightness(0.8)',
            transform: this.state.hoverImage ? 'scale(0.9) translateY(-10%)' : 'translateY(-10%)',
        };

        return (
            <div 
                style={imageContainerStyle}
                onMouseEnter={() =>{ this.setState({ hoverImage: true }); } }
                onMouseLeave={() =>{ this.setState({ hoverImage: false  }); } }
                onClick={() =>{ this.setState({ showPicture: !this.state.showPicture}); } }
            >
                <div
                    style={{
                        display: 'flex',
            			placeContent: 'center center' ,
                        width: width,
                        height: height,
                        position: 'absolute',
                        zIndex:'10',
                        alignSelf: 'center',
                        padding: '10px'
                    }}
                    onMouseEnter={() =>{ this.setState({ hoverImage: true }); } }
                    onMouseLeave={() =>{ this.setState({ hoverImage: false  }); } }
                    onClick={() =>{ this.setState({ showPicture: !this.state.showPicture}); } }

                >
                </div>
                <img style={imageStyle} src={data.imageUrl || data.src} alt={data.description}/>
            </div>
        );
    }
}



