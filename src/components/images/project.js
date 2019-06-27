import React from 'react';
import { Action as action } from '../../react_utils/redux/actions';
import { connect } from 'react-redux';

class ProjectImage extends React.Component{

    constructor(){
        super();
        this.state = {
            showText: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
	
    handleClick(){
        this.props.dispatch(action.showProject(this.props.name));
        window.history.pushState({}, '/',`/${this.props.name}`);
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
            cursor:  'pointer',
            width: width, 
            height: height,
            margin: '3px',
            overflow: 'hidden',
            display: 'flex',
            placeContent: 'center center'
        };
		
        const imageStyle ={
            cursor:  'pointer',
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
                onClick={() => this.handleClick() }
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
                            opacity: this.state.showText ? 1 : 0,
                            alignSelf: 'center',
                            backgroundColor: 'rgba(0,0,0,0)',
                        }}
                        onMouseEnter={() =>{ this.setState({ showText: true }); } }
                        onMouseLeave={() =>{ this.setState({ showText: false  }); } }
                        onClick={() => this.handleClick() }

                    >{this.props.name}</h2>
                </div>
                <img style={imageStyle} src={this.props.imageUrl || this.props.src}/>
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {
        
    };
};

export default connect(mapStateToProps)(ProjectImage);

