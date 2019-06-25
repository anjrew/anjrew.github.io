import React from 'react';
import { connect } from 'react-redux';
import { Action as action } from '../../react_utils/redux/actions';

class GalleryImage extends React.Component{

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
            overflow: data.screenShot ? 'visable': 'hidden',
            display: 'flex',
            placeContent: 'center center',
        };
		
        const imageStyle ={
            width: data.screenShot ?'100%' : '120%',
            height: data.screenShot ?'100%' : '120%',
            transformOrigin: 'center center', 
            objectFit: data.screenShot ? 'contain' : 'cover', //this.props.contain ? 'contain' : 'cover',
            transition: 'all 500ms',
            filter: this.state.hoverImage && 'blur(8px) brightness(0.8)',
            transform: this.state.hoverImage || this.state.showPicture ? 'scale(0.9) translateY(-5%)': 'scale(1)',
        };
		
        console.log('The data is',data);
        const words = data.name.split(' ');
        var biggestWordLength = 0; 
        for (let index = 0; index < words.length; index++) {
            const word = words[index];
            if ( word.length > biggestWordLength){
                biggestWordLength = word.length;
            }
        }
		
        var fontSize = data.name.length > 15 || biggestWordLength > 6 ? '50px' : '80px';
        if (biggestWordLength > 10 ) {
            fontSize = '40px';
        }


        // const imageStyle ={
        //     filter: this.state.showText && 'blur(8px) brightness(0.8)',
        //     transform: this.state.showText ? 'scale(0.9) translateY(-10%)' : 'translateY(-10%)',
        // };
        return (
            <React.Fragment>
                <div 
                    style={imageContainerStyle}
                    onMouseEnter={() =>{ this.setState({ hoverImage: true }); } }
                    onMouseLeave={() =>{ this.setState({ hoverImage: false  }); } }
                    onClick={() => {  this.props.dispatch(action.showImage(data)); } }
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
                            padding: '10px'
                        }}
                    >
                        <h2 
                            style={{  
                                color: 'white',
                                textAlign: 'center',
                                margin: '30px',
                                fontSize: fontSize,
                                transition: 'opacity 500ms',
                                opacity: this.state.hoverImage ? 1 : 0,
                                alignSelf: 'center',
                                backgroundColor: 'rgba(0,0,0,0)',
                            }}
                            onMouseEnter={() =>{ this.setState({ hoverImage: true }); } }
                            onMouseLeave={() =>{ this.setState({ hoverImage: false  }); } }
                            onClick={() => {  this.props.dispatch(action.showImage(data)); } }

                        >{data && data.name}</h2>
                    </div>
                    <img style={imageStyle} src={data.imageUrl || data.src} alt={data.description}/>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        pageToRender: state.pageToRender,
        smallScreen: state.smallScreen 
    };
};

export default connect(mapStateToProps)(GalleryImage);



