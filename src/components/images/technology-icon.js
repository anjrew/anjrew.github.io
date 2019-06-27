import React from 'react';
import { connect } from 'react-redux';


export class TechnologyIcon extends React.Component{

    constructor(){
        super();
        this.state = {
            showText: false,            
            show: false
        };
    }

    render(){
        const data = this.props.data;
        const size = data.size || '100px';
        const width = size;
        const height = size;
		
        const words = data.name.split(' ');
        var biggestWordLength = 0; 
        for (let index = 0; index < words.length; index++) {
            const word = words[index];
            if ( word.length > biggestWordLength){
                biggestWordLength = word.length;
            }
        }
		
        var fontSize = data.name.length > 15 || biggestWordLength > 4 ? '24px' : '40px';
        if (biggestWordLength > 8 ) {
            fontSize = '20px';
        }


        const imageContainerStyle = {
            width: width, 
            height: height,
            margin: '3px',
            overflow: 'hidden',
            display: 'flex',
            placeContent: 'center center'
        };
		
        const imageStyle ={
            width: '100%',
            height: '100%',
            transformOrigin: 'center center', 
            objectFit: 'contain',
            transition: 'all 500ms',
            filter: this.state.showText && 'blur(8px) brightness(1.5)',
            transform: 'scale(0.9) ',
        };

        return (
            
            <a href={data.href} alt={data.name} target="_blank" rel="noopener noreferrer">
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
                            height: height,
                            position: 'absolute',
                            zIndex:'10',
                            alignSelf: 'center',
                            // wordWrap: 'break-word',
                            padding: '10px'
                        }}
                    >
                        <h2 
                            style={{  
                                color: 'black',
                                textAlign: 'center',
                                margin: '30px',
                                // wordBreak: 'break-all',
                                fontSize: fontSize,
                                transition: 'opacity 500ms',
                                opacity: this.state.showText ? 1 : 0,
                                alignSelf: 'center',
                                backgroundColor: this.props.mobileApp ? 'white' : 'rgba(0,0,0,0)'
                            }}
                            onMouseEnter={() =>{ this.setState({ showText: true }); } }
                            onMouseLeave={() =>{ this.setState({ showText: false  }); } }
                        >{data.name}</h2>
                    </div>
                    <img style={imageStyle} src={data.imageUrl || data.src}/>
                </div>
            </a>
        );
    }

}

const mapStateToProps = state => {

    return {
        mobileApp: state.mobileApp,
        smallScreen: state.smallScreen
    };
};

export default connect(mapStateToProps)(TechnologyIcon);


