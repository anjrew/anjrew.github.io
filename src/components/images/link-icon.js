import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { connect } from 'react-redux';

class LinkIcon extends React.Component{

    constructor(){
        super();
        this.state = {
            hover: false,
            show: false
        };
    }

    render(){
        const data = this.props.data;
    
        const imageContainerStyle = {
            cursor:  'pointer',
            height: '60px',
            margin: '3px',
            overflow: 'hidden',
            display: 'flex',
            placeContent: 'center center',
            transition: 'all 500ms',
            transform: this.state.hover ? 'scale(1.08)': 'scale(1.0) ',
        };
		
        const imageStyle ={
            cursor:  'pointer',
            width: 'auto',
            height: '100%',
            transformOrigin: 'center center', 
            objectFit: 'contain',
            filter: this.state.hover && data.static && `blur(8px) brightness(1.5)`,
        };
		
        const words = data.name.split(' ');
        var biggestWordLength = 0; 
        for (let index = 0; index < words.length; index++) {
            const word = words[index];
            if ( word.length > biggestWordLength){
                biggestWordLength = word.length;
            }
        }
		
        var fontSize = data.name.length > 15 || biggestWordLength > 4 ? '13px' : '20px';
        if (biggestWordLength > 8 ) {
            fontSize = '10px';
        }
		
	
        const element = <a href={data.href} alt={data.name} target="_blank" rel="noopener noreferrer">
            <div 
                style={imageContainerStyle}
                onMouseEnter={() =>{ this.setState({ hover: true }); } }
                onMouseLeave={() =>{ this.setState({ hover: false  }); } }
            >
                <div
                    style={{
                        display: 'flex',
                        placeContent: 'center center' ,
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        zIndex:'10',
                        alignSelf: 'center',
                        padding: '10px'
                    }}>
                    <h2 
                        style={{  
                            color: 'black',
                            textAlign: 'center',
                            margin: '30px',
                            // wordBreak: 'break-all',
                            fontSize: fontSize,
                            transition: 'opacity 500ms',
                            opacity: this.state.hover && data.static ? 1 : 0,
                            alignSelf: 'center',
                            backgroundColor: this.props.mobileApp ? 'white' : 'rgba(0,0,0,0)'
                        }}
                        onMouseEnter={() =>{ this.setState({ hover: true }); } }
                        onMouseLeave={() =>{ this.setState({ hover: false }); } }
                    >{data.name}</h2>
                </div>
                <img style={imageStyle} src={data.imageUrl || data.src}/>
            </div>
        </a>;

        return this.props.mobileApp ? element :
		
            <ScrollAnimation
                animateIn={this.props.mobileApp || this.props.smallScreen ? "fadeIn" : "fadeInLeft"}
                animateOnce={true}
                delay={Math.floor(Math.random() * 600)}> 
                {element}
            </ScrollAnimation>;
        
    }
	
    componentDidMount(){
        this.setState({
            show: true
        });
    }
}


const mapStateToProps = state => {

    return {
        mobileApp: state.mobileApp,
        smallScreen: state.smallScreen
    };
};

export default connect(mapStateToProps)(LinkIcon);

