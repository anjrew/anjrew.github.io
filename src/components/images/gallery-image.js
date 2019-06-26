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
        this.mouseOver = this.mouseOver.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
        this.mouseClick = this.mouseClick.bind(this);
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
		
        const words = data.name ? data.name.split(' ') : [];
        var biggestWordLength = 0; 
        for (let index = 0; index < words.length; index++) {
            const word = words[index];
            if ( word.length > biggestWordLength){
                biggestWordLength = word.length;
            }
        }
		
        var fontSize = data .name ? data.name.length > 15 || biggestWordLength > 5 ? '50px' : '80px' : '0px';
        if (biggestWordLength > 10 ) {
            fontSize = '40px';
        }

        return (
            <React.Fragment>
                <div 
                    style={imageContainerStyle}
                    onMouseEnter={this.mouseOver} 
                    onMouseLeave={this.mouseLeave }
                    onClick={this.mouseClick}
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
                            onMouseEnter={this.mouseOver} 
                            onMouseLeave={this.mouseLeave }
                            onClick={this.mouseClick}
                        >{data && data.name}</h2>
                    </div>
                    <img style={imageStyle} src={data.imageUrl || data.src} alt={data.description}/>
                </div>
            </React.Fragment>
        );
    }
	
    mouseOver(){
        this.setState({ hoverImage: true });
    }
    mouseLeave(){
        this.setState({ hoverImage: false  }); 
    }
    mouseClick(){
		console.log('this.props.mobileApp',this.props.mobileApp)
        if (!this.props.mobileApp) {
            this.props.dispatch(action.showImage(this.props.data));
        }
    }
}

const mapStateToProps = state => {
    return {
        pageToRender: state.pageToRender,
        smallScreen: state.smallScreen,
        mobileApp: state.mobileApp, 
    };
};

export default connect(mapStateToProps)(GalleryImage);



