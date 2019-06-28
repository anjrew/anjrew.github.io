
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Action as action } from '../../react_utils/redux/actions';
import { BrowserRouter, Route } from "react-router-dom";

// Components
import { Column } from '../layout/column';
import { Row } from '../layout/row';
import { Container } from '../boxes/container';

class Carosel extends React.Component{

    constructor(){
        super();
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
	
    render(){
        const arrowStyle = {
            height: this.props.mobileApp? '50px' : '150px',
            width: this.props.mobileApp? '50px' : '150px',
            padding: '10px',
            margin: '10px',
            cursor: 'pointer'
        };
        const imageStyle = {
            objectFit: 'cover',
            maxWidth: this.props.mobileApp ? 'calc(80% - 100px)' : 'calc(90% - 300px)',
            width: 'auto',
            height: 'calc(80% - 100px)',
        };
        if(this.props.currentImage){
            window.history.pushState({}, 'this.props.data.name',`/${this.props.currentImage.project}/image/${this.props.currentImage.name}`);
        }
		
        return <CSSTransition 
            key={'carosel'} 
            in={!!this.props.nextImage || !!this.props.currentImage}
            onExited={() => this.props.dispatch(action.renderNext()) }
            timeout={400} 
            classNames="fade" 
            unmountOnExit>
            <BrowserRouter>
                <Route render= {({ history }) => {
                    return( <Column
                        onKeyDown={ this.handleKeyPress }
                        position={'fixed'}
                        top={'0px'}
                        left='0px'
                        width='100vw'
                        height='100vh'
                        zIndex='800'
                        backgroundColor= 'rgba(0,0,0,0.80)'
                        onClick={() => {
                            this.props.dispatch(action.dismissImage());
                            history.push(`/${this.props.currentImage.project}`);
                        }}>
                        <Row
                            height='calc(80% - 100px)'
                            width={'auto'}
                            minWidth='100%'>
                            <div
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    this.props.dispatch(action.previousImage(this.props.currentImage));
                                }}
                            >
                                <img 
                                    src="/assets/icons/back-arrow-white.png"      
                                    alt='left-arrow' 
                                    style={arrowStyle}
                                /></div>
                            <CSSTransition 
                                key={'key'} 
                                in={!!this.props.showImage}
                                onExited={() => {
                                    this.props.nextImage && this.props.dispatch(action.renderNext());
                                }}
                                timeout={410}
                                classNames={this.props.direction || 'fade'} 
                                unmountOnExit>
                                <img src={this.props.currentImage && this.props.currentImage.imageUrl} 
                                    alt='image' 
                                    style={imageStyle}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                    }}/>
                            </CSSTransition>
                            <div
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    this.props.dispatch(action.nextImage(this.props.currentImage));
                                }}
                            ><img src="/assets/icons/right-arrow-white.png"
                                    alt='right-arrow' 
                                    style={arrowStyle}
                                /></div>
                        </Row>
			
                        <Container
                            paddin='30px'>
                            <h3 style={{color: 'white', 
                                backgroundColor: 'rgba(0,0,0,0)',
                                textAlign: "center"}}>{this.props.currentImage && this.props.currentImage.name}</h3>
                            <p style={{
                                color: 'white',
                                backgroundColor: 'rgba(0,0,0,0)',
                                textAlign: "center"
                            }}>{this.props.currentImage && this.props.currentImage.description}</p>
                        </Container>
			
                    </Column>);
                }} />
            </BrowserRouter>
        </CSSTransition>;
    }
	
    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyPress);
        if ( this.props.currentImage ){
            this.setState({
                showImage: true
            });
        }
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.handleKeyPress, true);
    }

    handleKeyPress(event){

        if (event.keyCode == 39){
            this.props.dispatch(action.nextImage(this.props.currentImage));
        }
        if (event.keyCode == 37){
            this.props.dispatch(action.previousImage(this.props.currentImage));
        }
        if (event.keyCode == 27){
            this.props.dispatch(action.dismissImage());
        }
    }
}

const mapStateToProps = state => {

    return {
        currentImage: state.currentImage,
        nextImage: state.nextImage,
        showImage: state.showImage,
        direction: state.direction,
        mobileApp: state.mobileApp
    };
};

export default connect(mapStateToProps)(Carosel);